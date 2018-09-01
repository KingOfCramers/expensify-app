import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage"; // Make sure to get named exports to avoid problems w/ connect.
import thunk from 'redux-thunk';

test("Should render login page", () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test("Should call startLogin on button click", () => {
  const login = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={login}/>);
  wrapper.find("button").simulate("click");
  expect(login).toHaveBeenCalled();
});