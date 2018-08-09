import { createStore, combineReducers } from "redux";
import uuid from "uuid";

/* const demoState = {
    expenses: [{
      id: 'soidfapsuid',
      description: 'January Rent',
      note: 'This was the final payment for that address.',
      amount: 54500,
      createdAt: 0
    }],
    filters: {
      text: 'rent',
      sortBy: 'date', // date or amount
      startDate: undefined,
      endDate: undefined
    }}; */

// Action Generators
  // ADD_EXPENSE action generator
    const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0 } = {}) => ({
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
    const removeExpense = ({ id } = {}) => ({
      type: "REMOVE_EXPENSE",
      expense: {
        id
      }
    })
  // EDIT_EXPENSE action generator
    const editExpense = (id, updates) => ({
      type: "EDIT_EXPENSE",
      id,
      updates
    })
  // SET_TEXT_FILTER action generator
    const setTextFilter = (text = "") => ({
      type: "SET_TEXT_FILTER",
      text
    });
  // SORT_BY_DATE action generator
    const sortByDate = () => ({
          type: "SORT_BY_DATE"
    })
  // SORT_BY_AMOUNT action generator
    const sortByAmount = () => ({
      type: "SORT_BY_AMOUNT"
    })
  // SET_START_DATE action generator
    const setStartDate = (date = undefined) => ({
      type: "SET_START_DATE",
      date
    })
  // SET_END_DATE action generator
    const setEndDate = (date = undefined) => ({
      type: "SET_END_DATE",
      date
    })

// Get visible expenses
  const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; // If undefined, return true (don't filter) OR if expense created after startDate, return true (don't filter)
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; // Same as above...
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) || expense.note.toLowerCase().includes(text.toLowerCase()) // If an empty string, return true (don't filter) OR if note/description includes text, don't filter (no need for text === '' condition, all strings will have it)
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if(sortBy === "date"){
        return a.createdAt > b.createdAt ? -1 : 1; // If "a" is more recent, return -1 (which indexes "a" first), otherwise, index "b" first.
      } else if (sortBy === "amount"){
        return a.amount > b.amount ? -1 : 1;
      } else {
        return 0; // Else, do not sort.
      }
    });
  }
// Expenses Reducer

  const expensesReducerDefaultState = []; // Empty array...
  const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
      case "ADD_EXPENSE" :
        return [...state, action.expense ]; // Don't use push!
      case "REMOVE_EXPENSE" :
        return state.filter((expense) => {
          return expense.id !== action.expense.id;
        });
      case "EDIT_EXPENSE" :
        return state.map((expense) => {
          if(expense.id === action.id){
            return {
              ...expense,
              ...action.updates // Override any properties from update
            };
          } else {
            return expense;
          }
        })
      default:
        return state;
    }
  };

// Filters Reducer
  const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  ;
  const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
      case "SET_TEXT_FILTER" :
          return {
            ...state,
            text: action.text
          }
      case "SORT_BY_DATE" :
        return {
          ...state,
          sortBy: "date"
        }
      case "SORT_BY_AMOUNT" :
        return {
          ...state,
          sortBy: "amount"
        }
      case "SET_START_DATE" :
        return {
          ...state,
          startDate: action.date
        }
      case "SET_END_DATE" :
        return {
          ...state,
          endDate: action.date
        }
      default:
        return state;
    }
  };
// Store creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

   const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -20}));
   const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 500, createdAt: 20}));
   const expenseThree = store.dispatch(addExpense({description: 'Remove ME!', amount: 900}));

  const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log("Visible Expenses: \n", visibleExpenses, "\n Filters: \n", state.filters);
  })

// Test events
  //  Dispatches automatically return the action generator... // console.log(expenseOne);
  //  store.dispatch(removeExpense({ id: expenseThree.expense.id }));
  //  store.dispatch(editExpense(expenseOne.expense.id, { description: "Not my rent!" }));
  //  store.dispatch(setTextFilter(""));
  //  store.dispatch(sortByDate());
  //  store.dispatch(sortByAmount());
  //  store.dispatch(setStartDate(3));
  //  store.dispatch(setStartDate());
  //  store.dispatch(setEndDate(9));
  //  store.dispatch(setEndDate());
  //  unsubscribe();