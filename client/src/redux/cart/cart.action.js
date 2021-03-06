import { CartActionTypes } from "./cart.type";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
export const addAllItem = (items) => ({
  type: CartActionTypes.ADD_ALL,
  payload: items,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEMS_FROM_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearCartStart = () => ({
  type: CartActionTypes.CLEAR_CART_START,
});

export const clearCartSuccess = () => ({
  type: CartActionTypes.CLEAR_CART_SUCCESS,
});

export const clearCartFailure = (error) => ({
  type: CartActionTypes.CLEAR_CART_FAILURE,
  payload: error
});
