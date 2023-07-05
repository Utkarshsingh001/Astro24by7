/*eslint-disable*/
import React, { useContext, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';
import UserContext from '../UserContext';

const UserCallDetails = (props) => {
  const { user } = useContext(UserContext);


  const sendCallInitiate = () => {
    fetch('https://app.astro24by7.com/api/call/userToCall', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: 1,
        user_phone: 8319549506,
        astro_id: 2
      })
    })
      .then(response => {
        if (response.status === 200) return response.json();
      })
      .then(data => {
        props.toggleModal()
        console.log(data);
      })
      .catch(error => {
        console.error(`Error: ${error.message}`);
      });
  }


  const astroDetail = () => {
    fetch("https://app.astro24by7.com/api/call/usermissedcall", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "x-api-key": "oomfKA3I2K6TCJYistHyb7sDf0l0F6c8AZro5DJh"
      },
      body: JSON.stringify({
        astro_id: 2
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        // if(data.status === true) update state 
      })
      .catch(error => {
        console.error(`Error: ${error.message}`);
      });
  }


  const handleCall = () => {
    fetch("https://obd-api.myoperator.co/obd-api-v1", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "x-api-key": "oomfKA3I2K6TCJYistHyb7sDf0l0F6c8AZro5DJh"
      },
      body: JSON.stringify({
        company_id: "6433da5a6cbae559",
        secret_token: "13d6dbd1cc8d747c6cbe49e11f862f7b2f0437bcccc8b824ac1fc317bcde7415",
        type: "1",
        number: "+918319549506", // astro  
        number_2: "+917828765519",
        public_ivr_id: "645a87e5aca32771",
        reference_id: "",
        region: "",
        caller_id: "",
        group: ""
      })
    })
      .then(response => {
        console.log("==========> rsponse", response);
        return response.json();
      })
      .then(data => {
        props.toggleModal()
        props.setCalling(true);
        console.log(data);
      })
      .catch(error => {
        console.error(`Error: ${error.message}`);
      });
  }


  console.log(user);
  return (
    <View style={{ width: "100%" }}>
      <View style={{ backgroundColor: "#FFCB04", padding: 15, marginHorizontal: 24, justifyContent: "center", alignItems: "center", borderTopLeftRadius: 8, borderTopRightRadius: 8, elevation: 5 }}>
        <Text style={{ color: "black", fontSize: 20, fontWeight: 700, }}>Call Details</Text>
      </View>
      <View style={{ backgroundColor: "white", marginHorizontal: 24, paddingHorizontal: 24, paddingVertical: 16, elevation: 5 }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row", marginBottom: 10, }}>
          <Text style={{ color: "black", fontSize: 16 }}>Client :</Text>
          <Text style={{ color: "black", fontSize: 16 }}>Vamshi Bhasham</Text>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ color: "black", fontSize: 16 }}>Last Session Duration</Text>
          <Text style={{ color: "black", fontSize: 16 }}>45 Mins</Text>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ color: "black", fontSize: 16 }}>Last Session:</Text>
          <Text style={{ color: "black", fontSize: 16 }}>17 Jan 2023</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", marginHorizontal: 24, paddingHorizontal: 55, paddingTop: 16, elevation: 5 }}>
        <View style={{ borderRadius: 8, borderColor: "#FFCB04", padding: 10, borderWidth: 1, borderStyle: "solid" }}>
          <Text style={{ color: "black", textAlign: "center", fontSize: 18, marginBottom: 10 }}>You Will receive a call on the below no. that will connect you to your client</Text>
          <Text style={{ color: "black", textAlign: "center", fontSize: 20, fontWeight: 700 }}>+91 8319549506</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", marginHorizontal: 24, flexDirection: "row", justifyContent: "space-evenly", borderBottomRightRadius: 8, borderBottomLeftRadius: 8, elevation: 5 }}>
        <Pressable onPress={() => props.toggleModal()} style={{ backgroundColor: "#D60707", paddingHorizontal: 30, paddingVertical: 8, borderRadius: 8, marginBottom: 10, justifyContent: "center", marginTop: 13 }}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>{"Cancel"}</Text>
        </Pressable>
        <Pressable onPress={() => { handleCall() }} style={{ backgroundColor: "#006D00", paddingHorizontal: 30, paddingVertical: 8, borderRadius: 8, marginBottom: 10, justifyContent: "center", marginTop: 13 }}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>{"Request Call"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default UserCallDetails;
