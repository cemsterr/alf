import React, { Component } from 'react';
import { View, Text, Dimensions, Platform } from 'react-native';

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Settings',
    headerTitleStyle: { color: 'black' },
    headerStyle: {
      backgroundColor: 'transparent',
    }
  });
  render() {
    return (
      <View>        
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
      </View>
    );
  }
}

export default SettingsScreen;