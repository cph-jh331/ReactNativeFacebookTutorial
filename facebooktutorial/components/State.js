import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blinker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class State extends Component {
    static navigationOptions = { title: "Learn about State" }
    render() {
        return (
            <View>
                <Blinker text="Jamen dog" />
                <Blinker text="Der er en masse fugle her" />
                <Blinker text="Sikke det blinker..." />
            </View>
        );
    }
}