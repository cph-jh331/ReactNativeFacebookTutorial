import React from 'react';
import { View, Text, Image } from 'react-native';

const Greeting = (props) => {
    return (
        <Text>Hello {props.name}</Text>
    );
}

export default class Props extends React.Component {
    static navigationOptions = { title: "Learn about Props" }
    render() {
        let picture = {
            uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
        };
        return (
            <View style={{ alignItems: "center" }}>
                <Text>Props</Text>
                <Image source={picture} style={{ width: 193, height: 110 }} />
                <Greeting name="Bob bob" />
                <Greeting name="Jens jens" />
                <Greeting name="Frans frans" />
            </View>
        )
    }
}