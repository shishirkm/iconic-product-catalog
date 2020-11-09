import React from "react";
import { useSelector } from "react-redux";
import ProductListCard from "./ProductListCard";
import SC from "./styles/styles";

const ProductList = () => {
  const products = useSelector(store => store.ProductListReducer.filteredProducts);
  return (
    <SC.Wrapper>
      <SC.List>
        {products && products.map(product => (
          <ProductListCard key={product.sku} product={product} />
        ))}
      </SC.List>
    </SC.Wrapper>
  )
};

export default ProductList;
