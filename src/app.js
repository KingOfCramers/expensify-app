import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Redux
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { sortByAmount, sortByDate, setStartDate, setEndDate, setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses.js";

const store = configureStore();

/*  store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -20}));
  store.dispatch(addExpense({description: 'Coffee', amount: 500, createdAt: 20}));
  store.dispatch(addExpense({description: 'Beer', amount: 200, createdAt: -120}));
  store.dispatch(sortByAmount());
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log("Visible Expenses: \n", visibleExpenses, "\n Filters: \n", state.filters);*/

// Routes
import AppRouter from "./routers/AppRouter"

ReactDOM.render(<AppRouter />, document.getElementById('app'));