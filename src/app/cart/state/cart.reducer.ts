import { createReducer, on } from "@ngrx/store";
import { addProduct, deleteProduct } from "./cart.actions";
import { initialState } from "./cart.state";

const _cartReducer = createReducer(
  initialState,
  on(addProduct, (state, action) => {

    let product = {...action.product};

    return {
      ...state,
      cart: [...state.cart, product],
    }
  }), 
  on(deleteProduct, (state, action)=>{
    const updatedCart = state.cart.filter((product) => {
      return product.id !== action.id;
    })
    return {
      ...state,
      cart : updatedCart,
    }
  })
  );

export function cartReducer(state, action){
  return _cartReducer(state, action);
}