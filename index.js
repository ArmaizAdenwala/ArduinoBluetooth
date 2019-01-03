/** @format */

import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['Module RCTBluetoothSerial ']);

AppRegistry.registerComponent(appName, () => App);
