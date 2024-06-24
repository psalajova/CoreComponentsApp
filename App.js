import { View, Alert, Button } from "react-native";

export default function App() {
  return <View style={{
    flex: 1, // flex to take up all the available screen
    backgroundColor: "plum",
    padding: 50,
  }}>
    <Button title="Alert" onPress={() => {
      Alert.alert("Invalid data alert!!!")
    }}>
    </Button>

    <Button title="Alert w a message" onPress={() => {
      Alert.alert("Warning!!!", "Additional info: you did something horrible and now you are going to pay :).")
    }}>
    </Button>

    <Button title="Alert w 2 buttons" onPress={() => {
      Alert.alert("Invalid data alert!!!", "Additional msg", [
        {
          text: 'Cancel opt',
          onPress: () => {
            console.log("Cancel pressed.")
          }
        },
        {
          text: 'Ok opt',
          onPress: () => {
            console.log("Ok pressed.")
          }
        }
      ])
    }}></Button>
  </View>;
}

