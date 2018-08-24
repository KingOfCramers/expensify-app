import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

const AddExpensePage = (props) => (
  <div>
    <h2>Add Expense</h2>
    <ExpenseForm
      onSubmit={(expense) => { // Passes onSubmit method as prop, fire inside submit event, pass back up props.
        props.dispatch(startAddExpense(expense))
        props.history.push("/") // Reroutes us to homepage.
      }}
    />
  </div>
);

export default connect()(AddExpensePage);