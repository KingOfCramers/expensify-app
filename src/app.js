// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

// Redux
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import AppRouter from "./routers/AppRouter"
const store = configureStore();

// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css"; // From airbnb datepicker

// Firebase
import { firebase } from "./firebase/firebase";

// View
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// Loading
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

// Authentication
firebase.auth().onAuthStateChanged((user) => { // Fires when authentication status changes
  if (user) {
    console.log("Log in.");
  } else {
    console.log("Log out.");
  }
});