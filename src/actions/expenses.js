import uuid from "uuid";

// Action Generators
  // ADD_EXPENSE action generator
   export const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0 } = {}) => ({
      type: "ADD_EXPENSE",
      expense: {
        id: uuid(), // uuid is temporary alternative for id, will come from mongodb later
        description,
        note,
        amount,
        createdAt
      }
    })
  // REMOVE_EXPENSE action generator
   export const removeExpense = ({ id } = {}) => ({
      type: "REMOVE_EXPENSE",
      expense: {
        id
      }
    })
  // EDIT_EXPENSE action generator
   export const editExpense = (id, updates) => ({
      type: "EDIT_EXPENSE",
      id,
      updates
    })