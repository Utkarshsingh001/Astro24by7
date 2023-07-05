/*eslint-disable*/
import React, { useState, useRef, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { Image, StyleSheet, Text, View, TextInput, Pressable, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Login from '../components/Login';
import OTPScreen from '../components/OTPScreen';
import AstroProfile from '../components/AstroProfile';
import Burger from "../Asset/Icons/Burger.svg";
import Bell from "../Asset/Icons/Bell.svg";
import Wallet from "../Asset/Icons/Wallet.svg";
import FullPageCarausel from '../components/FullPageCarausel';
import TabNavigator from './TabNavigator';
import UserType from '../components/UserType';







const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          if (route.name != "Login" && route.name != "OTP" && route.name != "fullPage")
            return (
              <View style={{ paddingHorizontal: 30, paddingTop: 10, backgroundColor: "white", height: 50, justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Pressable onPress={() => navigation.openDrawer()}><Burger /></Pressable>
                </View>
                <Pressable style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Image style={{ height: 35, width: 35, borderRadius: 17, marginRight: 80 }} source={require("../Asset/AppLogo.png")} />
                  <Wallet height={25} width={25} style={{ marginRight: 20 }} />
                  <Bell height={18} width={18} />
                </Pressable>
              </View>)
          else return <View></View>
        }
      })}
    >
      <Stack.Screen name="UserType" component={UserType} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="fullPage" component={FullPageCarausel} />
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="AstroProfile" component={AstroProfile} />
    </Stack.Navigator>

  )

}

export default StackNavigator;