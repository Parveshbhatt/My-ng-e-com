export interface themeState{
  theme: string;
}

export const initialState: themeState = {
  theme: localStorage.getItem('theme-color')
}