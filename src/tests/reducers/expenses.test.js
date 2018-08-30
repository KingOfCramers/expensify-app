import expensesReducer from "../../reducers/expenses";
import uuid from "uuid";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("Should set default expense array", () => {
  const action = { type: "@@INIT" }
  const state = expensesReducer([], action)
  expect(state).toEqual([])
});

test("Should add an expense", () => {

  const uniqueId = uuid();
  const uniqueMoment = moment().valueOf();

  const action = {
      type: "ADD_EXPENSE",
      expense: {
        id: uniqueId,
        description: "This is a description",
        note: "This is a note",
        amount: 100,
        createdAt: uniqueMoment
      }
    };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("Should remove an expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[0].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).not.toContain(expenses[0]);
});

test("Should not remove an expense by id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: {
      note: "This note was modified"
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe("This note was modified");
});

test("Should not edit an expense if the expense was not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates: {
      note: "This note was modified"
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should set starting expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[0]]
  };
  const state = expensesReducer(expenses, action); // state begins with all expenses, for testing purposes
  expect(state).toEqual([expenses[0]]);

});