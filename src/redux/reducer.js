import { SET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_CART } from "./actions";

const initialState = { products: [], cart: [] };

export default function rootReducer(state = initialState, action) {
  switch(action.type){
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case ADD_TO_CART: {
      const existing = state.cart.find(item => item.id === action.payload.id);
      if(existing){
        return { ...state, cart: state.cart.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item) };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
    }

    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case INCREASE_QUANTITY:
      return { ...state, cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item) };

    case DECREASE_QUANTITY:
      return { ...state, cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0) };

    case CLEAR_CART:
      return { ...state, cart: [] };
      
    default:
      return state;
  }
}
