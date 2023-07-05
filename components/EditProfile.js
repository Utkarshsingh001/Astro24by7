/*eslint-disable*/
import React, { useState, useRef, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Pressable, ScrollView, SafeAreaView, Dimensions } from 'react-native';

import UserGroup from "../Asset/Icons/UserGroup.svg";



const EditProfile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", justifyContent: "space-between" }}>
      <View>
        <View style={{ alignItems: "center", marginBottom: 100, marginTop: 24 }}>
          <Image style={{ height: 100, width: 100, borderRadius: 50 }} source={require("../Asset/userImage.jpg")}></Image>
        </View>
        <Text style={{ color: "black", textAlign: "center", fontSize: 12, marginBottom: 24 }}>Give more information about yourself</Text>

        <View style={{ flexDirection: "row", marginHorizontal: 24, marginVertical: 8, borderRadius: 8, elevation: 5, backgroundColor: "white", paddingHorizontal: 18, paddingVertical: 20 }}>
          <View style={{ height: 33, width: 33, justifyContent: "center", alignItems: "center", borderColor: "#F0F0F0", borderRadius: 4, borderWidth: 1, borderStyle: "solid", marginRight: 16 }}>
            <UserGroup />
          </View>
          <View style={{ height: 42, width: 2, backgroundColor: "black", marginRight: 16 }} />
          <View>
            <Text style={{ fontSize: 12, color: "black" }}>Email</Text>
            <TextInput style={{ fontSize: 16, color: "black", padding: 0, }} value='Vamshi.Bhasham@gmail.com' />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 24, marginVertical: 8, borderRadius: 8, elevation: 5, backgroundColor: "white", paddingHorizontal: 18, paddingVertical: 20 }}>
          <View style={{ height: 33, width: 33, justifyContent: "center", alignItems: "center", borderColor: "#F0F0F0", borderRadius: 4, borderWidth: 1, borderStyle: "solid", marginRight: 16 }}>
            <UserGroup />
          </View>
          <View style={{ height: 42, width: 2, backgroundColor: "black", marginRight: 16 }} />
          <View>
            <Text style={{ fontSize: 12, color: "black" }}>Email</Text>
            <TextInput style={{ fontSize: 16, color: "black", padding: 0, }} value='Vamshi.Bhasham@gmail.com' />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 24, marginVertical: 8, borderRadius: 8, elevation: 5, backgroundColor: "white", paddingHorizontal: 18, paddingVertical: 20 }}>
          <View style={{ height: 33, width: 33, justifyContent: "center", alignItems: "center", borderColor: "#F0F0F0", borderRadius: 4, borderWidth: 1, borderStyle: "solid", marginRight: 16 }}>
            <UserGroup />
          </View>
          <View style={{ height: 42, width: 2, backgroundColor: "black", marginRight: 16 }} />
          <View>
            <Text style={{ fontSize: 12, color: "black" }}>Email</Text>
            <TextInput style={{ fontSize: 16, color: "black", padding: 0, }} value='Vamshi.Bhasham@gmail.com' />
          </View>
        </View>
      </View>
      <Pressable style={{ backgroundColor: "#FFCB04", padding: 14, marginHorizontal: 24, borderRadius: 8, alignItems: "center", marginBottom: 50 }}>
        <Text style={{ fontSize: 16, fontWeight: "700", color: "black" }}>Update</Text>
      </Pressable>
    </View>

  );
}

export default EditProfile;