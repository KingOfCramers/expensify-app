import { createStore } from "redux";

// Action generators -- functions that return action objects.

const incrementCount = (payload) => ({
    type: "INCREMENT", // Implicit return this object.
    incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT" :
      return { count: state.count + action.incrementBy };
    case "DECREMENT" :
      const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : -1;
      return { count: state.count - decrementBy };
    case "SET" :
      const count = action.count;
      return { count: count };
    case "RESET" :
      return { count: 0 }
    default :
      return state;
   };
});

const unsubscribe = store.subscribe(() => { // Called every time the store changes.
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 12}));

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
});

store.dispatch({
  type: "SET",
  count: 101
});


unsubscribe();