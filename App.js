import { Button, View, Image, Pressable, Text, Modal } from "react-native";
import { useState } from "react";

const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return <View style={{
    flex: 1, // flex to take up all the available screen
    backgroundColor: "plum",
    padding: 50,
  }}>
    <Button
      title="Press ME"
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
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          backgroundColor: '#1E6738',
          color: "white",
          padding: 20,
        }}
        onPress={() => {
          setIsModalVisible(true);
          console.log("opening modeal");
        }}>
        Pressable text here - opens modal
      </Text>
    </Pressable>

    <Modal
      visible={isModalVisible}
      onRequestClose={() => { // closes the modal if the user uses the back button on Android/closing gesture on iOS
        setIsModalVisible(false);
      }}
      animationType="slide" //or fade
      presentationStyle="formSheet" //set to 'fullscreen' by default, other: "formSheet"
    >

      <View style={{
        flex: 1, // flex to take up all the available screen
        backgroundColor: "lightblue",
        padding: 50,
      }}>
        <Text>
          Modal content.
          Modal content.
          Modal content.
          Modal content.
        </Text>
        <Button
          title="Close this modal"
          color="midnightblue"
          onPress={() => {
            setIsModalVisible(false);
            console.log("closing modal");
          }} />
      </View>
    </Modal>

  </View>;
}

