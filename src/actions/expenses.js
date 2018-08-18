import uuid from "uuid";
import moment from "moment";

// Action Generators
  // ADD_EXPENSE action generator
   export const addExpense = ({ description = "", note = "", amount = 0, createdAt = moment().valueOf() } = {}) => ({
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
      id
    })
  // EDIT_EXPENSE action generator
   export const editExpense = (id, updates) => ({
      type: "EDIT_EXPENSE",
      id,
      updates
    })