import { combineReducers, legacy_createStore as createStore } from "redux";

// Action Types
const ADD_TO_CART = "ADD_TO_CART";
const TOGGLE_THEME = "TOGGLE_THEME";

// Action Creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

const initialCartState = [];
const initialThemeState = {
  mode: "light",
};

const cartReducer = (state = initialCartState, action) => {
  if (action.type === "ADD_TO_CART") {
    return [...state, action.payload];
  } else {
    return state;
  }
};

const themeReducer = (state = initialThemeState, action) => {
  if (action.type === "TOGGLE_THEME") {
    return {
      ...state,
      mode: state.mode === "light" ? "dark" : "light",
    };
  } else {
    return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
