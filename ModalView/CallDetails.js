/*eslint-disable*/
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';

const CallDetails = (props) => {
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("phone")
      .then(num => { setMobile(num) });
  }, [])
  const sendCallInitiate = () => {
    AsyncStorage.multiGet(["token", "userId", "phone"])
      .then(data => {
        console.log(JSON.stringify({
          user_id: data[1][1],
          user_phone: data[2][1],
          astro_id: props.astroId
        }));
        setMobile(data[2][1]);
        fetch('https://app.astro24by7.com/api/call/userToCall', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer" + " " + data[0][1],
          },
          body: JSON.stringify({
            user_id: data[1][1],
            user_phone: data[2][1],
            astro_id: props.astroId
          })
        })
          .then(response => {
            console.log("===========> call initiate res", response);
            if (response.status === 200) return response.json();
          })
          .then(data => {

            props.toggleModal()
            console.log("===========> call done", data);
          })
          .catch(error => {
            console.error(`Error: ${error.message}`);
          });
      })

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


  const handleCall = async () => {
    const phoneNumber = '7065095846'; // Replace with your IVR number
    const url = `tel:${phoneNumber}`;
    try {
      await Linking.openURL(url);
      sendCallInitiate();
    } catch (error) {
      console.error('Failed to open dial pad:', error);
    }
  }

  return (
    <View style={{ width: "100%" }}>
      <View style={{ backgroundColor: "#FFCB04", padding: 15, marginHorizontal: 24, justifyContent: "center", alignItems: "center", borderTopLeftRadius: 8, borderTopRightRadius: 8, elevation: 5 }}>
        <Text style={{ color: "black", fontSize: 20, fontWeight: 700, }}>Call Details</Text>
      </View>
      <View style={{ backgroundColor: "white", marginHorizontal: 24, paddingHorizontal: 24, paddingVertical: 16, elevation: 5 }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row", marginBottom: 10, }}>
          <Text style={{ color: "black", fontSize: 16 }}>Astrologer :</Text>
          <Text style={{ color: "black", fontSize: 16 }}>Vamshi Bhasham</Text>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ color: "black", fontSize: 16 }}>Per Minute:</Text>
          <Text style={{ color: "black", fontSize: 16 }}>₹ 12.00</Text>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ color: "black", fontSize: 16 }}>Available Balance:</Text>
          <Text style={{ color: "black", fontSize: 16 }}>₹ 32.00</Text>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ color: "black", fontSize: 16 }}>Consultation:</Text>
          <Text style={{ color: "black", fontSize: 16 }}>₹ 99.00</Text>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ color: "black", fontSize: 16 }}>Time remaining:</Text>
          <Text style={{ color: "black", fontSize: 16 }}>00:09:00</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", marginHorizontal: 24, paddingHorizontal: 55, paddingTop: 16, elevation: 5 }}>
        <View style={{ borderRadius: 8, borderColor: "#FFCB04", padding: 4, borderWidth: 1, borderStyle: "solid" }}>
          <Text style={{ color: "black", textAlign: "center", fontSize: 18 }}>You Will receive a call on</Text>
          <Text style={{ color: "black", textAlign: "center", fontSize: 20, fontWeight: 700 }}>{"+91" + mobile} </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", marginHorizontal: 24, flexDirection: "row", justifyContent: "space-evenly", borderBottomRightRadius: 8, borderBottomLeftRadius: 8, elevation: 5 }}>
        <Pressable onPress={() => props.toggleModal()} style={{ backgroundColor: "#D60707", paddingHorizontal: 30, paddingVertical: 8, borderRadius: 8, marginBottom: 10, justifyContent: "center", marginTop: 13 }}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>{"Cancel"}</Text>
        </Pressable>
        <Pressable onPress={() => { handleCall() }} style={{ backgroundColor: "#006D00", paddingHorizontal: 30, paddingVertical: 8, borderRadius: 8, marginBottom: 10, justifyContent: "center", marginTop: 13 }}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>{"Call Now"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default CallDetails;
