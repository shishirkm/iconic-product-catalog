import { setProductList, types } from "../actions/productListActions";
export const initialState = { products: [], filteredProducts: [], activeSort: '', activeSearch: '' };

const _sortProducts = (a, b, sortOption) => {
  switch(sortOption){
    case 'priceAsc': return a.price - b.price
    case 'priceDesc': return b.price - a.price
    case 'brandAsc': return a._embedded.brand.name.toLowerCase().localeCompare(b._embedded.brand.name.toLowerCase())
    case 'brandDesc': return b._embedded.brand.name.toLowerCase().localeCompare(a._embedded.brand.name.toLowerCase())
    default: return a - b
  }
}
export const productListReducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case types.SET_PRODUCT_LIST: 
      return { ...state, products: data, filteredProducts: data }
    case types.DISPLAY_PRODUCT_BY_CATEGORY:{
      return { 
        ...state, 
        filteredProducts: state.products.filter((product) =>
          product.categories_translated.includes(data.category)
        )  
      };
    }
    case types.DISPLAY_PRODUCT_BY_SEARCH:
      return { 
        ...state,
        activeSearch: data.searchedStr,
        filteredProducts: state.products.filter((product) =>
          product.name.toLowerCase().includes(data.searchedStr.toLowerCase())
        )  
      };
    case types.SET_ACTIVE_SORT: {
      const filteredProductsCopy = [...state.filteredProducts];
      const filteredProductsSorted = filteredProductsCopy.sort((a, b) => _sortProducts(a, b, data.sortOption));
      return { 
        ...state,
        filteredProducts: filteredProductsSorted,
        activeSort: data.sortOption  
      };
    }
    default:
      return state;
  }
};

export async function fetchProducts(dispatch) {
  const response = await fetch('https://eve.theiconic.com.au/catalog/products?gender=female&page=1&page_size=35&sort=popularity')
  .then(res => res.json())
  .then(data => data);
  dispatch(setProductList(response._embedded.product));
}