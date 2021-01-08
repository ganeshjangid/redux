import react, { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
interface newInputNodeProps {
  addNotes(notes: string): void;
}

export const NewInputAdd: FC<newInputNodeProps> = ({ addNotes }) => {
  const [notes, setNotes] = useState("");
  const updateHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setNotes(event.target.value);
  };
  const onAddNotes = () => {
    addNotes(notes);
    setNotes("");
  };
  return (
    <div>
      <input type='text' value={notes} onChange={updateHandle}></input>
      <button onClick={onAddNotes}>Add Row</button>
    </div>
  );
};
