import { useState } from "react";
import { Button, StatusBar, View } from "react-native";

export default function App() {
  [statusBarHidden, setStatusBarHidden] = useState(false)

  return <View style={{
    flex: 1, // flex to take up all the available screen
    backgroundColor: "plum",
    padding: 50,
  }}>
    <StatusBar
      backgroundColor={"white"} //only shows up on Android
      barStyle={"default"} //changes the color of text on status bar (time, battery, etc)
      hidden={statusBarHidden} //hides status bar
    />
    <Button
      title="hide bar"
      onPress={() => {
        if (statusBarHidden == false) {
          setStatusBarHidden(true);
        }
      }}>
    </Button>

    <Button
      title="show bar"
      onPress={() => {
        if (statusBarHidden == true) {
          setStatusBarHidden(false);
        }
      }}>
    </Button>
  </View>;
}

