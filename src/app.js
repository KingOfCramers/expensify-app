// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

// Redux
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import AppRouter, { history } from "./routers/AppRouter"; // History property shows history of router. We use this instead of default history of browser.

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

// Conditional (single-time rendering)
let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

// Loading
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// Authentication
firebase.auth().onAuthStateChanged((user) => { // Fires when authentication status changes
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => { // Get expenses..
      renderApp();
      if (history.location.pathname === "/") { // If user is coming from login page, redirect to dashboard. Otherwise, keep them at current page.
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp(); // Will not fire again if user is ACTIVELY logging out, will only push to home page.
    history.push("/"); // Recieved from the router...
  }
});