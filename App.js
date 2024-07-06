import { View, Text, StyleSheet } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.blueBg]}>
        <Text style={styles.cellText}>StyleSheet API</Text>
      </View>

      <View style={[styles.box, styles.greenBg]}>
        <Text>StyleSheet API</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#95bda0",
    padding: 60,
    alignItems: 'center',
  },
  box: {
    width: "100%", // stretch to fill all available horizontal space
    height: 100,
    //padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: 'center',     //center text horizontally
    justifyContent: 'center', //center text vertically
    //border:
    borderWidth: 2,
    borderStyle: "dotted",
    borderColor: "#16243b",
    borderRadius: 10, //only applies to View - when applied to Text, doesn't show on iOS, only Android

  },
  blueBg: {
    backgroundColor: "lightblue",
  },
  greenBg: {
    backgroundColor: "lightgreen",
  },
  cellText: {
    fontFamily: 'Georgia',
  },
})