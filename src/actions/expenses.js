import uuid from "uuid";
import moment from "moment";
import database from "../firebase/firebase";

// Action Generators

  // REMOVE_EXPENSE action generator
   export const removeExpense = ({ id } = {}) => ({
      type: "REMOVE_EXPENSE",
      id
    });

   export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).remove()
        .then(() => {
          dispatch(removeExpense({ id }));
        });
    };
   };


   // EDIT_EXPENSE action generator
    export const editExpense = (id, updates) => ({
       type: "EDIT_EXPENSE",
       id,
       updates
     });

   export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).update(updates)
        .then(() => {
          dispatch(editExpense(id, updates))
        })
    }
   }

   // ADD_EXPENSE action generator
    export const addExpense = (expense) => ({
       type: "ADD_EXPENSE",
       expense
     });

   export const startAddExpense = ({ description = "", note = "", amount = 0, createdAt = moment().valueOf() } = {}) => {
    return (dispatch, getState) => { // Thunk returns an object dispatch and getState!
      const expense = { description, note, amount, createdAt };
      const uid = getState().auth.uid; // Access to the user id!

      return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => { // Returning for testing purposes...
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
      return (dispatch, getState) => { // THUNK!
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once("value") // return this promise to activate our then call inside the main app page...
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