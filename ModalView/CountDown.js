/*eslint-disable*/
import React, { useContext, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';
import UserContext from '../UserContext';

const CountDown = (props) => {
  const { user } = useContext(UserContext);
  return (
    <View style={{ width: "100%" }}>
      <View style={{ backgroundColor: "white", padding: 15, marginHorizontal: 24, justifyContent: "center", alignItems: "center", borderRadius: 8, elevation: 5 }}>
        <Text style={{ color: "black", textAlign: "center", fontSize: 18, fontWeight: "700" }}>Your next call will be initiated in</Text>
        <Text style={{ color: "black", textAlign: "center", fontSize: 30, marginTop: 20, fontWeight: "900" }}>{props.timer}</Text>
        {props.activeUser && props.activeUser[props.currentIndex] ? <View style={{ marginTop: 10 }}>
          <Text style={{ color: "black", textAlign: "center", fontSize: 16, fontWeight: "700" }}>{"Your next client is " + props.activeUser[props.currentIndex].name}</Text>
          <Text style={{ color: "black", textAlign: "center", fontSize: 14, fontWeight: "700" }}>{"Health and wellness issue"}</Text>
        </View> : null}
        <Pressable onPress={() => { props.toggleModal(); props.setOffline(false) }} style={{ backgroundColor: "#FFCB04", padding: 10, borderRadius: 8, paddingHorizontal: 30, marginTop: 50 }}>
          <Text style={{ color: "black", textAlign: "center", fontSize: 16, fontWeight: "900" }}>Go Offline</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default CountDown;
