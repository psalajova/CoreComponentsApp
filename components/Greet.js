import { View, Text } from 'react-native'


// React Props are like function arguments in JavaScript and attributes in HTML.
// Props are also how you pass data from one component to another, as parameters.

// Could be also written as:
// export default function Greet ( props ) { 
//      return <Text>I am a prop: {props.propName} </Text>
// }

export default function Greet({ name }) { // {name} = the func accepts a prop called 'name'
    return (
        <View style={
            {
                backgroundColor: "#835b8f",
                padding: 20,
            }
        }>
            <Text style={
                { color: "white" }
            }>
                Hello, {name}.
            </Text>
        </View>
    )
}
