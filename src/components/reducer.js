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
    default:
      throw new Error();
  }
}
