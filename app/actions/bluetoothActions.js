import * as types from '../actionTypes/bluetooth';
import { connectBluetooth } from '../util/bluetooth';
import BluetoothSerial from 'react-native-bluetooth-serial';
export function setBluetooth() {
  return {
    type: types.BLUETOOTH,
  };
}

export function setBluetoothFailure(error) {
  return {
    type: types.BLUETOOTH_FAILURE,
    error,
  };
}

export function setBluetoothSuccess(data) {
  return {
    type: types.BLUETOOTH_SUCCESS,
    data,
  };
}
export function connectWriteBluetooth(deviceName, writeData) {
  return async dispatch => {
    dispatch(setBluetooth());
    try {
      await connectBluetooth(deviceName);
      await BluetoothSerial.write(writeData);
      dispatch(setBluetoothSuccess());
    } catch (e) {
      dispatch(setBluetoothFailure(e));
    }
  };
}
