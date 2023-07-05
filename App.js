/* eslint-disable*/
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Image, StyleSheet, Text, View, TextInput, Pressable, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigator';
import { enableScreens } from 'react-native-screens';
import Add from "./Asset/Icons/Add.svg"
import SplashScreen from 'react-native-splash-screen'
import UserContext from './UserContext';

enableScreens();


// import DrawerNavigator from './navigation/DrawerNavigator';


export default function App() {
 



  useEffect(()=>{
     SplashScreen.hide();
    }, [])

  const [user, setUser] = useState("");
  const [curTab, setCurrentTab] = useState("View all");
  const tabs = [{ name: "View all", onPress: () => { } }, { name: "Passes", onPress: () => { } }, { name: "Cards", onPress: () => { } }]
  const compo = () =>{
    return(
      <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 24, marginHorizontal: 24 }}>
        {tabs.map((tab, index) => (
          <Pressable onPress={() => setCurrentTab(tab.name)} key={index} style={{ padding: 10, justifyContent: "center", paddingVertical: 7, paddingHorizontal: 16, backgroundColor: curTab === tab.name ? "#F49D1A" : "white", borderColor: "#F49D1A", borderWidth: 1, borderRadius: 8, marginRight: 16 }}>
            <Text style={{ color: "black" }}>{tab.name}</Text>
          </Pressable>))}
      </View>
      <View style={{ margin: 24, height: 200, backgroundColor: "white", borderRadius: 8, elevation: 3, overflow: "hidden" }}>
        <View style={{ height: "100%", position: "absolute", width: "100%", zIndex: 100 }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: "black", marginTop: 16, marginLeft: 16, fontWeight: "700", fontSize: 32 }}>{"₹800"}</Text>
            <Image style={{ width: 54, height: 54, borderRadius: 27, marginTop: 10, marginRight: 10 }} source={require("./Asset/AppLogo.png")} />
          </View>
          <Text style={{ color: "black", fontSize: 15, marginLeft: 16 }}>{"Name of the Wallet"}</Text>
          <Pressable style={{ backgroundColor: "#F49D1A", marginLeft: 16, padding: 4, borderRadius: 8, marginTop: 24, flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 120 }}>
            <Add />
            <Text style={{ color: "black", fontSize: 15 }}>Add Money</Text>
          </Pressable>
          <Text style={{ fontSize: 15, marginLeft: 16, color: "black", marginTop: 20 }}>Transactions</Text>
          <Text style={{ fontSize: 15, marginLeft: 16, color: "#808080" }}>No Transactions yet</Text>
        </View>
        <View style={{ width: 154, height: 154, borderRadius: 177, backgroundColor: '#FFEFB1', alignSelf: "flex-end", marginRight: -13, marginTop: -34 }} />
        <View style={{ width: 124, height: 124, borderRadius: 62, backgroundColor: '#FFEFB1', alignSelf: "flex-start", marginLeft: -30, marginBottom: -34 }} />
      </View>
      <Text style={{ marginLeft: 24, color: "black", fontSize: 24 }}>Your Passes</Text>
      <View style={{ margin: 24, flexDirection: "row" }}>
        <Pressable style={{ elevation: 4, width: 120, height: 110, backgroundColor: "white", borderRadius: 8, marginRight: 16 }}>
          <Image source={require("./Asset/astroAsset.webp")} style={{ width: 48, height: 48, borderRadius: 8, marginLeft: 8, marginTop: 16 }}></Image>
          <Text style={{ color: "black", fontSize: 16, marginHorizontal: 8, marginTop: 16 }}>Weekly Passes</Text>
        </Pressable>
        <Pressable style={{ elevation: 4, width: 120, height: 110, backgroundColor: "white", borderRadius: 8, marginRight: 16 }}>
          <Image source={require("./Asset/astroAsset5.jpeg")} style={{ width: 48, height: 48, borderRadius: 8, marginLeft: 8, marginTop: 16 }}></Image>
          <Text style={{ color: "black", fontSize: 16, marginHorizontal: 8, marginTop: 16 }}>Monthly Passes</Text>
        </Pressable>
      </View>
    </View>
    )
  }
  return (
   
    <UserContext.Provider value={{ user, setUser }}>

      <NavigationContainer>
        {/* <DrawerNavigator /> */}
        <DrawerNavigator  />

        {/* <StackNavigator /> */}
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "white"
  },
  box: {

  },
  circle: {

  },
});






