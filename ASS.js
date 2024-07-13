import {View, SafeAreaView, Button, StyleSheet, Text} from "react-native"

//const myPeople =[{name: Bond, key:1},{name:Raya, key:2}]

export function Ass(){
  return(
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1}}>
    <Text style={styles.txt}>
      WE ARE TESTING THIS THING AGAIN!
    </Text>

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
txt:{color:"green",
    backgroundColor:"orange",
    marginTop:50,
    marginLeft:20
}
})