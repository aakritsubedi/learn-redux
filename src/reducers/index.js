import { combineReducers } from 'redux';

import counterReducer from './counter';
import loggedReducer from './isLogged';
import todosReducer from './todos';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  todos: todosReducer,
});

export default allReducers;
