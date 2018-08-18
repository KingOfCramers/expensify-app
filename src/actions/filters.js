// SET_TEXT_FILTER action generator
  export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
  });
// SORT_BY_DATE action generator
  export const sortByDate = () => ({
    type: "SORT_BY_DATE"
  })
// SORT_BY_AMOUNT action generator
  export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
  })
// SET_START_DATE action generator
  export const setStartDate = (startDate = undefined) => ({
    type: "SET_START_DATE",
    startDate
  })
// SET_END_DATE action generator
  export const setEndDate = (endDate = undefined) => ({
    type: "SET_END_DATE",
    endDate
  })