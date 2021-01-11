import React from "react";
import "./App.css";
import AddForm from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <div className='App'>
      <h1>Learn React Redux Using TODO List</h1>
      <AddForm />
      <ToDoList />
    </div>
  );
}

export default App;
