import React from 'react';
import Colors from '../constants/Colors';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export default class UserDeviceInfo extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      text: 'isEmulator'
    };
  }
  render() {
    return (
    	<View>
    	<Text>Serial Number: {this.state.text}</Text>
    	</View>
    );
  }
}