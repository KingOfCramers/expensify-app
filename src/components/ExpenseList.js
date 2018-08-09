import React from "react";
import { connect } from "react-redux";

const ExpenseList = (props) => (
  <div>
    <h2>ExpenseList</h2>
    {props.expenses.length}
  </div>
);

const ConnectedExpenseList = connect((state) => { // This lets us determine what aspects of the redux state we want to pass in.
  return {
    expenses: state.expenses
  }
})(ExpenseList); // "connect" is a higher order component.

export default ConnectedExpenseList; // This is renamed in our dashboard.