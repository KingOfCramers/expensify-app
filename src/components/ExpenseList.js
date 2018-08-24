import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
// Unconnected //
export const ExpenseList = (props) => ( // Exporting for testing...
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense}/>
      })
    )}
  </div>
);

const mapStateToProps = (state) => { // This lets us determine what aspects of the redux state we want to pass in.
  return {
    expenses: selectExpenses(state.expenses, state.filters) // Use the values on our state object to calculate the visible expenses.
  }
}

export default connect(mapStateToProps)(ExpenseList); // "connect" is a higher order component.