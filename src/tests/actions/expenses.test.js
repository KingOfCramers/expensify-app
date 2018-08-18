import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

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
  const expenseData = {
    description: "Rent",
    note: "This is the note",
    amount: 1000,
    createdAt: 56789
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })

});

test("Should setup addExpense action object w/ default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: expect.any(Number)
    }
  });
});