import uuid from "uuid";
import moment from "moment";
import database from "../firebase/firebase";

// Action Generators
  // ADD_EXPENSE action generator
   export const addExpense = (expense) => ({
      type: "ADD_EXPENSE",
      expense
    });
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
    });

   // This is made possible by our Redux middleware, thunk.
   // Thunk allows us to "dispatch" functions. The function connects to firebase, and then returns our action...

   export const startAddExpense = ({ description = "", note = "", amount = 0, createdAt = moment().valueOf() } = {}) => {
    return (dispatch) => { // The
      const expense = { description, note, amount, createdAt };
      database.ref("expenses").push(expense).then((ref) => {
         dispatch(addExpense({
          id: ref.key, // from firebase...
          ...expense
         }));
      });
    };
   };