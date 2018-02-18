import React, { Component } from 'react';
import { 
  View, 
  Animated,
  Dimensions,
  Alert
} from 'react-native';

import Song from './Song';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Playlist extends Component {  
  constructor(props) {
    super(props);
    
    const position = new Animated.ValueXY();
    
    // used to animate smooth transition of the rest of the Playlist
    const positionOfPlaylist = new Animated.ValueXY();
    
    this.state = { 
      position,
      positionOfPlaylist,
      index: 0
    };
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ index: 0 });
    }
  }
  
  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x:0, y:0 },
      bounciness: 0
    }).start();
  }

  animateCards() {
    Animated.timing(this.state.positionOfPlaylist, {
      toValue: { x: 0, y: -10 },
      duration: 300
    }).start(() => {
      // we update state (rerender page) ONLY after the animation is finished
      this.state.position.setValue({ x: 0, y: 0 });
      this.state.positionOfPlaylist.setValue({ x: 0, y: 0 });
      this.setState({ index: this.state.index + 1 });
    });
  }

  
  renderCards() {
    // if there are no more songs to render, render an empty Song (thats-all-card)
    if (this.state.index >= this.props.data.length) {
      return (
        <Song />
      );
    }

    return this.props.data.map((item, index) => {
      
      // add a check in order to not render the already swiped cards
      if (index < this.state.index) {
        return null;
      }
      
      return (
        <View 
          key={item.id}
          style={[styles.cardStyle, {zIndex: 1}]}
        >
          <Song
            item={item}
            onLike={this.onLike}
            onDislike={this.onDislike}
          />
          
        </View>
      );
    
    })
  }

  onLike = () => {
    Alert.alert(
      'Good song!',
      'You liked the song!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
    this.animateCards();
  }

  onDislike = () => {
    Alert.alert(
      'Bad song!',
      'You disliked the song!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
    this.animateCards();
  }

  render() {
    return (
      <Animated.View style={this.state.positionOfPlaylist.getLayout()}>
        {this.renderCards()}
      </Animated.View>
    );    
  }
}

const styles = {
  cardStyle: {
    width: SCREEN_WIDTH,
  }
};