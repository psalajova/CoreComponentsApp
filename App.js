import { View, Text, StyleSheet } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.blueBg, styles.boxShadow]}>
        <Text style={styles.cellText}>StyleSheet API</Text>
      </View>

      <View style={[styles.box, styles.peachBg, styles.boxShadow, styles.androidShadow]}>
        <Text style={styles.cellText}>StyleSheet API</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    // borderWidth: 2,
    // borderStyle: "solid",
    // borderColor: "#16243b",
    borderRadius: 10, //only applies to View - when applied to Text, doesn't show on iOS, only Android

  },
  blueBg: {
    backgroundColor: "#c7e0f2",
  },
  peachBg: {
    backgroundColor: "#d1a699",
  },
  cellText: {
    fontFamily: 'Georgia',
  },
  boxShadow: { // only shows up in ioS
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.15, // 0 - transparent, 1 - opaque
    shadowRadius: 5,
  },
  androidShadow: {
    elevation: 10,
  }
})