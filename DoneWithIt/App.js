import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Alert, Button, Text, Image, View, SafeAreaView, TouchableHighlight} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import Welcomescreen from './app/screens/Welcomescreen.js';
import ViewImageScreen from './app/screens/ViewImageScreen.js';

export default function App() {
  return (
    // <Welcomescreen />
    <ViewImageScreen />
    // <View style={{
    //   backgroundColor: "skyblue",
    //   flex: 1,
    //   flexDirection: "row",
    //   justifyContent: "center",
    //   alignItems: "center",
    // }}>
    //   <View 
    //     style={{
    //       backgroundColor: "white",
    //       height: 100,
    //       width: 100,
    //       alignSelf: "flex-start"
    //     }}
    //   />
    //   <View style={{
    //       backgroundColor: "black",
    //       height: 100,
    //       width: 100,
    //   }}/>
    //   <View style={{
    //       backgroundColor: "pink",
    //       height: 100,
    //       width: 100,
    //   }}/>
    // </View>
  );
}

const containerStyle = {backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    

  },
});
