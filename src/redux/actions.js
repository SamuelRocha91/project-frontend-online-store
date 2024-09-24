export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
