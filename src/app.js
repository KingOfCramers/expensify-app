// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

// Redux
import configureStore from "./store/configureStore";
import { startAddExpense, removeExpense, editExpense } from "./actions/expenses";
import { sortByAmount, sortByDate, setStartDate, setEndDate, setTextFilter } from "./actions/filters";
import AppRouter from "./routers/AppRouter"

// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css"; // From airbnb datepicker

// Firebase
import "./firebase/firebase";
const store = configureStore();

// console.log("Source maps working");

store.dispatch(startAddExpense({description: 'Rent', amount: 100}));
store.dispatch(startAddExpense({description: 'Coffee', amount: 6000}));
store.dispatch(startAddExpense({description: 'Gas Bill', amount: 1098}));

// Routes
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));