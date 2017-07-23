import {createStore, applyMiddleware, combineReducers} from 'redux';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import {saveState, loadState} from './asyncStorage';

const middlewares = [];

const {createLogger} = require('redux-logger');
const logger = createLogger({
  diff: true
});

middlewares.push(logger);

// create reducer object
const combinedReducers = combineReducers({
  ...reducers
});

// set state to undefined for logout attempts
const reducer = (state, action) => {
  // if (action.type === USER_LOGOUT) {
  //   state = undefined;
  // }
  return combinedReducers(state, action);
};

// // load data from localStorage
let persistedState = loadState();

// create store with persistedState
let store = createStore(reducer, persistedState, applyMiddleware(thunk, ...middlewares));

// subscribe to state changes
// throttle added to only persist to localStorage at 1s interval
store.subscribe(throttle(() => {
  saveState({
    // Add more state objects as required for persistence
    // user: store.getState().user,
  })
}, 1000));

export default store;