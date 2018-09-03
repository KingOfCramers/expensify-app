import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expensesTotal";
import numeral from "numeral";
import { Link } from "react-router-dom";

export const ExpenseSummary = ({ count, total }) => { // Export for testing purposes
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">You're viewing <span>{count}</span> expenses with a value of <span>{numeral(total/100).format("$0,0.00")}</span>.</h1>
        <div className="page-header__actions">
          <Link to="/create" className="button">Add Expense</Link>
        </div>
      </div>
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