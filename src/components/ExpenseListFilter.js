import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

import React from "react";
const ExpenseListFilter = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value))
      console.log(e.target.value)
    }}/>
  </div>
);

const mapStateToProps = (state) => { // This lets us determine what aspects of the redux state we want to pass in.
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilter);