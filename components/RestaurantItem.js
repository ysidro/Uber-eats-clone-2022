import React from 'react'
import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginTop:15}}>
    <View style={Styles.container}>
        <RestaurantImage />
        <RestaurantInfo/>
    </View>
    </TouchableOpacity>
  )
}

const RestaurantImage = () => (
    <>
        <Image source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcZbTP3rYvhOo1__vUKMBTypWWmKHtOwF0w&usqp=CAU"}}
        style={{ width: "100%", height: 180}} />
        <TouchableOpacity style={{ position: "absolute", top:20,right:20 }}>
            <MaterialCommunityIcons name="heart-outline" 
                                    size={25} 
                                    color="white"/>
        </TouchableOpacity>
    </>
)

const RestaurantInfo = () => (
    <View style={Styles.RestaurantItem}>
        <View>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Farmhouse Kitchen Thai Cuisine. </Text>
            <Text style={{ color:"#737171" }}> 30-45 • min </Text>
        </View>
        <View style={Styles.RestaurantItemDad}>
            <Text>4.5</Text>
        </View>
       
    </View>
)


const Styles = StyleSheet.create({
    RestaurantItem:{
        paddingTop:15,
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"space-between",
    },
    RestaurantItemDad: {
        backgroundColor:"#eee",
        height:30,
        width:30,
        justifyContent:"center",
        alignItems: "center",
        borderRadius:15,
    },
    container:{
        marginTop: 10,
        padding: 15,
        backgroundColor:"#fff"
    }
})