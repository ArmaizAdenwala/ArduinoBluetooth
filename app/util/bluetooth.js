import BluetoothSerial from 'react-native-bluetooth-serial';

export async function connectBluetooth(device) {
  try {
    const deviceIds = await _getDeviceIds(device);
    if (deviceIds.length === 0) {
      throw new Error('NO_DEVICE_FOUND');
    }
    const data = await BluetoothSerial.connect(deviceIds[0]);
    if (data.message === `Connected to ${device}`) {
      return { status: 'SUCCESS', device };
    }
    throw new Error('CONNECT_FAILURE');
  } catch (error) {
    console.warn(error);
    return { status: 'FAILURE', error };
  }
}

export async function writeBluetooth(data) {
  await BluetoothSerial.write(data);
}

async function _getDeviceIds(device) {
  const list = await BluetoothSerial.list();
  const devices = list.filter(item => item.name === device);
  return devices.map(item => item.id);
}
