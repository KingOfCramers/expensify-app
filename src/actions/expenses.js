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
    });

   export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        return Promise.resolve("data")
    }; // Accepts an ID, returns a function with dispatch as the argument.
       // That function is returned a promise.
       // Therefore, to call startRemoveExpense we need to write: startRemoveExpense({data: data})().then(() => { do something else...})
   };


  // EDIT_EXPENSE action generator
   export const editExpense = (id, updates) => ({
      type: "EDIT_EXPENSE",
      id,
      updates
    });

   // This is made possible by our Redux middleware, thunk.
   // Thunk allows us to "dispatch" functions. The function connects to firebase, and then returns our action...

   export const startAddExpense = ({ description = "", note = "", amount = 0, createdAt = moment().valueOf() } = {}) => {
    return (dispatch) => { // Return a function, with dispatch as the argument...
      const expense = { description, note, amount, createdAt };

      return database.ref("expenses").push(expense).then((ref) => { // Returning for testing purposes...
         dispatch(addExpense({
          id: ref.key, // from firebase...
          ...expense
         }));

      });
    };
   };

  // SET_EXPENSE action generator

    export const setExpenses = (expenses) => ({
      type: 'SET_EXPENSES',
      expenses
    });

    export const startSetExpenses = () => {
      return (dispatch) => {
        return database.ref("expenses").once("value") // return this promise to activate our then call inside the main app page...
          .then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
              expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
              });
            });
            dispatch(setExpenses(expenses));
          });
      };
    };