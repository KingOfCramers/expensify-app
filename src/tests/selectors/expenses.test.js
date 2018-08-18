import selectExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("Should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[1], expenses[0] ]); // An array, w/ more recent expense comes first.

});

test("Should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([ expenses[2] , expenses[1] ])

});

test("Should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    endDate: moment(0),
    startDate: undefined
  };

  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([ expenses[1], expenses[0] ])

});

test("Should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    endDate: undefined,
    startDate: undefined
  };

  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([ expenses[2], expenses[1], expenses[0] ])

});

test("Should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    endDate: undefined,
    startDate: undefined
  };

  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ])

});