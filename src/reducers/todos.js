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
      const todos = state.data.filter(todo => todo.id !== id);
      return {
        ...state,
        data: todos
      }
    default: 
      return state;
  }
}

export default todosReducer;
