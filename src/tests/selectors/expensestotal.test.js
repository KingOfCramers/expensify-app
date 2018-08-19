import getExpensesTotal from "../../selectors/expensesTotal";
import expenses from "../fixtures/expenses";

test("getExpensesTotal should add up expenses of multiple", () => {
  expect(getExpensesTotal(expenses)).toBe(6000);
});

test("getExpensesTotal should return 0 w/ no expenses", () => {
  expect(getExpensesTotal([])).toBe(0);
});

test("getExpensesTotal should return value of single expense", () => {
  expect(getExpensesTotal([expenses[0]])).toBe(1000);
});