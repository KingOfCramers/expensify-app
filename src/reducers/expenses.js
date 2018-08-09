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

export default expensesReducer;