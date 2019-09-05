import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ActionButton from 'react-native-action-button';
import Home from './pages/Home';

export default class App extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <Home />
        <ActionButton
          buttonColor="#9d00dE"
          onPress={() => {}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      // Flex
      flex:1,

      // Alignment

      // Layout
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      paddingTop: 0,
      backgroundColor: '#F9F9F9'
  },
  
});