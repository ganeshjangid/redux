import store from "./store";
import * as actions from "./actions";
const unsubscribe = store.subscribe(() => {
  console.log("State changed!", store.getState());
});

store.dispatch(actions.bugAdded("Bug1"));
unsubscribe();
store.dispatch(actions.bugRemoved());
store.dispatch(actions.bugAdded("bug2"));
store.dispatch(actions.bugAdded("bug3"));

console.log(store.getState());
const lastId = store.getState()[0]["id"];
store.dispatch(actions.bugResolved(lastId));
