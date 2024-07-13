import { useState } from "react";
import { View,Text, SafeAreaView , StyleSheet, Button, TextInput} from "react-native";


export function Test(){
    

   // const thisData= <View>[{
  //      name:'Bond',
   // }]
</View>
    const [names, setName]= useState([{
        name:'Bond', key:1
    }]);
    const [age, setAge] = useState([{
        age:20, key:2
    }]);

console.log(names)

    return(
        <SafeAreaView>
<View style={styles.container}>
    <Text>This is a test</Text>
    <Text>Provide you log in details to proceed to the next screen</Text>
    <TextInput
        placeholder="Enter your Name" style={styles.input} keyboardType="phonePad"
    onChangeText={console.log(names.push(setName))}/>
    <View>
    <Button title="Press me!" onPress={()=>{console.log("Button pressed")}}/>
</View>
    <TextInput
        placeholder="Enter your age" style={styles.input} keyboardType="numeric"
    />
                   
                    
</View>
<View>
    <Button title="Press me!" onPress={()=>{console.log("Button pressed")}}/>
</View>
</SafeAreaView>
)}

const styles = StyleSheet.create({
    container:{flex:0,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        marginTop:300,

    },
    text:{color:"green",},
    button:{
        marginTop:20,
        backgroundColor:'blue'
    },
    input:{
        borderWidth:1,
        borderColor:'orange',
        borderRadius:30,
        padding:8,
        margin:10,
        width:200, 
    }
})
 


