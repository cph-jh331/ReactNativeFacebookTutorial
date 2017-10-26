import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Style extends Component {
    static navigationOptions = { title: "Learn about Style" }
    render() {
        return (
            <View>
                <Text style={styles.red}>Det er rødt!</Text>
                <Text style={styles.bigblue}>Stor blå!</Text>
                <Text style={[styles.bigblue, styles.red]}>Stor big blue med rødt</Text>
                <Text style={[styles.red, styles.bigblue]}>rød med stor blå</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});