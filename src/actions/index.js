export const increment = (nr) => {
  return {
    type: 'INCREMENT',
    payload: nr
  };
};

export const decrement = (nr) => {
  return {
    type: 'DECREMENT',
    payload: nr
  };
};

export const login = (username) => {
  return {
    type: 'SIGN_IN',
    payload: username
  };
};

export const logout = () => {
  return {
    type: 'SIGN_OUT',
  };
};
