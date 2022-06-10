import React from 'react'
import { View, Text,Image } from 'react-native'

export default function About() {

    const image = "https://s3-media4.fl.yelpcdn.com/bphoto/LTtoZ25m8FX1UV37asnTCw/o.jpg"
    const title = "Kokkari Estiatorio"
    const description = "Thai • Comfort Food • $$ • • 4 (2913+)"

  return (
    <View>
        <RestaurantImage image={image}  />
        <RestaurantTitle title={title} />
        <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = ({image}) =>(
    <Image source={{ uri: image }} style={{width:"100%", height:180}} />
)

const RestaurantTitle = ({title}) =>(
    <View>
    <Text style={{fontSize:18 , fontWeight: "600" ,padding:10}}>{title}</Text>
    </View>
)

const RestaurantDescription = ({description}) =>(
    <View>
    <Text style={{fontSize:14 ,paddingHorizontal:10}}>{description}</Text>
    </View>
)

