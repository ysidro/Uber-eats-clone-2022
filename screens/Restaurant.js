import React from 'react'
import { View } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';

import About from '../components/restaurant/About'
import MenuItems from '../components/restaurant/MenuItems';

const menuItems = [
    {
        title: "Chicken Wings",
        description: "San Franc...(truncated to the first 10000 characters)",
        price: "$ 13.44",
        image: "https://s3-media4.fl.yelpcdn.com/bphoto/LTtoZ25m8FX1UV37asnTCw/o.jpg",
    },
    {
        title: "Chicken Wings",
        description: "San Franc...(truncated to the first 10000 characters)",
        price: "$ 13.44",
        image: "https://s3-media4.fl.yelpcdn.com/bphoto/LTtoZ25m8FX1UV37asnTCw/o.jpg",
    },
    {
        title: "Chicken Wings",
        description: "San Franc...(truncated to the first 10000 characters)",
        price: "$ 13.44",
        image: "https://s3-media4.fl.yelpcdn.com/bphoto/LTtoZ25m8FX1UV37asnTCw/o.jpg",
    },
    {
        title: "Chicken Wings",
        description: "San Franc...(truncated to the first 10000 characters)",
        price: "$ 13.44",
        image: "https://s3-media4.fl.yelpcdn.com/bphoto/LTtoZ25m8FX1UV37asnTCw/o.jpg",
    },
    {
        title: "Chicken Wings",
        description: "San Franc...(truncated to the first 10000 characters)",
        price: "$ 13.44",
        image: "https://s3-media4.fl.yelpcdn.com/bphoto/LTtoZ25m8FX1UV37asnTCw/o.jpg",
    },
    {
        title: "Chicken Wings",
        description: "San Franc...(truncated to the first 10000 characters)",
        price: "$ 13.44",
        image: "https://s3-media4.fl.yelpcdn.com/bphoto/LTtoZ25m8FX1UV37asnTCw/o.jpg",
    },
]

export default function Restaurant() {
    return (
        <View>
            <About />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems menuInfo={menuItems} />
        </View>
    )
}