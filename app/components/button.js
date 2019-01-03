import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../constants';

export default class Button extends Component {
  _renderText() {
    if (this._isLoading()) {
      return <ActivityIndicator size="small" color="#fff" />;
    }
    return <Text style={styles.text}>{this.props.children}</Text>;
  }

  _isLoading = () => this.props.status === 'LOADING';
  _isFailure = () => this.props.status === 'FAILURE';

  _renderError() {
    if (this._isFailure()) {
      return (
        <Text style={styles.error}>
          {'There was an error connecting to the device'}
        </Text>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={this._isLoading()}
          style={styles.btnContainer}
          onPress={this.props.onPress}
        >
          {this._renderText()}
        </TouchableOpacity>
        {this._renderError()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  btnContainer: {
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    width: 128,
    borderRadius: 6,
  },
  text: {
    color: colors.secondaryText,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  error: {
    color: colors.error,
    fontSize: 16,
    fontWeight: '500',
  },
});
