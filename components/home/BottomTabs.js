import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs() {
    return (
        <View style={{flexDirection:"row", margin:10,marginHorizontal:30,justifyContent:"space-between"}}>
            <SetButtonIcon text="Home" icon="home" />
            <SetButtonIcon text="Browser" icon="search" />
            <SetButtonIcon text="Gorcery" icon="shopping-bag" />
            <SetButtonIcon text="Orders" icon="receipt"/>
            <SetButtonIcon text="Accounts" icon="user"/>
        </View>
    )
}

const SetButtonIcon = ({text,icon}) => (
    <>
    <TouchableOpacity>
        <FontAwesome5 name={icon} size={25} style={{marginBottom:3, color:"#293462", alignSelf:"center"}} light />
        <Text style={{color:"#293462"}}>{text}</Text>
    </TouchableOpacity>
    </>
)
