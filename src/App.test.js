import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import initializeStore from "./initializeStore";

it("renders without crashing", () => {
  const mockStore = initializeStore();

  const wrapper = mount(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
