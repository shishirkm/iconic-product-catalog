import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayProductsByCategory } from "../../actions/productListActions";
import SC from "./styles";

const ProductFilter = () => {
  const products = useSelector((store) => store.ProductListReducer.products);
  const [categories, setCategories] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const categories = products.map((el) => {
      return el.categories_translated.split("|")[0];
    });
    setCategories([...new Set(categories)]);
  }, [products]);

  const filter = (category) => {
    const categoryDecision = activeCategory === category ? "" : category;
    dispatch(displayProductsByCategory({
      category: categoryDecision
    }));
    setActiveCategory(categoryDecision);
  };

  return (
    <SC.Wrapper>
      <SC.Label className="label">Category</SC.Label>
      {categories &&
        categories.map((category, idx) => (
          <SC.FilterItem
            key={idx}
            className="category"
            onClick={() => filter(category)}
          >
            <span className={category === activeCategory ? 'active' : ''}>
              {category}
            </span>
          </SC.FilterItem>
        ))}
    </SC.Wrapper>
  );
};

export default ProductFilter;
