import React from "react";
import { useDispatch } from "react-redux";
import SC from "./styles";
import { setActiveSort } from "../../actions/productListActions";

const ProductSort = () => {
  // const products = useSelector((store) => store.ProductListReducer.products);
  const dispatch = useDispatch();
  const sortOptions = [
    {
      name: 'Popularity',
      value: 'popularity'
    },
    {
      name: 'Price High to Low',
      value: 'priceDesc'
    },
    {
      name: 'Price Low to High',
      value: 'priceAsc'
    },
    {
      name: 'Brand A to Z',
      value: 'brandAsc'
    },
    {
      name: 'Brand Z to A',
      value: 'brandDesc'
    }
  ];

  const applySort = (e) => {
    dispatch(setActiveSort({ sortOption: e.target.value }));
    // dispatch(sortProducts());
  };

  return (
    <SC.Wrapper>
      <select onChange={applySort} name="sort" id="sort-products">
        {sortOptions.map(sortOption => (
          <option key={sortOption.value} value={sortOption.value}>
            {sortOption.name}
          </option>
        ))}
      </select>
    </SC.Wrapper>
  );
};

export default ProductSort;
