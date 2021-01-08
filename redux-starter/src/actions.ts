import * as actionType from "./actionType";

export const bugAdded = (description: string) => ({
  type: actionType.BUG_ADD,
  payload: {
    description,
  },
});

export const bugRemoved = () => ({
  type: actionType.BUG_REMOVE,
  payload: {
    id: 1,
  },
});

export const bugResolved = (id: Number) => ({
  type: actionType.BUG_RESOLVE,
  payload: {
    id,
  },
});
