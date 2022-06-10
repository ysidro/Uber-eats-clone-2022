import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItems(props) {

    return (
        <TouchableOpacity activeOpacity={1} style={{ marginTop: 15 }}>
            {props.restaurantData.map((restaurant, index) => (
                <View key={index} style={Styles.container}>
                    <RestaurantImage image_url={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name}
                        rating={restaurant.rating}
                    />
                </View>
            ))}
        </TouchableOpacity>
    )
}

const RestaurantImage = (props) => (
    <>
        <Image source={{ uri: props.image_url }}
            style={{ width: "100%", height: 180 }} />
        <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
            <MaterialCommunityIcons name="heart-outline"
                size={25}
                color="white" />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View style={Styles.RestaurantItem}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
            <Text style={{ color: "#737171" }}> 30-45 • min </Text>
        </View>
        <View style={Styles.RestaurantItemDad}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)

const Styles = StyleSheet.create({
    RestaurantItem: {
        paddingTop: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    RestaurantItemDad: {
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    container: {
        marginTop: 10,
        padding: 15,
        backgroundColor: "#fff"
    }
})