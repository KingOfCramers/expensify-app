import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary"; // Importing "plain" function w/ no access to redux store.
import expenses from "../fixtures/expenses";

test("Should summarize single expense", () => {
  const wrapper = shallow(<ExpenseSummary total={1000} count={1}/>);
  expect(wrapper).toMatchSnapshot();
});

test("Should summarize multiple expenses", () => {
  const wrapper = shallow(<ExpenseSummary total={132213} count={34}/>);
  expect(wrapper).toMatchSnapshot();
});

test("Should output 0 for no expenses ", () => {
  const wrapper = shallow(<ExpenseSummary total={0} count={0}/>);
  expect(wrapper).toMatchSnapshot();
});