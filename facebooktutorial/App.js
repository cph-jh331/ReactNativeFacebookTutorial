
import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import Basics from './components/Basics';
import Props from './components/Props';
import WhatToDo from './components/WhatToDo';
import State from './components/State';
import Style from './components/Style';
import HeightWidthFixed from './components/HightWidthFixed';
import HeightWidthFlex from './components/HeightWidthFlex';
import FlexBox from './components/FlexBox';
import TextInputs from './components/TextInputs';
import Touches from './components/Touches';
import ScrollViews from './components/ScrollViews';
import ListViews from './components/ListViews';
import NetWorking from './components/Networking';


//Todo: Create a new file (NetWorking.js), import it,add a "Touchable", and complete the exercise


const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by John Hansen</Text>

        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('state')} title="State" />
        <Touchable onPress={() => navigate('style')} title="Style" />
        <Touchable onPress={() => navigate('hwFixed')} title="Height Width Fixed" />
        <Touchable onPress={() => navigate('hwFlex')} title="Height Width Flex" />
        <Touchable onPress={() => navigate('flexBox')} title="Flex box" />
        <Touchable onPress={() => navigate('textInput')} title="Textinput" />
        <Touchable onPress={() => navigate('touches')} title="Touches" />
        <Touchable onPress={() => navigate('scrollView')} title="ScrollView" />
        <Touchable onPress={() => navigate('listViews')} title="ListViews" />
        <Touchable onPress={() => navigate('networking')} title="Networking" />

      </ScrollView>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  web: { screen: WhatToDo },
  state: { screen: State },
  style: { screen: Style },
  hwFixed: { screen: HeightWidthFixed },
  hwFlex: { screen: HeightWidthFlex },
  flexBox: { screen: FlexBox },
  textInput: { screen: TextInputs },
  touches: { screen: Touches },
  scrollView: { screen: ScrollViews },
  listViews: { screen: ListViews },
  networking: { screen: NetWorking },
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})