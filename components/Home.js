/* eslint-disable*/
import React, { useState, useRef, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Pressable, ScrollView, SafeAreaView, Dimensions, ImageBackground } from 'react-native';
import SliderBanner from './SliderBanner';
import Leaf from "../Asset/Icons/Leaf.svg"
const Home = (props) => {
  const liveConsult = [1, 2, 3, 4, 5];
  const category = [1, 2, 3, 4, 5, 6, 7, 8];
  const astrologers = [1, 2, 3, 4];
  const { width } = Dimensions.get('window')
  const images = [
    require("../Asset/astroAsset3.jpeg"),
    require("../Asset/astroAsset2.webp"),
    require("../Asset/astroAsset.webp"),
  ];

  const images2 = [
    require("../Asset/astroAsset4.jpeg"),
    require("../Asset/astroAsset5.jpeg"),
    require("../Asset/astroAsset.webp"),
  ]


  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <View style={{ marginTop: 30 }}>
          <SliderBanner images={images} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 32, marginTop: 20 }}>
          <Text style={{ color: "black", fontSize: 18 }}>{"Live Consultation"}</Text>
          <Pressable onPress={() => { props.navigation.navigate("astroList") }} style={{ backgroundColor: "#F49D1A", paddingHorizontal: 19, paddingVertical: 4, borderRadius: 8, justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 10, fontWeight: "500" }}>{"View All"}</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginHorizontal: 32 }}>
          {liveConsult.map((obj, index) => (
            <Pressable key={index} onPress={() => { props.navigation.navigate("astroList") }} key={obj} style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 8, elevation: 5, margin: 10, padding: 6 }}>
              <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require("../Asset/userImage.jpg")} ></Image>
              <Text style={{ color: "black", fontSize: 12, fontWeight: "500", textAlign: "center" }}>{"Chetan"}</Text>
              <Text style={{ color: "black", fontSize: 9, textAlign: "center" }}>{"30/min"}</Text>
            </Pressable>
          ))}
        </View>
        <View style={{ marginTop: 30 }}>
          <SliderBanner images={images2} size={1.5} pagination={false} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 32, marginTop: 20 }}>
          <Text style={{ color: "black", fontSize: 18 }}>{"Categories"}</Text>
          <Pressable style={{ backgroundColor: "#F49D1A", paddingHorizontal: 19, paddingVertical: 4, borderRadius: 8, justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 10, fontWeight: "500" }}>{"View All"}</Text>
          </Pressable>
        </View>
        <View style={{ margin: 25, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {category.map((obj, index) => (
            <View key={index} style={{ elevation: 4, backgroundColor: "white", borderRadius: 8, justifyContent: "center", alignItems: "center", padding: 7, width: (width - 80) / 4, marginBottom: 10 }}>
              <Leaf />
              <Text style={{ color: "black", fontSize: 10, marginTop: 6 }}>Love and Relationship</Text>
            </View>
          ))}
        </View>
        <View style={{ borderRadius: 8, marginHorizontal: 32, backgroundColor: "green" }}>
          <ImageBackground style={{ height: 100, flexDirection: "row", padding: 10, backgroundColor: "red" }} source={require("../Asset/taroCard.png")} >
            <View style={{ backgroundColor: "#F49D1A", borderRadius: 8, justifyContent: "center", alignItems: "center", padding: 10 }}>
              <Text style={{ color: "black", fontSize: 16 }}>50%</Text>
              <Text style={{ color: "black", fontSize: 16 }}>Off</Text>
              <Text style={{ color: "black", fontSize: 7 }}>Early Purchase</Text>
            </View>
            <View style={{ backgroundColor: "rgba(102, 101, 97, 0.6)", padding: 10, borderRadius: 8, marginLeft: 10, width: 200 }}>
              <Text style={{ fontSize: 17, fontWeight: "700", color: "black" }}>Tarot card reading</Text>
              <Text numberOfLines={4} style={{ fontSize: 10, color: "black", flexWrap: "wrap", flexShrink: 1, }}>Tarot Reading Get the best out of the Tarot cards by making the early purchase.</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 32, marginTop: 20 }}>
          <Text style={{ color: "black", fontSize: 18 }}>{"Astrologers"}</Text>
          <Pressable onPress={() => { props.navigation.navigate("astroList") }} style={{ backgroundColor: "#F49D1A", paddingHorizontal: 19, paddingVertical: 4, borderRadius: 8, justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 10, fontWeight: "500" }}>{"View All"}</Text>
          </Pressable>
        </View>
        <View style={{ justifyContent: "space-evenly", flexDirection: "row", marginHorizontal: 20 }}>
          {astrologers.map((obj, index) => (
            <Pressable key={index} onPress={() => { props.navigation.navigate("AstroProfile") }} key={obj} style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 8, elevation: 5, margin: 8, padding: 6 }}>
              <Image style={{ width: 58, height: 58, borderRadius: 29 }} source={require("../Asset/user2.jpg")} ></Image>
              <Text style={{ color: "black", fontSize: 18, fontWeight: "700", textAlign: "center" }}>{"Chetan"}</Text>
              <Text style={{ color: "black", fontSize: 14, textAlign: "center" }}>{"30/min"}</Text>
              <View style={{ flexDirection: "row", borderColor: "#FFCB04", borderStyle: "solid", borderWidth: 1, paddingHorizontal: 10, borderRadius: 30, marginVertical: 4, justifyContent: "center", alignItems: "center", elevation: 3, backgroundColor: "white" }}>
                <Text style={{ color: "black", fontSize: 10, fontWeight: "700", marginRight: 7, marginTop: 2 }}>{"4.3"}</Text>
                <Text style={{ color: "#FFCB04" }}>{"★"}</Text>
              </View>
            </Pressable>
          ))}
        </View>

      </ScrollView>
    </View>
  )
}



export default Home