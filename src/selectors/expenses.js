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

export default getVisibleExpenses;