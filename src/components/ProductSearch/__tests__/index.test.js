import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import ProductFilter from "..";
import initializeStore from "../../../initializeStore";

describe("Product Search Component", () => {
    
  let wrapper, mockStore;

  beforeAll(() => {

    mockStore = initializeStore(); 
    wrapper = mount(
      <Provider store={mockStore}>
        <ProductFilter />
      </Provider>
    );
  });

  it("should display a text box", () => {
    expect(wrapper.find("input").length).toBe(1);
  });

  it("should display a placeholder in the text box", () => {
    const mockedChangeEvent = { target: { value: 'Graphic' } };
    wrapper.find("input").simulate('change', mockedChangeEvent);
    expect(mockStore.getState().ProductListReducer.activeSearch).toBe('Graphic');
  });
});
