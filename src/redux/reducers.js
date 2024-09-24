import { ADD_TO_CART, REMOVE_TO_CART } from './actions';

const initialState = {
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_TO_CART:
    return {
      cart: [...state.cart, action.payload],
    };
  case REMOVE_TO_CART:
    return {
      cart: cart.filter((item) => item.idCart !== action.payload.id),
    };
  default:
    return state;
  }
};

export default rootReducer;
