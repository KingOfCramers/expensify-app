import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilter } from "../../components/ExpenseListFilter";
import { filters, filters2 } from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(<ExpenseListFilter
    filters={filters}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    />);});

test("Should render ExpenseListFilter correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseListFilter with new data correctly", () => {
  wrapper.setProps({ // Can set separate props using the setProps method from enzyme
    filters: filters2
  });
  expect(wrapper).toMatchSnapshot();
});

test("Should handle text change", () => {
  wrapper.find("input").simulate("change", { // Call it with this value...
    target: {
      value: "tester"
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith("tester");
  expect(wrapper).toMatchSnapshot();
});

test("Should sort by date", () => {
  wrapper.find("select").simulate("change", {
    target: {
      value: "date"
    }
  })
  expect(sortByDate).toHaveBeenCalled();
});

test("Should sort by amount", () => {
  wrapper.find("select").simulate("change", {
    target: {
      value: "amount"
    }
  })
  expect(sortByAmount).toHaveBeenCalled();
});

test("Should handle date changes", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(9, "years");
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("Should handle date focus changes", () => {
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")("endDate");
  expect(wrapper.state("calendarFocused")).toBe("endDate");
});