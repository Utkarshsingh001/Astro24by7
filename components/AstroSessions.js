/* eslint-disable*/
import React, { useState, useRef, useEffect, useContext } from 'react';
import 'react-native-gesture-handler';
import { Image, Text, View, TextInput, Pressable, ScrollView, AppState } from 'react-native';
import PopupModal from './Modal';
import ThankyouForCallBack from '../ModalView/ThankyouForCallBack';
import UserCallDetails from '../ModalView/UserCallDetails';
import HangUp from "../Asset/Icons/HangUp.svg"
import UserContext from '../UserContext';
import CountDown from '../ModalView/CountDown';
import Burger from "../Asset/Icons/Burger.svg";
import AsyncStorage from '@react-native-async-storage/async-storage';



const AstroSessions = (props) => {
  const [showModal, setModal] = useState(true);
  const [isAckn, setAck] = useState(false);
  const [dots, setDot] = useState(".");
  const [showCalling, setCalling] = useState(false);
  const [timer, setTimer] = useState(0);
  const [online, setOnline] = useState(false);
  const [isOnlineDisable, setOnlineDisable] = useState(false);
  const { user } = useContext(UserContext);
  const [currentTab, setCurrentTab] = useState("Active");
  const [activeUser, setActiveUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const type = ["Active", 'Prending', "Finished"];

  var ws = useRef(new WebSocket('ws://app.astro24by7.com:8089')).current;

  const changeType = (val) => {
    setCurrentTab(val);
  }


  const userList = () => {
    AsyncStorage.getItem("userId")
      .then(id => {
        AsyncStorage.getItem("token")
          .then(token => {
            fetch("https://app.astro24by7.com/api/call/usermissedcall", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "x-api-key": "oomfKA3I2K6TCJYistHyb7sDf0l0F6c8AZro5DJh",
                "Authorization": "Bearer" + " " + token
              },
              body: JSON.stringify({
                astro_id: id
              })
            })
              .then(response => {
                return response.json();
              })
              .then(data => {
                console.log("======================>", data, id);
                let dataMap = {};
                let newData = [];
                data.forEach(element => {
                  if (!dataMap[element["userphone"]]) newData.push(element);
                  dataMap[element["userphone"]] = 1;
                });
                setActiveUsers(newData);
              })
              .catch(error => {
                console.error(`Error: ${error.message}`);
                alert("Something went wrong, Please try again later");
              });
          })
      })
  }

  const handleCall = () => {
    if (currentIndex >= activeUser.length) return;
    if (!online) return;
    setOnlineDisable(true);
    AsyncStorage.getItem("phone")
      .then(num => {
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
            number_2: "+91" + num, // astro  
            number: "+91" + activeUser[currentIndex]["userphone"],
            public_ivr_id: "645a87e5aca32771",
            reference_id: "",
            region: "",
            caller_id: "",
            group: ""
          })
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            setCalling(true);
            setCurrentIndex(currentIndex + 1);
            if (data.code === "403") {
              alert(data.details);
              if ((currentIndex + 1) < activeUser.length) {
                setTimer(10);
                setModal(true);
              }
              setCurrentIndex(currentIndex++);
              setOnlineDisable(false);
              setCalling(false)
            }
          })
          .catch(error => {
            setCalling(false)
            console.error(`Error: ${error.message}`);
            alert("Something went wrong, Please try again later");
          });
      })
  }

  useEffect(() => {
    const interval = setTimeout(() => {
      setDot(prev => {
        if (prev === ".") return "..";
        else if (prev === "..") return "...";
        else if (prev === "...") return "....";
        else return ".";
      })
    }, 500);
    return () => clearInterval(interval);
  }, [dots])



  useEffect(() => {
    if (timer == 0) {
      handleCall();
      setModal(false);
      return;
    }

    const a = setInterval(() => { setTimer(timer - 1) }, 1000)
    return () => { clearInterval(a); }
  }, [timer])

  useEffect(() => {
    if (online) {
      setTimer(10);
      setModal(true);
    }
  }, [online])

  useEffect(() => {
    userList()
    ws.onopen = () => {
      // Connection opened
      console.log('WebSocket connection opened');
    };

    ws.onmessage = (e) => {
      // Received a message
      console.log("==========> on messa", e.data);
      let a = JSON.parse(e.data);
      if (a.myoperator) {
        setTimer(10);
        setOnlineDisable(false);
        setCalling(false)
        setModal(true);
        var data = JSON.parse(a.myoperator);
      }
    };
    ws.onerror = (e) => { console.error('WebSocket error:', e); };
    ws.onclose = (e) => { console.log('WebSocket connection closed'); };
  }, [])


  // useEffect(() => {
  //   AppState.addEventListener('change', handleAppStateChange);
  //   if (AppState.addEventListener) return () => AppState.removeEventListener('change', handleAppStateChange);
  // }, []);

  // const handleAppStateChange = (nextAppState) => {
  //   const isFocued = props.navigation.isFocused()
  //   if (nextAppState === 'active' && isFocued) {
  //     setAck(true);
  //     setModal(true);
  //     setCalling(false);
  //   }
  // }

  // const setCallingMod = (val) => {
  //   setCalling(val);
  // }

  // const setAckCall = (val) => {
  //   setAck(val);
  // }

  const Tab = (props) => {
    return (
      <View>
        <Pressable onPress={() => props.changeType(props.val)}><Text style={{ fontSize: 18, color: props.currentTab === props.val ? "black" : "grey" }}>{props.val}</Text></Pressable>
        {props.currentTab === props.val && <View style={{ height: 2, backgroundColor: "##F49D1A", borderRadius: 1, borderColor: "#F49D1A", borderStyle: "solid", borderWidth: 2 }} />}
      </View>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <PopupModal Child={CountDown} setModalFalse={() => setModal(false)} showModal={showModal} timer={timer} setOffline={setOnline} activeUser={activeUser} currentIndex={currentIndex} />
      <View style={{ margin: 10, flexDirection: "row", marginHorizontal: 24, alignItems: "center" }}>
        <Pressable onPress={() => props.navigation.openDrawer()}><Burger /></Pressable>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", marginLeft: 40 }}>{"Welcome Astrologer"}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 24, marginTop: 0 }}>
        <View>
          <Text style={{ fontSize: 36, fontWeight: "700", color: "black", }}>{"Sessions"}</Text>
          <Pressable onPress={() => {
            if (!isOnlineDisable) {
              setOnline(!online)
              setCurrentIndex(0);
              userList();
            }
          }} style={{ borderRadius: 8, backgroundColor: "#FFCB04", padding: 5, marginTop: 5 }}>
            <Text style={{ color: "black", textAlign: "center", fontWeight: "700" }}>{!online ? "Go Online" : "Go Offline"}</Text>
          </Pressable>
        </View>
        <View>
          <Image style={{ width: 56, height: 56, borderRadius: 28 }} source={require("../Asset/userImage.jpg")} />
          <Text style={{ color: online ? "green" : "red", textAlign: "center", marginTop: 4, fontSize: 16, fontWeight: "700", textTransform: "uppercase" }}>{online ? "online" : "offline"}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        {type.map((val, index) => <Tab key={index} val={val} currentTab={currentTab} changeType={changeType} />)}
      </View>

      <View style={{ borderRadius: 4, elevation: 5, margin: 24 }}>
        <TextInput placeholderTextColor={"black"} style={{ color: "black", backgroundColor: "#FFFFFF", padding: 10, borderRadius: 4 }} placeholder='Search' ></TextInput>
      </View>
      <View style={{ justifyContent: "space-between", flexDirection: "row", margin: 24 }}>
        <View style={{ width: 160, height: 160, borderRadius: 8, backgroundColor: "#FFCB04", padding: 15, elevation: 5 }}>
          <Text style={{ fontSize: 36, fontWeight: "600", color: "black" }}>{"85%"}</Text>
          <Text style={{ fontSize: 16, color: "black" }}>{"Success"}</Text>
          <Image source={require("../Asset/stats.png")}></Image>
        </View>
        <View style={{ width: 160, height: 160, borderRadius: 8, backgroundColor: "white", padding: 15, elevation: 5 }}>
          <Text style={{ fontSize: 36, fontWeight: "600", color: "black" }}>{"65"}</Text>
          <Text style={{ fontSize: 16, color: "black" }}>{"Clients"}</Text>
          <Image source={require("../Asset/groupPic.png")}></Image>
        </View>
      </View>
      <View style={{ margin: 24, borderRadius: 8, borderColor: "#F0F0F0", borderWidth: 1, borderStyle: "solid", backgroundColor: "white", elevation: 3, height: 250 }}>
        <Text style={{ fontWeight: 700, fontSize: 20, color: "black", marginHorizontal: 16, marginTop: 16 }}> Active Queue </Text>

        <ScrollView>
          {activeUser.map((user, index) => (
            <Pressable key={index} style={{ margin: 16, backgroundColor: index === currentIndex ? "#aFCa08" : "white", padding: 5, borderRadius: 8 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image style={{ height: 48, width: 48, borderRadius: 50 }} source={require("../Asset/userImage.jpg")}></Image>
                <View style={{ marginLeft: 15 }}>
                  <Text style={{ color: "black", fontSize: 16, fontWeight: "700" }}>{user.name + " (" + user.userphone + ")"}</Text>
                  <Text style={{ color: "black", fontSize: 16, }}>{"Issue: Health and relationship"}</Text>
                </View>
              </View>
              <View style={{ borderWidth: 1, borderColor: "#EEEEEE", borderStyle: "solid", marginTop: 15 }} />
            </Pressable>
          ))
          }
        </ScrollView>
        {showCalling && <View style={{ backgroundColor: "#080B16", padding: 8, alignItems: "center", flexDirection: "row", borderRadius: 8, elevation: 6, marginTop: 50 }}>
          <Image style={{ width: 64, height: 64, borderRadius: 32, marginRight: 10 }} source={require("../Asset/userImage.jpg")}></Image>
          <View style={{ width: "60%" }}>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 16 }}>Requesting for call to: xyz </Text>
            <Text style={{ color: "white", fontWeight: "300", fontSize: 14 }}>{"Calling " + dots} </Text>
          </View>
          {/* <Pressable onPress={() => { setCalling(false) }} style={{ justifyContent: "center", alignItems: "center", backgroundColor: "red", width: 40, height: 40, borderRadius: 20 }}>
            <HangUp />
          </Pressable> */}
        </View>}

      </View>

    </View>

  );
}

export default AstroSessions;