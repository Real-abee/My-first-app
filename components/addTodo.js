import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React,{useState} from 'react'




export function AddTodo({submitHandler}){

    const [text, setText]= useState('');
const changeHandler = (val)=>{
    setText(val);
}
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='Set Todo...'
                onChangeText={changeHandler}

            />
            <Button onPress={()=>submitHandler(text)} title='Add Todo' color='coral'/>
        </View>
        
    )
}
const styles= StyleSheet.create({
    input:{marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',

    }
})