import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles/homeStyles';
import Button from '../components/button';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button>{'OPEN'}</Button>
      </View>
    );
  }
}
