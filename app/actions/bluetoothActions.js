import * as types from '../actionTypes/bluetooth';
import { connectBluetooth, writeBluetooth } from '../util/bluetooth';

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
    const { status, error } = await connectBluetooth(deviceName);
    if (status === 'SUCCESS') {
      dispatch(writeBluetoothHelper(writeData));
    } else if (status === 'FAILURE') {
      dispatch(setBluetoothFailure(error));
    }
  };
}

export function writeBluetoothHelper(writeData) {
  return async dispatch => {
    const { status, error } = await writeBluetooth(writeData);
    if (status === 'SUCCESS') {
      dispatch(setBluetoothSuccess());
    } else {
      dispatch(setBluetoothFailure(error));
    }
  };
}
