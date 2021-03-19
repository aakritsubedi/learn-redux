const initialState = {
  data: [],
};

const todosReducer = (state = initialState, action) => {
  const { type, payload, id } = action;
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        data: [
          ...state.data,
          {
            todo: payload,
            id: id
          }
        ]
      }
    case 'REMOVE_TODO':
      return {}
    default: 
      return state;
  }
}

export default todosReducer;
