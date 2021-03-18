import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';

import './assets/css/App.css';

// Store: Globalized State

// Action
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};

let store = createStore(counter);

// Display it in console
store.subscribe(() => console.log(store.getState()));

// Dispatch
store.dispatch(increment());
store.dispatch(decrement());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
