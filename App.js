import { View, Text, Image, ScrollView } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return <View style={{
    flex: 1, // flex to take up all the available screen
    backgroundColor: "plum",
    padding: 50,
  }}>
    <ScrollView>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id hendrerit sem,
        nec suscipit augue. Quisque interdum nibh tellus. In sodales lorem quis consequat iaculis.
        Aenean ut erat porta, feugiat neque in, feugiat nunc. Donec eu leo dui. Ut lobortis mollis nibh,
        eu hendrerit est mollis eget. Vivamus tempor arcu id metus efficitur iaculis.

        Fusce sagittis porta nunc in pulvinar. Curabitur elit justo, sodales quis cursus a,
        aliquet non est. Vivamus aliquet, nulla vel sagittis tempus, ligula nulla fermentum
        lacus, non congue ligula tortor ac mi. Mauris non eros facilisis, lacinia sem quis,
        dignissim leo. Donec bibendum enim quis nibh elementum condimentum. Aliquam congue
        turpis ac scelerisque congue. Cras in fermentum dolor. Nullam ultrices ex non justo
        tempor, vel ultrices felis luctus. Nam pharetra iaculis augue in posuere. Aliquam vel
        augue ligula. Nunc aliquam turpis lacus, pharetra laoreet leo malesuada et.
      </Text>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
    </ScrollView>
  </View>;
}

