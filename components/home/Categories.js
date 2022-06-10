import React from 'react'
import { View, Text, Image, StyleSheet,ScrollView, TouchableOpacity } from 'react-native'



const items = [
    {
        image: require('../../assets/images/shopping-bag.png'),
        text:"Pick-up"
    },{
        image: require('../../assets/images/soft-drink.png'),
        text:"Soft Drinks"
    },{
        image: require('../../assets/images/bread.png'),
        text:"Bakery Items"
    },{
        image: require('../../assets/images/fast-food.png'),
        text:"Fast Food"
    }
    ,{
        image: require('../../assets/images/deals.png'),
        text:"Deals"
    }
    ,{
        image: require('../../assets/images/coffee.png'),
        text:"Coffee & Tea"
    }
    ,{
        image: require('../../assets/images/desserts.png'),
        text:"Desserts"
    }
]

export default function Categories() {
  return (
   <View style={{ backgroundColor:"#fff", marginTop:5}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity  style={Styles.MenuContainer}>
            <Image 
                style={Styles.MenuImagen}
                source={items[0].image} />
            <Text style={Styles.TextStile}>{items[0].text}</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={Styles.MenuContainer}>
            <Image 
                style={Styles.MenuImagen}
                source={items[1].image} />
            <Text style={Styles.TextStile}>{items[1].text}</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={Styles.MenuContainer}>
            <Image 
                style={Styles.MenuImagen}
                source={items[2].image} />
            <Text style={Styles.TextStile}>{items[2].text}</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={Styles.MenuContainer}>
            <Image 
                style={Styles.MenuImagen}
                source={items[3].image} />
            <Text style={Styles.TextStile}>{items[3].text}</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={Styles.MenuContainer}>
            <Image 
                style={Styles.MenuImagen}
                source={items[4].image} />
            <Text style={Styles.TextStile}>{items[4].text}</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={Styles.MenuContainer}>
            <Image 
                style={Styles.MenuImagen}
                source={items[5].image} />
            <Text style={Styles.TextStile}>{items[5].text}</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={Styles.MenuContainer}>
            <Image 
                style={Styles.MenuImagen}
                source={items[6].image} />
            <Text style={Styles.TextStile}>{items[6].text}</Text>
        </TouchableOpacity>
        
    </ScrollView>
   </View>
  )
}

const Styles = StyleSheet.create({
    MenuContainer:{
        alignItems:"center",
        marginRight:30,
        marginVertical:10,
    },
    MenuImagen:{
        width:50,
        height:40,
        resizeMode:"contain",
    },
    TextStile:{
        fontSize:13,
        fontWeight:"900"
    }
})