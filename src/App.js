import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, login, logout } from 'actions';

const App = () => {
  const [factor, setFactor] = useState(1);

  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Learning Redux</h1>
      <hr />
      {isLogged.status ? (
        <>
          <p>Welcome {isLogged.username}</p> <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <button onClick={() => dispatch(login('AAkrit'))}>Login</button>
      )}
      <p>
        The value of <strong>counter</strong> is {counter}.
      </p>
      Factor: <input type="number" value={factor} onChange={(e) =>setFactor(e.target.value)} />
      <button onClick={() => dispatch(increment(factor))}>+</button>
      <button onClick={() => dispatch(decrement(factor))}>-</button>
    </div>
  );
};

export default App;
