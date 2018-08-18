import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css"; // From airbnb datepicker
import { Provider } from "react-redux";

// Redux
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { sortByAmount, sortByDate, setStartDate, setEndDate, setTextFilter } from "./actions/filters";
import AppRouter from "./routers/AppRouter"

const store = configureStore();

store.dispatch(addExpense({description: 'Rent', amount: 100}));
store.dispatch(addExpense({description: 'Coffee', amount: 6000}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 1098}));

// Routes
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

import moment from "moment";