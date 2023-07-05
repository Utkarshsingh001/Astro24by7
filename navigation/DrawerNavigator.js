/*eslint-disable*/
/* eslint-disable*/
import React, { useState, useRef, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { Image, StyleSheet, Text, View, TextInput, Pressable, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import AstroList from '../components/AstroList';
import AstroProfile from '../components/AstroProfile';
import AstroSessions from '../components/AstroSessions';
import UserGroup from "../Asset/Icons/UserGroup.svg";
import StackNavigator from './StackNavigator';
import { enableScreens } from 'react-native-screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
enableScreens();


const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  const options = [
    { onPress: () => { }, val: "Create Free Kundli" },
    { onPress: () => { }, val: "Free Tarot Reading" },
    { onPress: () => { }, val: "Weekly Updates" },
    { onPress: () => { }, val: "About Astro 24/7" },
    { onPress: () => { }, val: "Help and support" },
    { onPress: () => { }, val: "FAQ" },
    { onPress: () => { }, val: "Invite Friends" },
    { onPress: () => { }, val: "Rate Us" },
    { onPress: () => { }, val: "Privacy Policy" },
  ];
  const navigation = useNavigation();


  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <View style={{ backgroundColor: "white", flex: 1, justifyContent: "space-between" }}>
          <View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 50 }}>
              <Image style={{ width: 60, height: 60, borderRadius: 35 }} source={require("../Asset/AppLogo.png")}></Image>
            </View>
            <View style={{ backgroundColor: "#FFCB04", padding: 12, margin: 24, borderRadius: 8, flexDirection: "row", alignItems: "center" }}>
              <Image style={{ width: 48, height: 48, borderRadius: 24 }} source={require("../Asset/userImage.jpg")}></Image>
              <View style={{ marginLeft: 40 }}>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "700" }}>{"Animesh Jain"}</Text>
                <Text style={{ color: "black", fontSize: 14, fontWeight: "400" }}>{"+91 9876543210"}</Text>
              </View>
            </View>
            <ScrollView style={{ height: "60%" }}>
              {options.map((option, index) => (
                <Pressable key={index} onPress={option.onPress} style={{ flexDirection: "row", marginHorizontal: 26, marginVertical: 10 }}>
                  <UserGroup />
                  <Text style={{ color: "black", fontSize: 16, marginLeft: 50 }}>{option.val}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          <Pressable onPress={() => {
            AsyncStorage.clear();
            navigation.navigate("UserType")
          }} style={{ backgroundColor: "#FFCB04", padding: 10, marginHorizontal: 25, borderRadius: 8, marginBottom: 40 }}>
            <Text style={{ color: "#000000", textAlign: "center", fontSize: 16, fontWeight: "700" }}>{"Logout"}</Text>
          </Pressable>

        </View>
      )}
      screenOptions={() => ({
        headerShown: false,


      })}
    >
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="AstroSessions" component={AstroSessions} />
      <Drawer.Screen name="Dummy1" component={AstroProfile} />
      <Drawer.Screen name="Dummy2" component={AstroList} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;