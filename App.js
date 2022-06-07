import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
    <View styles={{ flex:1, 
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:"#eee"
                    }}>
      <Home/>
    </View>
  );
}

