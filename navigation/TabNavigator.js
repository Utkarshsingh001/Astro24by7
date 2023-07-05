/*eslint-disable*/

/* eslint-disable*/
import React, { useState, useRef, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { Image, StyleSheet, Text, View, TextInput, Pressable, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AstroList from '../components/AstroList';
import HomeIcon from "../Asset/Icons/Home.svg";
import Home from '../components/Home';
import SearchIcon from "../Asset/Icons/Search.svg";
import Book from "../Asset/Icons/Book.svg";
import History from "../Asset/Icons/History.svg";
import Profile from "../Asset/Icons/Profile.svg";
import MyProfile from '../components/MyProfile';
import { enableScreens } from 'react-native-screens';
enableScreens();



const Tab = createBottomTabNavigator();

const getIcon = (route) => {
  switch (route.name) {
    case "home":
      return <HomeIcon />;
    case "astroList":
      return <SearchIcon />
    case "read":
      return <Book />
    case "history":
      return <History />
    case "profile":
      return <Profile />
    default:
      return <HomeIcon />
  }
}

const HistoryComp = () => {
  return <View></View>
}
const Read = () => {
  return <View></View>
}

const ProfileComp = () => {
  return <View></View>
}


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <View style={{ backgroundColor: focused ? "#FFCB04" : "white", width: 40, height: 40, borderRadius: 8, justifyContent: "center", alignItems: "center" }}>
              {getIcon(route)}
            </View>
          )
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarBackground: () => (
          <LinearGradient colors={['#F7F4F2', '#FFCB04']} >
            <View style={{ height: "100%", marginBottom: 20 }}></View>
          </LinearGradient>),
      })}

    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="astroList" component={AstroList} />
      <Tab.Screen name="read" component={Read} />
      <Tab.Screen name="history" component={HistoryComp} />
      <Tab.Screen name="profile" component={MyProfile} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
