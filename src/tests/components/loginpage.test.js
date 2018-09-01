import React from "react";
import { shallow } from "enzyme";
import LoginPage from "../../components/Login";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

test("Should render login page", () => {
  const store = createMockStore({});
  const wrapper = shallow(<LoginPage store={store} />);
  expect(wrapper).toMatchSnapshot();
});