import { View } from "react-native";
import Greet from "./components/Greet";

export default function App() {
  return <View style={{
    flex: 1, // flex to take up all the available screen
    backgroundColor: "plum",
    padding: 50,
  }}>
    <Greet name={"Patricia"} />
    <Greet name={"Whatever name"} />
  </View>;
}

