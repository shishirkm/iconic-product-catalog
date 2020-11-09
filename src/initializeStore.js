import thunk from "redux-thunk";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { productListReducer } = require("./reducers/productListReducer");

const reducer = combineReducers({
  ProductListReducer: productListReducer,
});

const initializeStore = () => {
    const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  const { createLogger } = require("redux-logger");
  middlewares.push(
    createLogger({ collapsed: true, duration: true, diff: true })
  );
}
const store = createStore(reducer, applyMiddleware(...middlewares));
return store;
}

export default initializeStore;
