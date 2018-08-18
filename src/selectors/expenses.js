import moment from "moment";

// Get visible expenses (takes in current Redux state.expenses and state.filters)
// Returns an array of visible expenses...
  const selectExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const createdAtMoment = moment(expense.createdAt); // .createdAt is raw number, will output moment object w/ correct date.
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true; // if startDate filter prop exists, check to see if it (it's a moment) is same or before the createdAt prop from this expense. If it is, return false (don't filter out expense)
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;  // Same as above...
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

export default selectExpenses;