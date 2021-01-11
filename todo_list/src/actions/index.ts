export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";

export const addToDo = (item: string) => ({
  type: ADD_TODO,
  payload: {
    item,
  },
});

export const deleteToDo = (id: number) => ({
  type: DEL_TODO,
  payload: {
    id,
  },
});
