import React from 'react'
import { SafeAreaView,View ,ScrollView} from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItem from '../components/RestaurantItem'
import Search from '../components/Search'

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor:"#eee"}}>

        <View style={{ backgroundColor:"#fff", padding: 15}}>
            <HeaderTabs/>
            <Search/>
        </View>

        
        <ScrollView  showsVerticaltalScrollIndicator={false}>
            <Categories/>
            <RestaurantItem/>
            <RestaurantItem/>
            <RestaurantItem/>
            <RestaurantItem/>
            <RestaurantItem/>
            <RestaurantItem/>
        </ScrollView>

    </SafeAreaView>
  )
}