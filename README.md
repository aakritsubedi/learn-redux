# Learning Redux

- Basic Redux

```javascript
import { createStore } from 'redux';

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
```

- React Redux
  ![React Redux](./Redux.gif)

- Todo App
  ![Todo App](./Todo.gif)

---

### Demo Link
[https://learn-react-redux.netlify.app/](https://learn-react-redux.netlify.app/)
