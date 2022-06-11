import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

export default function ViewCart() {
    return (
        <View style={{flex:1, alignItems: 'center',flexDirection: 'row', position:"absolute", bottom:10,size:999}}>
            <View style={CardButtonStyle.container}>
                <TouchableOpacity style={CardButtonStyle.button}>
                    <Text style={CardButtonStyle.text}>View Cart</Text>
                    
                </TouchableOpacity>
            </View>
        </View>
    )
}


const CardButtonStyle = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        width:"100%",
    },
    button:{
        backgroundColor:"#000",
        marginTop:20,
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        padding:13,
        borderRadius:30,
        width:300,
        position:"relative",
    },
    text:{
        color:"white",
        fontSize:20
    }
})

