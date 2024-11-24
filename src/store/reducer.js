import { CART_ACTIONS } from "./actions";

export const cartReducer = (state, action) => {
  if (action.type === CART_ACTIONS.ADD_TO_CART) {
    const updatedCart = { ...state };
    const id = action.payload;

    if (Object.keys(state).find((k) => k === id.toString())) {
      updatedCart[id] = updatedCart[id] + 1;
    } else {
      updatedCart[id] = 1;
    }

    return updatedCart;
  }

  if (action.type === CART_ACTIONS.REMOVE_FROM_CART) {
    const updatedCart = { ...state };
    const id = action.payload;

    const existing = Object.keys(state).find((k) => k === id.toString());
    if (!!existing) {
      if (updatedCart[id] === 1) {
        delete updatedCart[id];
      } else {
        updatedCart[id] = updatedCart[id] - 1;
      }
    }

    return updatedCart;
  }

  if (action.type === CART_ACTIONS.CLEAR_CART) {
    return {};
  }
  return state;
};
