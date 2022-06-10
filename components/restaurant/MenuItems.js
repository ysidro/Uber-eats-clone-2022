import { View, Text, Image,ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'

export default function MenuItems({menuInfo}) {

  return (
    <ScrollView style={{height: '57%'}} showsVerticalScrollIndicator={false}>
        {   menuInfo.map((food, index) => {
            return(
            <View key={index}>
                <View style={{padding:10, flexDirection:"row", justifyContent: 'space-between'}}>
                    <FoodInfo   info={food} />
                    <FoodImage image={food.image} />
                </View>
                <Divider width={0.5} orientation="vertical"  />
            </View>
            )}
        )}
    </ScrollView>
  )
}

const FoodInfo = ({info}) =>(
    <View style={{width:240,justifyContent: 'space-evenly'}}>
        <Text style={{fontSize:18, fontWeight: '600'}}>{info.title}</Text>
        <Text>{info.description}</Text>
        <Text>{info.price}</Text>
    </View>
)
const FoodImage = ({image}) =>(
    <Image source={{uri:image}} style={{width:100, height:100, borderRadius:8}} />
)