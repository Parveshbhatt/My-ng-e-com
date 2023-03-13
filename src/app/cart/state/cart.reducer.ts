import { createReducer, on } from "@ngrx/store";
import { addProduct } from "./cart.actions";
import { initialState } from "./cart.state";

const _cartReducer = createReducer(
  initialState,
  on(addProduct, (state, action) => {

    let product = {...action.product};

    return {
      ...state,
      cart: [...state.cart, product],
    }
  })
  );

export function cartReducer(state, action){
  return _cartReducer(state, action);
}