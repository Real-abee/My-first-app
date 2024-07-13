import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView, View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { TextComponent } from "react-native";


export function Login(){
   // console.log(StatusBar.currentHeight);
        return (
            <SafeAreaView> 
                <View style={styles.container}>
                    <Text style={styles.header}>Login</Text>
                    <Text style={styles.text}>Provide your Login details to proceed to the next screen</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email" // The TexInput does the work of the "Form element " in HTML
                />
                <Button onPress={()=>console.log("Button Clicked")} title="Submit"/>
                <TouchableOpacity style={styles.btn} onPress={()=>console.log("Button Clicked")}></TouchableOpacity>
                </View>
    
            </SafeAreaView>// the safe area view is for IOS. it enables us to be able to view our element at the right position to the status bar
        )
    }
    
    const styles = StyleSheet.create({
    
        container: {
            marginTop: StatusBar.currentHeight,// this adjusts the status bar for android devices
            padding: 20,
        },
        header: {
            fontSize: 30,
            fontWeight:"bold",
            textAlign:"center",
        },
        text:{
            marginTop:20,
            fontSize:18,
            color:"gray",
        },
        input:{
            borderWidth:1,
            borderColor:"green",
            padding:10,
            marginTop:10,
            borderRadius:30,
        },
    })