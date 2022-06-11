import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

export default function MenuItems({ menuInfo }) {

    return (
        <ScrollView style={{ height: '60%' }} showsVerticalScrollIndicator={false}>
            {menuInfo.map((food, index) => {
                return (
                    <View key={index}>
                        <View style={{ margin: 20, flexDirection: "row", justifyContent: 'space-between' }}>
                            <BouncyCheckbox
                                fillColor="green"
                                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                                onPress={(isChecked) => {
                                    console.log('Checked', isChecked)
                                }} />
                            <FoodInfo info={food} />
                            <FoodImage image={food.image} />
                        </View>
                        <Divider width={0.5} orientation="vertical" color="#F7D716" style={{ marginHorizontal: 15 }} />
                    </View>
                )
            }
            )}
        </ScrollView>
    )
}

const FoodInfo = ({ info }) => (
    <View style={{ width: "55%", justifyContent: 'space-evenly' }}>
        <Text style={{ fontSize: 19, fontWeight: '600', color: "#293462" }}>{info.title}</Text>
        <Text>{info.description}</Text>
        <Text>{info.price}</Text>
    </View>
)
const FoodImage = ({ image }) => (
    <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 8 }} />
)

