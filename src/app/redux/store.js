import { legacy_createStore as createStore } from "redux";

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const initialState = [];

const cartReducer = (state = initialState, action) => {
  action.type === "ADD_TO_CART" ? [...state, action.payload] : state;
};

const store = createStore(cartReducer);

export default store;
