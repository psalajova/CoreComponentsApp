import { View, Text, Image, ImageBackground } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return <View style={{
    flex: 1, // flex to take up all the available screen
    backgroundColor: "plum",
    padding: 60,
  }}>
    <View style={{
      width: 200,
      height: 200,
      backgroundColor: "white",
    }}></View>
    <Text>
      <Text style={{ color: "white", }}> Hi!fghfhgfhfhfh</Text>
      Hello worlddd
    </Text>

    <ImageBackground source={logoImg} style={{ flex: 1, }}>
      <Image source={"https://picsum.photos/200"} style={{ width: 300, height: 300 }} />
      <Text>BG IMAGE TEXT</Text>
    </ImageBackground>
  </View>;
}

