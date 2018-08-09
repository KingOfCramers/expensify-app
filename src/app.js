import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from "react-redux";

// Redux
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { sortByAmount, sortByDate, setStartDate, setEndDate, setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses.js";
import AppRouter from "./routers/AppRouter"

const store = configureStore();

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -20}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 500, createdAt: 20}));
const expenseThree = store.dispatch(addExpense({description: 'Remove ME!', amount: 900}));
// Routes
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));