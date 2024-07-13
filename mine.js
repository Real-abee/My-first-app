import { Alert,style, Button, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View, } from "react-native";
import { useState } from "react"
export function Mine() {
    const [eamil, setEmail] = useState("")
    // console.log(StatusBar.currentHeight);
    const num = "";
   function displayAlert() {
        // console.log(ToastAndroid.SHORT);
        // ToastAndroid.showWithGravity(
        //     "Login Successful",
        //     ToastAndroid.SHORT,
        // )
       /* Alert.alert(
            "Display alert",
            "Do you want to submit this email for review?",
            [
                {
                    text: "Yes",
                    onPress: () => { console.log("Yes CLicked") }
                },
                { text: "No" }, { text: "don't ask again" }
            ]
        )
    }
*/

   // const list = [{ title: "Am going to the market", date: "2/2/2024" }];
    const list = [
        { title: "Am going to the market", date: "2/2/2024" },
    ];


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView >
                <View style={styles.container}>
                    <Text style={styles.header}>Login {num}</Text>
                    <Text style={styles.text}>Provide you log in details to proceed to the next screen</Text>
                    
            </View>{/* <ScrollView > */}
            </ScrollView></SafeAreaView>
           ) }
           const styles = StyleSheet.create({
            container:{marginTop:30,
                backgroundColor:"green",
            },
            header:{margin:15,},
            text:{
                color:"red"
            }
           })}