import { Button, View } from "react-native";
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

  </View>;
}

