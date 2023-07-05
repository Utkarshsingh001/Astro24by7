/*eslint-disable*/
import { Image, Text, View, Pressable, } from 'react-native';

const ThankyouForCall = (props) => {
  return (
    <View style={{ width: "100%", alignItems: "center", padding: 16, }}>
      <View style={{ backgroundColor: "white", alignItems: "center", padding: 24, width: "100%", borderRadius: 8, elevation: 5 }}>
        <Text style={{ color: "black", fontSize: 24, fontWeight: "700" }}>Thank you for calling!</Text>
        <Text style={{ color: "black", fontSize: 18, marginTop: 5 }}>You will receive a call from astrologer</Text>
        <Text style={{ color: "black", fontSize: 17, fontWeight: "700", marginTop: 5 }}>Vamshi Bhasham</Text>
        <Text style={{ color: "black", fontSize: 18, marginTop: 5 }}>Within few minutes</Text>
        <Image style={{ width: 80, height: 80, borderRadius: 40 }} source={require("../Asset/AppLogo.png")}></Image>
        <Pressable style={{ alignItems: "center", backgroundColor: "#363636", borderRadius: 8, padding: 10, width: "100%", marginTop: 30 }}>
          <Text style={{ color: "white", fontSize: 18 }}>Offer on Call</Text>
        </Pressable>
        <Text style={{ textAlign: "center", color: "black", marginTop: 12, fontSize: 18 }}> {"In case, if you do not receive any call, please select another astrologer and try again"}</Text>
        <Pressable onPress={() => { props.toggleModal(); props.setAck(false) }} style={{ alignItems: "center", backgroundColor: "#FFCB04", borderRadius: 8, padding: 10, width: "100%", marginTop: 100 }}>
          <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>Back</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ThankyouForCall;