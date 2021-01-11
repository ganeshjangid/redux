import React, { ChangeEvent, useState } from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions";
const AddToDo = (props: any) => {
  const [item, setItem] = useState("");
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value);
  };
  const handleSubmit = () => {
    props.dispatch(addToDo(item));
    setItem("");
  };
  return (
    <div>
      <input type='text' value={item} onChange={handleInput} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default connect()(AddToDo);
