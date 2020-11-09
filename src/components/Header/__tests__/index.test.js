import { shallow } from "enzyme";
import React from "react";
import Header from "..";

it("renders without crashing", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find(".header-text").text()).toBe("THE ICONIC");
});
