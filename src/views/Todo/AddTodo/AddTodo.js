import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from 'actions';

const AddTodo = (props) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let todo = e.target.userTodo.value;
          props.dispatch(addTodo(todo));
          e.target.userTodo.value = "";
        }}
      >
        <input type="text" name="userTodo" />
        <button> Add </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
