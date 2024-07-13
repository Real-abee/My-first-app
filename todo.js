import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Header } from './components/header';
import { TodoItem } from './components/todoItem';
import { AddTodo } from './components/addTodo';


export function Todo() {
const [todo, setTodo]= useState([
    {text:"Buy coffee", key:"1"},
    {text:"Design a code", key:"2"},
    {text:"Go to the gym", key:"3"},
]);
const pressHandler = (key)=>{
  setTodo((prevTodo)=>{return prevTodo.filter(todo=>todo.key !=key)})
}

const submitHandler =(text)=>{
  if(text.length>4)
  {setTodo((prevTodo)=>{
    return[
      {text:text, key:Math.random().toString},
    ...prevTodo
  ]})}
  else{
    Alert.alert('OOPS', 'Todos must be more than 4 chars long!', [{text:'Understood', onPress:()=>{
      console.log('Understood pressed')
    }}])
  }
}

  return (<SafeAreaView>
  
    <View style={styles.container}>
    <Header />
    <View style={styles.content}>
    <AddTodo submitHandler={submitHandler} />
      <View style={styles.list}>
        <FlatList
          data={todo}
          renderItem={({item})=>(
           <TodoItem item={item} pressHandler={pressHandler}/>
          )}
        />
      </View>
    </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
    },
    content:{padding:40},
    list:{marginTop:20},
})