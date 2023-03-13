import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/model/product";


export const ADD_PRODUCT_ACTION = '[cart page] add product';

export const addProduct = createAction(ADD_PRODUCT_ACTION, props<{ product: Product }>());