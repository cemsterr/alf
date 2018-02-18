import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';

class Song extends Component {
  constructor(props) {
    super(props);

  }

  renderCard() {
    return (
      <Card
        key={this.props.item.id}
        title={this.props.item.text}
        image={{ uri: this.props.item.uri }}
      >
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          onPress={this.props.onLike}
          icon={{ name: 'thumbs-up', type: 'font-awesome' }}
          backgroundColor="green"
          title="Like!"
          buttonStyle={{borderRadius: 20}}
        />
        <Button
          onPress={this.props.onDislike}
          icon={{ name: 'thumbs-down', type: 'font-awesome' }}
          backgroundColor="red"
          title="Dislike!"
          buttonStyle={{borderRadius: 20}}
        /> 
        <Button
          icon={{ name: 'user', type: 'font-awesome' }}
          backgroundColor="black" 
          color="white"
          title={this.props.item.op}
          buttonStyle={{borderRadius: 20}}
        />
        </View>    
      </Card>
    );
    
  }

  renderNoMoreCards() {
    return (
      <Card title="All done!">
        <Text style={{ marginBottom: 10 }}>You're up-to-date!</Text>
        <Button 
          backgroundColor="#03A9F4"
          title="Get more!"
        />
      </Card>
    );
  }

  render() {
    return (
      this.props.item ? this.renderCard() : this.renderNoMoreCards()
    );  
  }
}

export default Song;
