import React from "react";
import { NewInputAdd } from "./components/NewNoteInput";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { NoteState } from "./noteReducer";
import { ADD_NOTE } from "./action";

function App() {
  const notes = useSelector<NoteState, NoteState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();
  const addNote = (notes: string) => {
    dispatch(ADD_NOTE(notes));
  };

  return (
    <div>
      <h1>Learn React Redux using typescript</h1>
      <NewInputAdd addNotes={addNote} />
      <div>
        <hr></hr>
        <p>List of Products</p>
        <ol>
          {notes.map((note, idx) => {
            return <li key={idx}>{note}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
