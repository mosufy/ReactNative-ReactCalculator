import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import CalculatorContainer from './containers/CalculatorContainer';
import store from './store';

const App = () => (
  <Provider store={store}>
    <CalculatorContainer/>
  </Provider>
);

AppRegistry.registerComponent('ReactCalculator', () => App);