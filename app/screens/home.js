import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles/homeStyles';
import Button from '../components/button';

export default class Home extends Component {
  _openDoor = () =>
    this.props.actions.writeToBluetooth(
      'HC-05',
      '1',
      this.props.bluetooth.status,
    );

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this._openDoor}>{'OPEN'}</Button>
      </View>
    );
  }
}
