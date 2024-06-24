import { View, ActivityIndicator } from "react-native";

export default function App() {
  return <View style={{
    flex: 1, // flex to take up all the available screen
    backgroundColor: "plum",
    padding: 50,
  }}>
    <ActivityIndicator />
    <ActivityIndicator size={"large"} />
    <ActivityIndicator size={"large"} color={"red"} />
    <ActivityIndicator size={"large"} color={"white"} animating={false} />
  </View>;
}

