/** @format */

import { AppRegistry } from 'react-native';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { name as appName } from './app.json';
import App from './App';

const store = createStore(appReducer, thunk);
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
