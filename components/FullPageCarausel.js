/*eslint-disable*/
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions, Text, Pressable } from 'react-native';

const { width, height } = Dimensions.get('window');

const images = [
  "Get constant updates from your Astrologer", "Call any time and chat in real time", "Get taro reader from everywhere", "Create kundli and have suggestions for upcoming events"
];

function FullPageCarausel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userType, setUserType] = useState("app_user");

  const scrollViewRef = useRef(null);
  useEffect(() => {
    AsyncStorage.getItem("userType")
      .then(type => {
        setUserType(type)
      })
  }, [])

  const handleScroll = event => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slide);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentOffset={{ x: width * activeIndex }}
      >
        {images.map((image, index) => (
          <View key={index} style={{ flex: 1, height: height, justifyContent: "center", width: width, alignItems: "center" }}>
            <Image source={require("../Asset/AppLogo.png")}></Image>
            <Text style={{ textAlign: "center", color: "black" }}>{image}</Text>
            {activeIndex == 3 && <Pressable onPress={() => userType === "app_user" ? props.navigation.navigate("Tab") : props.navigation.navigate("AstroSessions")} style={{ position: "relative", top: 150, borderColor: "#FFCB04", backgroundColor: "#FFCB04", borderStyle: "solid", borderWidth: 1, paddingHorizontal: 20, paddingVertical: 4, borderRadius: 4, marginBottom: 10, justifyContent: "center", marginTop: 13 }}>
              <Text style={{ color: "black", fontSize: 16, fontWeight: "700" }}>{"Lets Get Started"}</Text>
            </Pressable>}
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((image, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              activeIndex === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width - 40,
    height: 200,
    marginHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#8E8E93',
  },
  paginationDotActive: {
    backgroundColor: '#000000',
  },
});

export default FullPageCarausel;
