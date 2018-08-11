import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";

import React from "react";
const ExpenseListFilter = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value))
    }}/>
    <select onChange={(e) => {
      if(e.target.value === "date"){
        props.dispatch(sortByDate());
      } else {
        props.dispatch(sortByAmount());
      }
    }}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => { // This lets us determine what aspects of the redux state we want to pass in.
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilter);