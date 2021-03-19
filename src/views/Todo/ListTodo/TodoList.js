import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
  let todos = useSelector((state) => state.todos.data);

  return (
    <div>
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>{item.todo}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
