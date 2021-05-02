import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Post from "./Post";

configure({ adapter: new Adapter() });

describe("Post", () => {
  it("includes three paragraphs", () => {
    const wrapper = shallow(<Post />);
    expect(wrapper.find("p").length).toEqual(1);
  });
});
