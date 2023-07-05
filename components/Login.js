/*eslint-disable*/
import React, { useState, useContext } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Pressable, ScrollView, ToastAndroid } from 'react-native';
import UserContext from '../UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login(props) {
  const [btnColor, setBtnColor] = useState("#D8D8D8");
  // const [number, setNumber] = useState(null);
  const { setUser } = useContext(UserContext);
  let num = "";

  const auth = (val) => {
    if (val === "") {
      setBtnColor("#D8D8D8")
      return;
    }
    num = val;
    setBtnColor("#FFCB04");
  }

  const checkNum = () => {

    num = num.split(" ").join("")
    for (var i = 0; i < num.length; i++) {
      if (isNaN(parseInt(num[i]))) {
        console.log("========> is nan", num[i]);
        ToastAndroid.show("Enter a valid 10 digit mobile number", ToastAndroid.LONG);
        return;
      }
    }

    if (num.length != 10) {
      console.log("=======> num lenght not 10", num);
      ToastAndroid.show("Enter a valid 10 digit mobile number", ToastAndroid.LONG);
      return;
    }

    let url = "https://app.astro24by7.com/api/authentication/tokenGenerate";
    const data = {
      username: "awtuser",
      password: "password"
    }
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(data);
    fetch(url, { method: 'POST', headers: headers, body: body, })
      .then(response => {
        return response.json()
      })
      .then(responseData => {

        let url1 = "https://app.astro24by7.com/api/user/login"
        const data1 = { phone: num, user_type: props.route.params.userType };
        const headers1 = { 'Content-Type': 'application/json', Authorization: "Bearer" + " " + responseData.token };
        const body1 = JSON.stringify(data1);
        fetch(url1, { method: 'POST', headers: headers1, body: body1, })
          .then(response1 => {
            return response1.json()
          })
          .then(responseData1 => {
            if (!responseData1.status) {
              ToastAndroid.show(responseData1.message, ToastAndroid.LONG);
              return;
            }
            AsyncStorage.setItem("userType", data1.user_type);
            AsyncStorage.setItem("phone", num);
            AsyncStorage.setItem("token", responseData.token);
            AsyncStorage.setItem("userId", responseData1.user_id)
            setUser(num);
            props.navigation.navigate("OTP")

          })
          .catch(error1 => {
            if (error1.response && error1.response.data) {
              ToastAndroid.show("Enter a valid 10 digit mobile number", ToastAndroid.LONG);
            } else ToastAndroid.show("Enter a valid 10 digit mobile number", ToastAndroid.LONG);
          });
      })
      .catch(error => {
        if (error.response && error.response.data) {
          ToastAndroid.show("Enter a valid 10 digit mobile number", ToastAndroid.LONG);
        } else ToastAndroid.show("Enter a valid 10 digit mobile number", ToastAndroid.LONG);
      });
  }

  return (
    <View style={{ justifyContent: "space-between", flex: 1, backgroundColor: "white" }}>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View style={{ justifyContent: "center", flexDirection: "row", marginTop: 70, marginBottom: 16 }}>
          <Image source={require("../Asset/AppLogo.png")} />
        </View>
        <Text style={{ color: "#000000", fontSize: 36, fontWeight: "600", textAlign: "center" }}>{"Welcome To"}</Text>
        <Text style={{ color: "#000000", fontSize: 36, fontWeight: "600", textAlign: "center" }}>{"Astro 24/7"}</Text>
        <Text style={{ color: "#000000", textAlign: "center", fontSize: 16, fontWeight: "400", marginHorizontal: 25, marginVertical: 32 }}>{"Please enter your mobile no."}</Text>
        <TextInput placeholderTextColor={"#000000"} onChangeText={(val) => auth(val)} style={{ color: "#000000", backgroundColor: "#F2F2F2", borderRadius: 8, padding: 10, marginHorizontal: 25, }} placeholder='Mobile number'> </TextInput>
        <Text style={{ color: "#000000", textAlign: "center", fontSize: 10, fontWeight: "400", marginHorizontal: 25, marginVertical: 16 }}>{"By proceeding I agree to the Terms & Conditions and Privary Policy"}</Text>
        {/* <Check box for  */}
      </ScrollView>
      <View style={{ marginBottom: 50 }}>
        <Pressable onPress={() => { checkNum() }} style={{ backgroundColor: btnColor, padding: 10, marginHorizontal: 25, borderRadius: 8 }}>
          <Text style={{ color: "#000000", textAlign: "center", fontSize: 16, fontWeight: "700" }}>{"Send OTP"}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
