import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export function Header(){
    return(
        <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text></View>
    )
}
const styles =StyleSheet.create({
header:{height:80,
    paddingTop:38,
    backgroundColor:'coral'
},
title:{textAlign:"center",
    color:'white',
    fontSize:20,
    fontWeight:'bold'
}
})