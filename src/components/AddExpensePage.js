import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense); // Passing this in as a prop (using the mapdispatch to props ) to allow for easier testing, rather than using global dispatch function.
    this.props.history.push("/")
  }
  render(){
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Add Expense</h2>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => { // We have access to dispatch thanks to react-redux. The goal is to simplify testing, by
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  }
};
export default connect(undefined, mapDispatchToProps)(AddExpensePage); // Second argument is matchDispatchToProps