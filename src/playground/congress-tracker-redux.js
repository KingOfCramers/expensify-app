import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// Action generators
const addTweet = ({ handle = "" } = {}) => ({
  type: "ADD_TWEET",
  tweet: {
    id: uuid(),
    handle
  }
});

const removeTweet = ({ id } = {}) => ({
  type: "REMOVE_TWEET",
  tweet: {
    id
  }
});
const addLegislation = ({ identity = "" } = {}) => ({
  type: "ADD_LEGISLATION",
  legislation: {
    id: uuid(),
    identity
  }
});

const removeLegislation = ({ id } = {}) => ({
  type: "REMOVE_LEGISLATION",
  legislation: {
    id
  }
});


// Reducers
const defaultTweet = [];
const tweetReducer = (state = defaultTweet, action) => {
  switch(action.type){
    case "ADD_TWEET" :
      return [...state, action.tweet ];
    case "REMOVE_TWEET" :
      return state.filter((tweet) => {
        return tweet.id !== action.tweet.id;
      });
    default :
      return state
  }
};

// Reducer
const defaultLegislation = [];
const legislationReducer = (state = defaultLegislation, action) => {
  switch(action.type){
    case "ADD_LEGISLATION" :
      return [...state, action.legislation]
    case "REMOVE_LEGISLATION" :
      return state.filter((legislation) => {
        return legislation.id !== action.legislation.id
      })
    default :
      return state;
  }
};

// Store Creation
const store = createStore(
  combineReducers({
    tweets: tweetReducer,
    legislation: legislationReducer
  })
);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})
console.log(store.getState());
const newTweet = store.dispatch(addTweet({ handle: "harrisoncramer" }));
const newTweet2 = store.dispatch(addTweet({ handle: "bobbyJones" }));
const newLegislation = store.dispatch(addLegislation({ identity: "hr123" }));
const newLegislation2 = store.dispatch(addLegislation({ identity: "s12" }));

store.dispatch(removeTweet({ id: newTweet2.tweet.id }));
store.dispatch(removeLegislation({ id: newLegislation2.legislation.id }));

unsubscribe();