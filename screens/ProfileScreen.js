import React, { Component } from 'react';

import { View, Text, Platform, Image, Dimensions, StyleSheet } from 'react-native';
import { Header } from 'react-navigation';
import { Button } from 'react-native-elements';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const vh = height / 100;

const ImageHeader = props => (
  <View style={{ backgroundColor: '#eee' }}>
    <Image
      style={[StyleSheet.absoluteFill, {height: 20*vh}]}
      source={{ uri: 'http://assets.worldwildlife.org/photos/1231/images/story_full_width/Forest-1600x1200px.jpg?1345589439' }}
    />
    <Header {...props} style={{ backgroundColor: 'transparent' }}/>
  </View> 
);

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Review Jobs',
    header: (props) => <ImageHeader {...props} />,
    headerTitleStyle: { color: 'rgba(255,255,255,1)' },
    headerRight: (
      <Button 
        title='Settings' 
        onPress={() => { navigation.navigate('settings') }} 
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(255,255,255,1)" // iOS color: rgba(0, 122, 255, 1)
      />
    ),
    headerStyle: {
      marginTop: (Platform.OS === 'android' ? 24 : 0),
      backgroundColor: 'transparent',
    }
  });
  render() {
    return (
      <View>        
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
      </View>
    );
  }
}

export default ProfileScreen;