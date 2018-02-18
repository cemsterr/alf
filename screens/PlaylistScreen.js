import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, Alert, Animated } from 'react-native';
import { Button, Card } from 'react-native-elements';

import Playlist from '../components/Playlist';

const DATA = [
  { id: 1, text: 'Sunbathing - The Space Cowboys', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg', op: 'Cems' },
  { id: 2, text: 'Big City Nights - Scorpions', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg', op: 'CanB' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg', op: 'CanB' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg', op: 'AydinA' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg', op: 'AydinA' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg', op: 'Gokel' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg', op: 'Cems' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg', op: 'Gokel' },
];

const SCREEN_WIDTH = Dimensions.get('window').width;

class PlaylistScreen extends Component {
  
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Playlist 
          data={DATA}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
  cardStyle: {
    width: SCREEN_WIDTH,
  }
});


export default PlaylistScreen;