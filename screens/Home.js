import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, ScrollView, Dimensions,ActivityIndicator } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Constants from 'expo-constants';

import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import Search from '../components/home/Search'
import BottomTabs from '../components/home/BottomTabs';
import RestaurantItems from '../components/home/RestaurantItems'

export default function Home({navigation}) {
  
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState(null);

  const screenHeight = Dimensions.get('window').height;

  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?tearm=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${Constants.manifest.yelpApiKey}`,
      }
    }

    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .catch((err) => console.error(err))
      .then((data) => {
     
    //      setRestaurantData(data.businesses.filter(business => business.transactions.includes(activeTab.toLowerCase())))
    
          setRestaurantData(data.businesses)
        
       
      })

  }

  useEffect(() => {
    getRestaurantFromYelp()
  },[activeTab,city])


  return (
    <SafeAreaView style={{ backgroundColor: "#eee", }}>

      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        {/* <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} /> */}
        <Search setCity={setCity} />
      </View>
    
      
      
      <ScrollView  showsVerticaltalScrollIndicator={false} style={{ height: screenHeight - 225 }}>
        <Categories />
        {restaurantData.length > 0 ? <RestaurantItems navigation={navigation} restaurantData={restaurantData} />   : <ActivityIndicator style={{ marginTop:"25%"}} size="large" color="#000" /> }
      </ScrollView>

     <View style={{backgroundColor:"#fff"}}>
      <Divider width={1} color="#F7D716" />
      <BottomTabs />
      </View>

    </SafeAreaView>
    
  )
}