const loggedReducer = (state = { status: false, username: '' }, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SIGN_IN':
      return {
        status: !state.status,
        username: payload,
      };
    case 'SIGN_OUT':
      return { status: !state.status, username: '' };
    default:
      return state;
  }
};

export default loggedReducer;
