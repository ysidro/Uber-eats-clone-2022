import React from 'react'
import { View, Text, Image } from 'react-native'

export default function About({route}) {

    const {params} = route
    const formattedCategories = params.categories.map((cat)=> cat.title).join(" • ")
    const description = `${formattedCategories} ${params.price ? " • " + params.price : ""} 💳 • ${params.rating} ⭐ • (${params.review_count}+)`

    return (
        <View style={{ backgroundColor: "#293462", paddingBottom: 10 }}>
            <RestaurantImage image={params.image_url} />
            <RestaurantName title={params.name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = ({ image }) => (
    <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
)

const RestaurantName = ({ title }) => (
    <View>
        <Text style={{ fontSize: 18, color: "white", fontWeight: "700", padding: 10 }}>{title}</Text>
    </View>
)

const RestaurantDescription = ({ description }) => (
    <View>
        <Text style={{ fontSize: 13.5, color: "white", paddingHorizontal: 10 }}>{description}</Text>
    </View>
)

