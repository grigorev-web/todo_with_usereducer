import { useEffect, useReducer, useState } from "react";
import "./styles.css";
import reducer from "./components/reducer";
import { initialState } from "./components/initialState";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  let todos = state.todos.length
    ? state.todos.map((value, index) => <li key={index}>{value}</li>)
    : "no records";
  return (
    <div className="App container">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>field:{state.field}</p>
      <input
        value={state.field}
        type="text"
        className="form-control m-3"
        onChange={(e) => dispatch({ type: "SET_FIELD", field: e.target.value })}
      />
      <div
        className="btn btn-success m-3"
        onClick={() => {
          if (state.field.length) return dispatch({ type: "ADD_TODO" });
        }}
      >
        Load
      </div>
      <p>{todos}</p>
      <table className="table table-bordered m-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">field1</td>
            <td className="">field2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
