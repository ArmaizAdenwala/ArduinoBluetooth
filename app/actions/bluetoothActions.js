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
export function writeToBluetooth(deviceName, writeData, bluetoothStatus) {
  return async dispatch => {
    let status = bluetoothStatus;
    let device = null;
    let error = null;

    if (status !== 'SUCCESS') {
      dispatch(setBluetooth());
      const data = await connectBluetooth(deviceName);
      status = data.status;
      device = data.device;
      error = data.error;
    }
    if (status === 'FAILURE') {
      dispatch(setBluetoothFailure(error));
    } else if (status === 'SUCCESS') {
      await writeBluetooth(writeData);
      dispatch(setBluetoothSuccess(device));
    }
  };
}
