import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ProductFilter from "..";
import data from "../../ProductList/__mocks__/data.json";

describe("Product Filter Component", () => {
  let wrapper;
  const initialState = { products: data._embedded.product };
  beforeAll(() => {
    let mockStore = createStore((state = {ProductListReducer: initialState}) => state); 
    wrapper = mount(
      <Provider store={mockStore}>
        <ProductFilter />
      </Provider>
    );
  });

  it("should display a label", () => {
    expect(wrapper.find("div.label").text()).toBe("Category");
  });

  it("should display available categories", () => {
    expect(wrapper.find("div.category").length).toBe(4);
  });

  it("should toggle active category on click", () => {
    wrapper.find("div.category").first().simulate("click");
    expect(wrapper.find("div.category .active").length).toBe(1);
    wrapper.find("div.category").first().simulate("click");
    expect(wrapper.find("div.category .active").length).toBe(0);
  });
});
