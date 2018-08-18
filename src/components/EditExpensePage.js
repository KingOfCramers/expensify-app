import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => { // replaced by spy inside test file.
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push("/")
      }}/>
      <button onClick={() => {
        props.dispatch(removeExpense({id: props.expense.id }))
        props.history.push("/")
      }}>Remove</button>
    </div>
  )
};

const mapStateToProps = (state, props) => { // we have access to the props as the second argument here.
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id ) // the props.match.params comes from the Router (it's part of the URL)
  }
};

export default connect(mapStateToProps)(EditExpensePage);