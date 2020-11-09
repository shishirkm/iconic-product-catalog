import React from "react";
import { useDispatch } from "react-redux";
import SC from "./styles";
import { displayProductsBySearch } from "../../actions/productListActions";

const ProductSearch = () => {
  const dispatch = useDispatch();

  const searchProducts = (e) => {
    dispatch(displayProductsBySearch({ searchedStr: e.target.value }));
  };

  return (
    <SC.Wrapper>
      <input
        placeholder="Search by name"
        type="text"
        onChange={searchProducts}
      />
    </SC.Wrapper>
  );
};

export default ProductSearch;
