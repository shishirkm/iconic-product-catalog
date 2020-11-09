import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ProductList from "..";
import formatPrice from "../../../helpers/formatPrice";
import data from '../__mocks__/data.json';

describe("Product List Component", () => {
    
  let wrapper;
  const initialState = { products: data._embedded.product, filteredProducts: data._embedded.product };
  const product = data._embedded.product[0];
  beforeAll(() => {
    let mockStore = createStore((state = {ProductListReducer: initialState}) => state); 
    wrapper = mount(
      <Provider store={mockStore}>
        <ProductList />
      </Provider>
    );
  });

  it("should display all items in store", () => {
    expect(wrapper.find("div.product-list-card").length).toBe(data._embedded.product.length);
  });

  it("should display product name", () => {
    expect(wrapper.find("div.product-list-card .name").first().text()).toBe(product.name);
  });

  it("should display product brand", () => {
    expect(wrapper.find("div.product-list-card .brand").first().text()).toBe(product._embedded.brand.name);
  });

  it("should display product price", () => {
    expect(wrapper.find("div.product-list-card .price").first().text()).toBe(formatPrice(product.price));
  });

  it("should display product image", () => {
    expect(wrapper.find("div.product-list-card .image").first().prop('src')).toBe(product._embedded.images[0].thumbnail);
  });

  it("should display product messaging", () => {
    expect(wrapper.find("div.product-list-card .messaging").first().text()).toBe(product.messaging.marketing[0].short);
  });
});
