import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeTodo } from 'actions';

const TodoList = () => {
  const dispatch = useDispatch();

  let todos = useSelector((state) => state.todos.data);

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item.todo} <button onClick={() => dispatch(removeTodo((item.id)))}>&#128465;</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
