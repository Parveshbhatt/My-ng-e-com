import { Product } from "src/app/model/product"

export interface cartState{
  cart: Product[];
}


export const initialState: cartState = {
  cart: [],
}