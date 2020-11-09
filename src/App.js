import React, { useEffect } from 'react';
import Header from './components/Header';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './reducers/productListReducer';
import ProductList from './components/ProductList';
import ProductFilter from './components/ProductFilter';
import SC from './AppStyles';
import ProductSearch from './components/ProductSearch';
import ProductSort from './components/ProductSort';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts);
  }, []);
  
  return (
    <SC.Wrapper className="App">
      <Header />
      <SC.Row>
        <SC.Filter>
          <ProductFilter />
        </SC.Filter>
        <SC.ProductList>
          <SC.SortSearchWrapper>
            <ProductSearch />
            <ProductSort />
          </SC.SortSearchWrapper>
          <ProductList />
        </SC.ProductList>
      </SC.Row>
    </SC.Wrapper>
  );
}

export default App;
