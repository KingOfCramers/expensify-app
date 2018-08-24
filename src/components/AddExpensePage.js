import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense); // Passing this in as a prop (using the mapdispatch to props ) to allow for easier testing, rather than using global dispatch function.
    this.props.history.push("/")
  }
  render(){
    return (
      <div>
        <h2>Add Expense</h2>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => { // We have access to dispatch thanks to react-redux. The goal is to simplify testing, by
  return {
    addExpense: (expense) => dispatch(addExpense(expense))
  }
};
export default connect(undefined, mapDispatchToProps)(AddExpensePage); // Second argument is matchDispatchToProps