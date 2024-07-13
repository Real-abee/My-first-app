import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import {Todo} from "./todo"

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();
    console.log('Keyboard dismissed!')}}>
    <View >
      <Todo/>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({})