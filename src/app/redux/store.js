import { legacy_createStore as createStore } from "redux";

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const initialState = [];

const cartReducer = (state = initialState, action) => {
  let cartItems = [...state, action.payload];

  if (action.type === "ADD_TO_CART") {
    return cartItems;
  } else {
    return state;
  }
};

const store = createStore(cartReducer);

export default store;
