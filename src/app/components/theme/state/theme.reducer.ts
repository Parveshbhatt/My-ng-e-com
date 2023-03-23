import { createReducer, on } from '@ngrx/store';
import { themeDark, themeLight } from './theme.actions';
import { initialState } from './theme.state';


const _themeReducer = createReducer(
  initialState,
  on(themeLight, (state) => {
    return{
      ...state,
      theme: 'theme-light',
    };
  }), on(themeDark, (state) => {
    return{
      ...state,
      theme: 'theme-dark',
    };
  })
  )

export function themeReducer(state, action) {
  return _themeReducer(state, action);
}