/*eslint-disable*/
import { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Pressable, ScrollView, SafeAreaView, AppState } from 'react-native';
import PopupModal from './Modal';
import CallDetails from '../ModalView/CallDetails';
import Trophy from "../Asset/Icons/Trophy.svg";
import Collor from "../Asset/Icons/Collor.svg";
import Language from "../Asset/Icons/Language.svg";
import Rupee from "../Asset/Icons/Rupee.svg";
import ThankyouForCall from '../ModalView/ThankyouForCall';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function AstroList(props) {
  const [cards, setCards] = useState([]);
  const [showModal, setModal] = useState(false);
  const [isAckn, setAck] = useState(false);
  const [astroId, setAstroSelect] = useState(0);


  useEffect(() => {
    AsyncStorage.getItem("token")
      .then(token => {
        let url1 = "https://app.astro24by7.com/api/astrologer/astrologerList"
        const headers1 = { 'Content-Type': 'application/json', Authorization: "Bearer" + " " + token };
        fetch(url1, { headers: headers1 })
          .then(response1 => {
            return response1.json()
          })
          .then(responseData1 => {
            setCards(responseData1);
          })
          .catch(error1 => {
            console.log(error1);
          });
      })

    AppState.addEventListener('change', handleAppStateChange);
    if (AppState.addEventListener) return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    }
  }, []);

  const handleAppStateChange = (nextAppState) => {
    const isFocued = props.navigation.isFocused()
    if (nextAppState === 'active' && isFocued) {
      setAck(true);
      setModal(true);
    }
  }

  const setAckCall = (val) => {
    setAck(val);
  }


  const Card = ({ data }) => {
    console.log(data);
    return (
      <View style={{ padding: 10, backgroundColor: "#F2F2F7", margin: 16, elevation: 5, borderRadius: 8 }}>
        <PopupModal setAck={setAckCall} Child={isAckn ? ThankyouForCall : CallDetails} setModalFalse={() => setModal(false)} showModal={showModal} astroId={astroId} />

        <View style={{ justifyContent: "space-between", flexDirection: "row", }}>
          <View style={{ width: "34%", }}>
            <View style={{ backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: 8 }}>
              <Image style={{ width: 68, height: 68, borderRadius: 34, marginTop: 10 }} source={{ uri: data.profile }}></Image>
              <Text style={{ color: "black", fontSize: 16, fontWeight: 700, marginBottom: 5 }}>{data.id + " (" + data.phone + ")"}</Text>
              <View style={{ flexDirection: "row", borderColor: "#FFCB04", borderStyle: "solid", borderWidth: 1, paddingHorizontal: 10, borderRadius: 30, marginBottom: 10 }}>
                <Text style={{ color: "black", fontSize: 10, fontWeight: "700", marginRight: 7, marginTop: 2 }}>{"4.3"}</Text>
                <Text style={{ color: "#FFCB04" }}>{"★"}</Text>
              </View>
            </View>
            <Pressable onPress={() => { props.navigation.navigate("AstroProfile") }} style={{ flexDirection: "row", borderColor: "#F49D1A", backgroundColor: "white", borderStyle: "solid", borderWidth: 1, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 30, marginBottom: 10, justifyContent: "center", marginTop: 13 }}>
              <Text style={{ color: "#F49D1A", fontSize: 16, fontWeight: "700" }}>{"Profile"}</Text>
            </Pressable>
          </View>
          <View style={{ width: "53%" }}>
            <View style={{ backgroundColor: "white", paddingVertical: 12, paddingHorizontal: 15, borderRadius: 8 }}>
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                <Trophy />
                <Text style={{ color: "black", fontWeight: 400, fontSize: 14, marginLeft: 10 }}>{"Experience: " + data.experience} </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                <Collor />
                <Text style={{ color: "black", fontWeight: 400, fontSize: 14, marginLeft: 10 }}>{data.expertise_list}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                <Language />
                <Text style={{ color: "black", fontWeight: 400, fontSize: 14, marginLeft: 10 }}>{data.language}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                <Rupee />
                <Text style={{ color: "black", fontWeight: 400, fontSize: 14, marginLeft: 10 }}>{data.fee + "/min"}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

              <Pressable onPress={() => { setAstroSelect(data.id); setModal(true) }} style={{ borderColor: "#006D00", backgroundColor: "#006D00", borderStyle: "solid", borderWidth: 1, paddingHorizontal: 20, paddingVertical: 4, borderRadius: 30, marginBottom: 10, justifyContent: "center", marginTop: 13 }}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>{"Call"}</Text>
              </Pressable>
              <Pressable onPress={() => { console.log(data.id) }} style={{ borderColor: "#0051CA", backgroundColor: "#0051CA", borderStyle: "solid", borderWidth: 1, paddingHorizontal: 20, paddingVertical: 4, borderRadius: 30, marginBottom: 10, justifyContent: "center", marginTop: 13 }}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>{"Chat"}</Text>
              </Pressable>

            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{ borderRadius: 4, elevation: 5, margin: 24 }}>
        <TextInput placeholderTextColor={"black"} style={{ color: "black", backgroundColor: "#FFFFFF", padding: 10, borderRadius: 4 }} placeholder='Search' ></TextInput>
      </View>
      <ScrollView style={{ marginBottom: 100 }}>
        {cards.map((card, index) => <Card data={card} key={index} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

});
