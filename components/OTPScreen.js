/*eslint-disable*/
import { useState, useRef, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';

export default function OTPScreen(props) {
  const [otp, setOTP] = useState('');
  const [btnColor, setBtnColor] = useState("#D8D8D8");
  const [countDown, setCount] = useState(60);
  useEffect(() => {
    if (countDown > 0) {
      const interval = setInterval(() => {
        setCount(countDown - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countDown]);
  useEffect(() => {
    if (otp.length === 6) setBtnColor("#FFCB04");
    else if (btnColor === "#FFCB04") setBtnColor("#D8D8D8")
    console.log(otp);
  }, [otp])

  const inputRefs = useRef([]);

  const handleOTPEnter = (text, index) => {
    const updatedOTP = otp.split('');
    updatedOTP[index] = text;
    setOTP(updatedOTP.join(''));
    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };
  return (
    <View style={{ justifyContent: "space-between", flex: 1, backgroundColor: "white" }}>
      <ScrollView automaticallyAdjustKeyboardInsets={true} >
        <View style={{ justifyContent: "center", flexDirection: "row", marginTop: 70 }}>
          <Image source={require("../Asset/AppLogo.png")} />
        </View>
        <Text style={{ color: "#000000", fontSize: 36, fontWeight: "500", textAlign: "center" }}>{"Astro 24/7"}</Text>
        <Text style={{ color: "black", textAlign: "center", fontSize: 24, fontWeight: "500", marginTop: 87 }}>{"Verify your number"}</Text>
        <Text style={{ color: "black", textAlign: "center", marginTop: 50, }}>{"Enter Your OTP"}</Text>
        <View style={styles.otpContainer}>
          {Array.from({ length: 6 }).map((_, index) => (
            <TextInput
              key={index}
              style={styles.otpBox}
              maxLength={1}
              keyboardType={'numeric'}
              onChangeText={(text) => handleOTPEnter(text, index)}
              value={otp[index]}
              ref={(ref) => inputRefs.current.push(ref)}
            />
          ))}
        </View>
        {countDown > 0 ? <Text style={{ color: "black", textAlign: "center", marginTop: 32, }}>{"Resend in 00:" + (countDown < 10 ? "0" : "") + countDown}</Text> :
          <Pressable style={{ width: "100%", alignItems: "center", justifyContent: "center" }} onPress={() => setCount(60)}><Text style={{ color: "#FFCB04", textAlign: "center", marginTop: 32 }}>{"Resend"}</Text></Pressable>}
      </ScrollView>
      <View style={{ marginBottom: 50 }}>
        <Pressable onPress={() => props.navigation.navigate("fullPage")} style={{ backgroundColor: btnColor, padding: 10, marginHorizontal: 25, borderRadius: 8 }}>
          <Text style={{ textAlign: "center", color: "black", textAlign: "center", fontSize: 16, fontWeight: "700" }}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  otpBox: {
    // borderWidth: 1,
    // borderColor: '#000',
    borderRadius: 5,
    elevation: 5,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin: 8,
    fontSize: 20,
    color: "black",
    textAlign: 'center',
  },

});
