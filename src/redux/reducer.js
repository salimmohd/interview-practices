const initialState = {
  todos: [
    {
      id: 1,
      text: "salim",
    },
    {
      id: 2,
      text: "affu",
    },
  ],
};
// let nextTodoId = 1;
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload,
          },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.editText }
            : todo
        ),
      };
    default:
      return state;
  }
};
export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: text,
});
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});
export const editTodos = (id, editText) => ({
  type: "EDIT_TODO",
  payload: { id, editText },
});

export const editTodo = (id, editText) => ({
  type: "EDIT_TODO",
  payload: { id, editText },
});
export default todoReducer;
