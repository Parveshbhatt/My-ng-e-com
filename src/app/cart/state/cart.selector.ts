import { createFeatureSelector, createSelector } from "@ngrx/store";
import { cartState } from "./cart.state";


const getCartState = createFeatureSelector<cartState>('cart');

export const getCart = createSelector(getCartState, (state) =>{
  return state.cart;
});

