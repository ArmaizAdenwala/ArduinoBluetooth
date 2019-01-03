import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles/homeStyles';
import Button from '../components/button';

export default class Home extends Component {
  _openDoor = () => this.props.actions.connectWriteBluetooth('HC-05', '1');

  render() {
    return (
      <View style={styles.container}>
        <Button status={this.props.bluetooth.status} onPress={this._openDoor}>
          {'OPEN'}
        </Button>
      </View>
    );
  }
}
