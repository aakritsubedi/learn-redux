export const increment = (nr) => {
  return {
    type: 'INCREMENT',
    payload: nr,
  };
};

export const decrement = (nr) => {
  return {
    type: 'DECREMENT',
    payload: nr,
  };
};

export const login = (username) => {
  return {
    type: 'SIGN_IN',
    payload: username,
  };
};

export const logout = () => {
  return {
    type: 'SIGN_OUT',
  };
};

// Todos
export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo,
  id: Math.floor((Math.random() * 100) + 1)
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: id,
});
