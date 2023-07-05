/*eslint-disable*/
import { Image, StyleSheet, Text, View, TextInput, Pressable, ScrollView, SafeAreaView, AppState, Linking } from 'react-native';
import PopupModal from './Modal';
import { useEffect, useState } from 'react';
import CallDetails from '../ModalView/CallDetails';
import Trophy from "../Asset/Icons/Trophy.svg";
import Collor from "../Asset/Icons/Collor.svg";
import Language from "../Asset/Icons/Language.svg";
import Rupee from "../Asset/Icons/Rupee.svg";
import ThankyouForCall from '../ModalView/ThankyouForCall';

export default function AstroProfile(props) {
  const reviews = [1, 2, 3, 4, 5];
  const [showModal, setModal] = useState(false);
  const [isAckn, setAck] = useState(false);

  useEffect(() => {
    console.log(AppState);
    AppState.addEventListener('change', handleAppStateChange);
    if (AppState.removeEventListener) return () => AppState.removeEventListener('change', handleAppStateChange);
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

  const ReviewCard = () => {
    return (
      <View style={{ borderRadius: 8, borderColor: "#F0F0F0", borderWidth: 1, padding: 8, marginBottom: 8 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={{ width: 56, height: 56, borderRadius: 28, marginRight: 10 }} source={require("../Asset/userImage.jpg")}></Image>
            <Text style={{ color: "black", fontSize: 17, fontWeight: "700" }}>Siddarth Varma</Text>
          </View>
          <View style={{ borderColor: "#FFCB04", padding: 5, borderStyle: "solid", borderRadius: 8, borderWidth: 1 }}>
            <Text style={{ color: "black", fontSize: 16 }}>4.5/5</Text>
          </View>
        </View>
        <Text style={{ color: "black", marginTop: 32 }}>App helped me to get over the fear of my future and made me feel confident and happy!</Text>
      </View>
    )
  }

  return (

    <ScrollView style={styles.container}>
      <PopupModal setAck={setAckCall} Child={isAckn ? ThankyouForCall : CallDetails} setModalFalse={() => setModal(false)} showModal={showModal} />

      <View style={{ marginTop: 30, justifyContent: "space-evenly", flexDirection: "row" }}>
        <Image style={{ width: 60, height: 60, borderRadius: 34, borderWidth: 2, borderColor: "#B9B9BB", padding: 6 }} source={require("../Asset/user2.jpg")}></Image>
        <View>
          <Text style={{ color: "black", fontWeight: "700", fontSize: 20, textAlign: "center" }}>{"5.0"}</Text>
          <Text style={{ color: "black", fontWeight: "400", fontSize: 18, textAlign: "center" }}>{"Ratings"}</Text>
        </View>
        <View>
          <Text style={{ color: "black", fontWeight: "700", fontSize: 20, textAlign: "center" }}>{"2K"}</Text>
          <Text style={{ color: "black", fontWeight: "400", fontSize: 18, textAlign: "center" }}>{"Followers"}</Text>
        </View>
        <View>
          <Text style={{ color: "black", fontWeight: "700", fontSize: 20, textAlign: "center" }}>{"1500"}</Text>
          <Text style={{ color: "black", fontWeight: "400", fontSize: 18, textAlign: "center" }}>{"Served"}</Text>
        </View>
      </View>

      <View style={{ margin: 24, marginTop: 8 }}>
        <Text style={{ color: "black", fontSize: 17, fontWeight: "700" }}>{"Vamshi Bhasham"}</Text>
        <Text style={{ color: "black", fontSize: 18, fontWeight: "400" }}>{"Astrologer"}</Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", marginHorizontal: 24, justifyContent: "space-between", elevation: 5, backgroundColor: "white", borderRadius: 8, paddingVertical: 8 }}>
        <View style={{ width: "40%", flexDirection: "row", alignItems: "center", marginHorizontal: 14 }}>
          <Collor />
          <Text style={{ color: "black", fontSize: 14, fontWeight: "400", marginLeft: 6 }}>{"Vedic"}</Text>
        </View>
        <View style={{ width: "40%", flexDirection: "row", alignItems: "center", marginHorizontal: 14 }}>
          <Trophy />
          <Text style={{ color: "black", fontSize: 14, fontWeight: "400", marginLeft: 6 }}>{"Experience: 2 years"}</Text>
        </View>
        <View style={{ width: "40%", flexDirection: "row", alignItems: "center", marginHorizontal: 14 }}>
          <Language />
          <Text style={{ color: "black", fontSize: 14, fontWeight: "400", marginLeft: 6 }}>{"English, Hindi"}</Text>
        </View>
        <View style={{ width: "40%", flexDirection: "row", alignItems: "center", marginHorizontal: 14 }}>
          <Rupee />
          <Text style={{ color: "black", fontSize: 14, fontWeight: "400", marginLeft: 6 }}>{"20/min"}</Text>
        </View>
      </View>

      <View style={{ marginHorizontal: 24, marginTop: 16, flexDirection: "row", justifyContent: "space-evenly", }}>
        <Pressable style={{ backgroundColor: "#FFCB04", paddingHorizontal: 20, paddingVertical: 5, borderRadius: 8, marginBottom: 10, justifyContent: "center", marginTop: 13, width: "47%" }}>
          <Text style={{ color: "black", fontSize: 16, fontWeight: "700", textAlign: "center" }}>{"Follow"}</Text>
        </Pressable>
        <Pressable onPress={() => setModal(true)} style={{ backgroundColor: "#C5C5C5", paddingHorizontal: 20, paddingVertical: 5, borderRadius: 8, marginBottom: 10, justifyContent: "center", marginTop: 13, width: "47%" }}>
          <Text style={{ color: "black", fontSize: 16, fontWeight: "700", textAlign: "center" }}>{"Contact"}</Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginHorizontal: 24, marginBottom: 8 }}>
        <View style={{ paddingHorizontal: 12, paddingVertical: 8, elevation: 5, borderRadius: 8, backgroundColor: "white", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "47%" }}>
          <Image source={require("../Asset/astroAsset5.jpeg")} style={{ height: 48, width: 48, backgroundColor: "pink", borderRadius: 8 }}></Image>
          <Text style={{ color: "black", fontSize: 16, fontWeight: "700", marginLeft: 28 }}>{"Posts"}</Text>
        </View>
        <View style={{ paddingHorizontal: 12, paddingVertical: 8, elevation: 5, borderRadius: 8, backgroundColor: "white", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "47%" }}>
          <View style={{ height: 48, width: 48, backgroundColor: "#FFCB04", borderRadius: 8, justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 16, fontWeight: "700", color: "black" }}>{"5.0"}</Text></View>
          <Text style={{ color: "black", fontSize: 16, fontWeight: "700", marginLeft: 28 }}>{"Review"}</Text>
        </View>
      </View>
      <View style={{ margin: 24 }}>
        <Text style={{ color: "black", fontSize: 24, fontWeight: 700, marginBottom: 2 }}>Bio:</Text>
        <Text style={{ color: "black" }}>Vamshi is a Vedic Astrologer in India. He loves to help his clients when they are in need. His readings are spirit-guided and he works according to Astrology ethics to bring stability in the lives of the people. </Text>
      </View>
      <View style={{ margin: 24 }}>
        <Text style={{ color: "black", fontSize: 24, fontWeight: 700, marginBottom: 2 }}>Reviews:</Text>
        {reviews.map(review => <ReviewCard key={review} />)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

});
