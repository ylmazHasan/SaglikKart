
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';
import Root from './src/Root';
import Kamera from './src/components/Kamera';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
   <Root/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
AppRegistry.registerComponent('hastaregister', () => Kamera);
