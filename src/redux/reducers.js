import { ADD_TO_CART, REMOVE_TO_CART } from './actions';

const initialState = {
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
  case ADD_TO_CART:
    return {
      cart: [...state.cart, ...action.payload],
    };
  case REMOVE_TO_CART:
    return {
      cart: state.cart.filter((item) => item.idCart !== action.payload),
    };
  default:
    return state;
  }
};

export default rootReducer;
