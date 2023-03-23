import { cartState } from "./cart/state/cart.state";
import { loginState } from "./components/login-form/state/login.state";

import { loginReducer } from "./components/login-form/state/login.reducer";
import { cartReducer } from "./cart/state/cart.reducer";
import { themeState } from "./components/theme/state/theme.state";
import { themeReducer } from "./components/theme/state/theme.reducer";

export interface AppState{
  login: loginState;
  cart: cartState;
  theme: themeState;
}

export const appReducer = {
  login: loginReducer,
  cart: cartReducer,
  theme: themeReducer,
};