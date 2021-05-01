import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import HomePage from "./HomePage";

configure({ adapter: new Adapter() });

describe("HomePage", () => {
  it("renders correctly", () => {
    shallow(<HomePage />);
  });
});
