//[]
import * as actionType from "./actionType";
let lastId = 0;

export default function reducer(state: any = [], action: any) {
  switch (action.type) {
    case actionType.BUG_ADD:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
      break;
    case actionType.BUG_REMOVE:
      return state.filter((bug: any) => {
        return bug.id !== action.payload.id;
      });
      break;
    case actionType.BUG_RESOLVE:
      return state.map((bug: any) => {
        if (bug.id === action.payload.id) {
          bug.resolved = true;
        } else {
          bug;
        }
      });
      break;
    default:
      return state;
      break;
  }
}
