import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
      type: "REMOVE_EXPENSE",
      id: "123abc"
  });
});

test('Should setup edit expense action object', () => {
  const action = editExpense("123abc", { note: "Changed note." });
  expect(action).toEqual({
      type: "EDIT_EXPENSE",
      id: "123abc",
      updates: { note: "Changed note." }
  });
});

test("Should setup addExpense action object", () => {
  const action = addExpense(expenses[0]); // This will have ID generated from firebase.
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[0]
  });
});

// test("Should setup addExpense action object w/ default values", () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       id: expect.any(String),
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: expect.any(Number)
//     }
//   });
// });