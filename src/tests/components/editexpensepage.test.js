import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, history, wrapper;
beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() }
  wrapper = shallow(<EditExpensePage
    startEditExpense={startEditExpense}
    startRemoveExpense={startRemoveExpense}
    history={history}
    expense={expenses[1]}
    />
  );
});

test("Should render EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]); // call onSubmit function
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/")
});

test("Should handle onRemove", () => {
  wrapper.find("button").prop("onClick")();
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[1].id
  });
  expect(history.push).toHaveBeenLastCalledWith("/");
});