import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 6,
  },
  text: {
    color: colors.secondaryText,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
