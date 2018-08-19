import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expensesTotal";
import numeral from "numeral";

export const ExpenseSummary = ({ count, total }) => { // Export for testing purposes
  return (
    <div>
      <h3>You're viewing {count} expenses with a value of {numeral(total/100).format("$0,0.00")}.</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: selectExpenses(state.expenses, state.filters).length,
    total: getExpensesTotal(selectExpenses(state.expenses, state.filters)),
  }
};

export default connect(mapStateToProps)(ExpenseSummary);