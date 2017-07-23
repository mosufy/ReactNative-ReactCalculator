import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import ReactCalculator from './containers/ReactCalculator';
import store from './store';

const App = () => (
  <Provider store={store}>
    <ReactCalculator/>
  </Provider>
);

AppRegistry.registerComponent('ReactCalculator', () => App);