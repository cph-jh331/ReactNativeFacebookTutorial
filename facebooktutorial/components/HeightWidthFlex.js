import React, { Component } from 'react';
import { View } from 'react-native';


export default class HeightWidthFlex extends Component {
    static navigationOptions = { title: "flex height & width" };
    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // --> nothing shows up...
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            // --> makes a white bar with the height of 300. 
            <View style={{ height:300 }}>
                <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
                <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
}