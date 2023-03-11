import { createReducer, on } from '@ngrx/store';
import { loginFalse, loginTrue } from './login.actions';
import { initialState } from './login.state';

const _loginReducer = createReducer(
  initialState,
  on(loginTrue, (state) => {
    return{
      ...state,
      login: true,
    };
  }), on(loginFalse, (state) => {
    return{
      ...state,
      login: false,
    };
  })
  )

export function loginReducer(state, action) {
  return _loginReducer(state, action);
}