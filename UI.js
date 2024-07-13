import { View, StyleSheet,Dimensions,Image, Text,SafeAreaView,style, ImageBackground, TextInput, ActivityIndicator } from "react-native";
import React from "react";
//const{height}=Dimensions.get("window")

export function Design(){
    return(
        <View style={styles.out} >
        <SafeAreaView style={{flex:1}}>
        <View style={styles.front}>
        <View style={styles.raya}>
        <Text style={styles.rays}>Raya's Smoothie</Text>
        </View>
        <View style={styles.back}>
         <Image source={require("./assets/Watermelon-Drink-PNG.png")} style={styles.image} />
         </View>
         <View style={styles.text1}>
            <Text style={styles.text}>Sign in for a Smoothistic experience!</Text>
         </View>
         <View style={styles.em}>
            <TextInput placeholder="Enter your Email" style={styles.email}/>
         </View>
         <View style={styles.em}>
            <TextInput placeholder="Enter your password" style={styles.email}/>
         </View>
         <View style={styles.cont}>
            <Text style={styles.us}>
                Contact us:
            </Text>
            <View style={styles.image2}>
                <Image source ={require("./assets/logo-ig-png-32464.png")} style={styles.img}/> 
                
                <View style={styles.last}>
                <Text>_Raya0_</Text>
                </View>
            </View>
         </View>
         <View>
            <Image source={require("./assets/pngwing.com.png")} style={styles.png}/>
         </View>
        </View>
       
        </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{width:200,
        height:200,
        resizeMode:"contain",
        margin:20,
        
    },
    first:{
        color:"red",
        alignItems:"center",


    },
    raya:{alignItems:"center",
        marginTop:30,
       
        
    },
    email:{
        borderWidth:2,
        borderRadius:10,
        width:200,
        height:30,
        marginTop:20,
        borderColor:"red",

    },
    text1:{
        alignItems:"center"
    },
    back:{
        alignItems:"center",
        
    },
    rays:{
        fontSize:50,
        fontWeight:"bold",
    },
    text:{
        fontSize:20,
        fontWeight:"700",
        
    },
    em:{
        alignItems:"center"
    },
    cont:{
        alignItems:"center",
        marginTop:40,
    },
    us:{
        fontSize:20,
        fontStyle:"italic"
    },
    img:{
        width:30,
        height:30,
        marginTop:5,
        },
        image2:{
            
            marginRight:4
        },
        last:{
            marginLeft:40,
            marginTop:-17
        },
        
        
        png:{
            width:450,
            height:300,
        },
        out:{
            backgroundColor:"orange",
            flex:1,
        }

})