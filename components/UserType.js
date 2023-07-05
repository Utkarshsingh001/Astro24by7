/*eslint-disable*/
import React, { useState, useContext, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import UserContext from '../UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function UserType(props) {
  useEffect(() => {
    AsyncStorage.getItem("token")
      .then(token => {
        if (token) {
          AsyncStorage.getItem("userType")
            .then(type => {
              if (type === "app_user") props.navigation.navigate("Tab");
              else props.navigation.navigate("AstroSessions");
            })
        }
      })
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <View style={{ justifyContent: "center", flexDirection: "row", marginTop: 70, marginBottom: 16 }}>
          <Image source={require("../Asset/AppLogo.png")} />
        </View>
        <Text style={{ color: "#000000", fontSize: 36, fontWeight: "600", textAlign: "center" }}>{"Welcome To"}</Text>
        <Text style={{ color: "#000000", fontSize: 36, fontWeight: "600", textAlign: "center" }}>{"Astro 24/7"}</Text>
        {/* <Check box for  */}
      </View>
      <Pressable onPress={() => {
        props.navigation.navigate("Login", { userType: "app_user" })
      }} style={{ backgroundColor: "#FFCB04", padding: 10, marginHorizontal: 25, borderRadius: 8, marginTop: 40 }}>
        <Text style={{ color: "#000000", textAlign: "center", fontSize: 16, fontWeight: "700" }}>{"Login or Sign up As User"}</Text>
      </Pressable>
      <Pressable onPress={() => {
        props.navigation.navigate("Login", { userType: "astrologer" })
      }} style={{ backgroundColor: "#FFCB04", padding: 10, marginHorizontal: 25, borderRadius: 8, marginTop: 20 }}>
        <Text style={{ color: "#000000", textAlign: "center", fontSize: 16, fontWeight: "700" }}>{"Login or Sign up As Astrologer"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
});
