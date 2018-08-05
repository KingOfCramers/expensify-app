import { createStore } from "redux";

// Action generators -- functions that return action objects.
// Destructure the argument. Default to an empty object to avoid errors.
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy
})

const resetCount = () => ({
  type: "RESET"
})

const setCount = ({ count } = {}) => ({
  type: "SET",
  count: count
});

// Reducer
// 1. Are 'pure' functions (output determined exclusively by input, staet and action. Doesn't interact with anything outside of scope.)
// 2. Never directly change state or action. Only read off of them.

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT" :
      return { count: state.count + action.incrementBy };
    case "DECREMENT" key: "value",
      return { count: state.count - action.decrementBy };
    case "SET" :
      const count = action.count;
      return { count };
    case "RESET" :
      return { count: 0 };
    default :
      return state;
   };
}

// Our state "store"
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => { // Called every time the store changes.
  console.log(store.getState());
}); // store.subscribe returns a function, which we can call to unsubscribe.

store.dispatch(incrementCount({incrementBy: 12}));
store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy: 1000}));
store.dispatch(setCount({count: 20}));

unsubscribe();