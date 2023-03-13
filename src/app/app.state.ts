import { cartState } from "./cart/state/cart.state";
import { loginState } from "./components/login-form/state/login.state";

import { loginReducer } from "./components/login-form/state/login.reducer";
import { cartReducer } from "./cart/state/cart.reducer";

export interface AppState{
  login: loginState;
  cart: cartState;
}

export const appReducer = {
  login: loginReducer,
  cart: cartReducer,
};