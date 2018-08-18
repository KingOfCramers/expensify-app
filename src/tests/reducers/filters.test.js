import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("Should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: '@@INIT' }) // This action is dispatched upon store initialization and returns our default state.
  expect(state).toEqual({ // Default object.
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  })
});

test("Should change state to sort by amount", () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state).toEqual({
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  })
});

test("Should change state to sort by date (from amount sort)", () => {

  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")};

  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe("date");
});

test("Should set text filter", () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: "abc123"
  });

  expect(state).toEqual({
    text: "abc123",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  })
});

test("Should set startDate filter", () => {

  const startDate = moment()
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate
  });
  expect(state.startDate).toEqual(startDate);
});

test("Should set endDate filter", () => {

  const endDate = moment()
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate
  });

  expect(state.endDate).toEqual(endDate);

});