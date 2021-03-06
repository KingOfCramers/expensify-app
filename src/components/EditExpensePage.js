import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

/// GIT LEARNING TO ROLLBACK
export class EditExpensePage extends React.Component {

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/")
  };

  onRemove = () => {
    this.props.startRemoveExpense({id: this.props.expense.id }) // .then(() => { console.log("This worked!")} ) // You could chain on an action here!
    this.props.history.push("/")
  };
 //
  render(){
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Edit Expense</h2>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
              expense={this.props.expense}
              onSubmit={this.onSubmit}
            />
          <button onClick={this.onRemove} className="button--secondary">Remove</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => { // we have access to the props as the second argument here.
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id ) // the props.match.params comes from the Router (it's part of the URL)
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    startRemoveExpense: (expense) => { return dispatch(startRemoveExpense(expense))}, // This returns a promise (the bottomn line is implicit return)... See the promise return example above.
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);