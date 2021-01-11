import React from "react";
import { connect } from "react-redux";
import { deleteToDo } from "../actions";
const ToDoList = (props: any) => {
  return (
    <div>
      <hr></hr>
      <h4>Item List</h4>
      <ol>
        {props.todos.map((item: any) => {
          return (
            <li key={item.id}>
              {item.item} {"     "}|
              <button
                onClick={() => {
                  props.dispatch(deleteToDo(item.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  todos: state.todos.data,
});

export default connect(mapStateToProps)(ToDoList);
