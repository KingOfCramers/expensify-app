import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow"; // Shallow rendering is for specific components...
import Header from "../../components/Header";

test("Should render header correctly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  // console.log(renderer.getRenderOutput());

  expect(renderer.getRenderOutput()).toMatchSnapshot();

});