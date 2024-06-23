import { Button, View, Image, Pressable, Text } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return <View style={{
    flex: 1, // flex to take up all the available screen
    backgroundColor: "plum",
    padding: 50,
  }}>
    <Button
      title="Press ME"
      color={"green"}
      onPress={(event) => {
        console.log("Button pressed")
        console.log(event.target.title)
      }} />

    {/* Pressable: wrapper component that makes other components pressable

    We can create a custom button with it:
    onPressIn   - called when press is activated
    onLongPress - called when press is held for more than 500 ms
    onPressOut  - called when press is deactivated */}
    <Pressable onPress={() => {
      console.log("Image pressed!");
    }}>
      <Image source={logoImg} style={{ height: 300, width: 300 }} />
    </Pressable>

    <Pressable onPress={() => {
      console.log("Text pressed!");
    }}>
      <Text>Pressable text here</Text>
    </Pressable>

  </View>;
}

