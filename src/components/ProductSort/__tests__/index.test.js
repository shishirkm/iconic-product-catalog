import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import ProductSort from "..";
import initializeStore from "../../../initializeStore";

describe("Product Sort Component", () => {
    
  let wrapper, mockStore;

  beforeAll(() => {
    mockStore = initializeStore(); 
    wrapper = mount(
      <Provider store={mockStore}>
        <ProductSort />
      </Provider>
    );
  });

  it("should have 5 sort options", () => {
    expect(wrapper.find("select option").length).toBe(5);
  });

  it("should set the selected sort option", () => {
    const mockedChangeEvent = { target: { value: 'brandDesc' } };
    wrapper.find("select").simulate('change', mockedChangeEvent);
    expect(mockStore.getState().ProductListReducer.activeSort).toBe('brandDesc');
  });
});
