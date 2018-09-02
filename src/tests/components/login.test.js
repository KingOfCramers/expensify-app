import React from "react";
import { shallow } from "enzyme";
import { Login } from "../../components/Login";
import expenses from "../fixtures/expenses";

test("Should render login page", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

