import * as types from "../actionTypes/bluetooth";

export function connectBluetooth() {
  return dispatch => {
    dispatch({
      type: types.BLUETOOTH_CONNECT
    });
  };
}
