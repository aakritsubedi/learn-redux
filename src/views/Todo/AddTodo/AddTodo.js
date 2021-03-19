import React from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from 'actions';

const AddTodo = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let todo = e.target.userTodo.value;
          dispatch(addTodo(todo));
          e.target.userTodo.value = "";
        }}
      >
        <input type="text" name="userTodo" />
        <button> Add </button>
      </form>
    </div>
  );
};

export default AddTodo;
