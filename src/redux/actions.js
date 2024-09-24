export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_TO_CART = 'UPDATE_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeToCart = (item) => ({
  type: REMOVE_TO_CART,
  payload: item,
});

export const updateCart = (item) => ({
  type: UPDATE_TO_CART,
  payload: item,
});
