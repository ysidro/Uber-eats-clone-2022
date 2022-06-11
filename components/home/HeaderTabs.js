import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'

export default function HeaderTabs({activeTab, setActiveTab}) {

 

  return (
    <View style={styles.tabsButtonStyle}>

          <HeaderTabsButton 
            text="Delivery"
            btnLabelStyle={activeTab === "Delivery" ? styles.btnBackgroundBlack : styles.btnBackgroundWhite}
            btnStyle={activeTab === "Delivery" ? styles.btnLableWhite : styles.btnLableBlack } 
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          
          <HeaderTabsButton 
            text="Pickup"
            btnLabelStyle={activeTab === "Pickup" ? styles.btnBackgroundBlack : styles.btnBackgroundWhite}
            btnStyle={activeTab === "Pickup" ? styles.btnLableWhite : styles.btnLableBlack}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
    </View>
  )
}

const HeaderTabsButton = (props) => (
  <TouchableOpacity style={props.btnLabelStyle}
    onPress={()=>  props.setActiveTab(props.text) }
  >
    <Text style={props.btnStyle}>{props.text}</Text>
  </TouchableOpacity>

)

const styles = StyleSheet.create({
  tabsButtonStyle:{
    flexDirection:"row",
    alignSelf:"center",
  },
  btnBackgroundBlack:{
    backgroundColor:"#293462",
    paddingVertical:6,
    paddingHorizontal:16,
    borderRadius:30,
  },
  btnLableBlack:{
    color:"#293462",
    fontWeight:"700",
    fontSize:14,
  },
  btnBackgroundWhite:{
    backgroundColor:"white",
    paddingVertical:6,
    paddingHorizontal:16,
    borderRadius:30,
  },
  btnLableWhite:{
    color:"white",
    fontWeight:"700",
    fontSize:14,
  },
})