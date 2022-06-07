import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function Search() {
  return (
    <View style={{marginTop:15, flexDirection:"row"}}>
        <GooglePlacesAutocomplete 
            placeholder="Search"
            styles={{
                textInput:{
                    backgroundColor:"#eeeeee",
                    borderRadius:20,
                    fontWeight:"700",
                    marginTop:7,
                },
                textInputContainer:{
                    backgroundColor:"#eeeeee",
                    borderRadius:50,
                    flexDirection:"row",
                    alignItems: "center",
                    marginBottom:10,
                }
        }}
        renderLeftButton={() => (
            <View style={{marginLeft:10}}>
                <Ionicons name="location-sharp" size={24} />
            </View>
        )}
        renderRightButton={() => (
            <View style={{
                            flexDirection:"row",
                            marginRight:8,
                            backgroundColor:"white",
                            padding:9,
                            alignItems: "center", 
                            borderRadius:30}}>
                <AntDesign  name="clockcircle" size={11}/>
                <Text style={{marginLeft:7}}>Search</Text>
            </View>
        )}
        />
    </View>
  )
}