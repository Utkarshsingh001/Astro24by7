/* eslint-disable*/
import React, { useState, useRef, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Pressable, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import UserGroup from "../Asset/Icons/UserGroup.svg";
import Wallet from "../Asset/Icons/Wallet.svg"
import Doc from "../Asset/Icons/Doc.svg"
import Picture from "../Asset/Icons/Picture.svg"
import Off from "../Asset/Icons/Off.svg"
import Edit from "../Asset/Icons/Edit.svg"
import AsyncStorage from '@react-native-async-storage/async-storage';


const MyProfile = (props) => {
  useEffect(() => {
    console.log("===========> chala ");
    return () => { console.log("=========> return hua") }

  }, [])
  const userProfileOption = [
    { val: "The Membership", comp: <UserGroup />, onPress: () => { } },
    { val: "The Photo Uploads", comp: <Picture />, onPress: () => { } },
    { val: "Terms and Conditions", comp: <Doc />, onPress: () => { } },
    { val: "The Wallet", comp: <Wallet />, onPress: () => { } },
    { val: "The Privacy Policy", comp: <Doc />, onPress: () => { } },
    { val: "Edit Profile", comp: <Edit />, onPress: () => { } },
    { val: "Logout", comp: <Off />, onPress: () => { AsyncStorage.clear(); props.navigation.navigate("UserType"); } },
  ];
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image style={{ height: 100, width: 100, borderRadius: 50 }} source={require("../Asset/userImage.jpg")}></Image>
        <Text style={{ color: "black", fontSize: 24, fontWeight: 700, marginTop: 13 }}>Sidhartha Sharma</Text>
        <Text style={{ color: "black", fontSize: 18 }}>{"+91 8319549506"}</Text>
        <Image style={{ height: 80, width: 80, borderRadius: 50 }} source={require("../Asset/AppLogo.png")}></Image>
      </View>
      {userProfileOption.map((opt, index) => (
        <Pressable key={index} onPress={opt.onPress} style={{ marginBottom: 15 }}>
          <View key={opt} style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 37, }}>
            {opt.comp}
            <Text style={{ fontSize: 18, color: "black", marginLeft: 27 }}>{opt.val}</Text>
          </View>
          <View style={{ height: 2, backgroundColor: "#F0F0F0", marginTop: 16 }} />
        </Pressable>
      ))
      }
    </ScrollView>
  );
}

export default MyProfile;