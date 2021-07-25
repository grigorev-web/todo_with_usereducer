export default function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        field: action.field
      };
    case "ADD_TODO":
      console.log("add_todo");
      let newToDo = state.todos;
      newToDo.push(state.field);
      return {
        ...state,
        todos: newToDo,
        field: ""
      };
    case "DELETE_ITEM":
      return {
        ...state,
        todos: state.todos.filter((elem, i) => i !== action.index)
      };
    default:
      throw new Error();
  }
}
