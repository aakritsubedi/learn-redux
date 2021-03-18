const counterReducer = (state = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return state + Number(payload);
    case 'DECREMENT':
      return state - Number(payload);
    default:
      return state;
  }
};

export default counterReducer;
