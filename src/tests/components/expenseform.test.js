import React from "react";
import ExpenseForm from "../../components/ExpenseForm";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import toJSON from "enzyme-to-json";
 // const wrapper = shallow(<ExpenseForm />); This cannot be declared as a global variable, because the tests each are adding data to it, which would break subsequent tests that rely on a blank slate.

test("It should render expense form", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("It should render expense form w/ data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
});

test("Should render error for invalid for submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot(); // Check that initial snapshot has no error
  wrapper.find("form").simulate("submit", { preventDefault: () => {} }); // Necessary to prevent error on e.preventDefault();
  expect(wrapper.state("error")).toBe("Please set a description and amount.")
  expect(wrapper).toMatchSnapshot(); // Expect error to render and match snapshot.
});

test("Should set description on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", {  // .at Lets you access the index of the matched elements
    target: {
      value: "This is a new description."
    }
  });
  expect(wrapper.state("description")).toBe("This is a new description.");
  expect(wrapper).toMatchSnapshot();
});

test("Should set note on textarea change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: {
      value: "This is a new note."
    }
  });
  expect(wrapper.state("note")).toBe("This is a new note.");
  expect(wrapper).toMatchSnapshot();
});

test("Should set amount to valid amount", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: {
      value: "24.91"
    }
  });
  expect(wrapper.state("amount")).toBe("24.91");
  expect(wrapper).toMatchSnapshot();
});


test("Should set amount to invalid input", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: {
      value: "12.1222"
    }
  });
  expect(wrapper.state("amount")).toBe("");
});

test("Should call onSubmit with proper data (spy)", () => {
  const onSubmitSpy = jest.fn();

  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>); // The onSubmit function is normally passed into our ExpenseForm as a prop from the EditExpensePage parent component.

  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state('error')).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
    // There is no id, because the onSubmit function here is the prop passed down from the EditExpensePage, which, when called inside the ExpenseForm, is not passed the id ( that is gotten separately from inside the edit expense page, from the state of the app. )
  });
});








