import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {

  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/")
  };

  onRemove = () => {
    this.props.removeExpense({id: this.props.expense.id })
    this.props.history.push("/")
  };

  render(){
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
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
    removeExpense: (expense) => dispatch(removeExpense(expense)),
    editExpense: (id, expense) => dispatch(editExpense(id, expense))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);