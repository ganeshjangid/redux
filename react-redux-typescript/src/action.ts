import * as action from "./actionType";
export const ADD_NOTE = (notes: String) => ({
  type: action.ADD_NOTE,
  payload: notes,
});
