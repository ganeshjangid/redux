import * as actionType from "../actions";
const initialState = {
  data: [],
};
let lastId = 0;
const todos = (state: any = initialState, action: any) => {
  switch (action.type) {
    case actionType.ADD_TODO:
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: ++lastId,
            item: action.payload.item,
            resolved: false,
          },
        ],
      };
    case actionType.DEL_TODO:
      const todos = state.data.filter(
        (todo: any) => todo.id !== action.payload.id
      );
      return {
        ...state,
        data: todos,
      };
    default:
      return state;
  }
};

export default todos;
