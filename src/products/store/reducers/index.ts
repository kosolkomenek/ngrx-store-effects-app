import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";
import { PizzaState, reducer } from "./pizza.reducer";
import * as fromPizza from "./pizza.reducer";
export interface ProductsState {
  pizzas: PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: reducer,
};

export const getProductState = createFeatureSelector<ProductsState>("products");

// Pizzas state
export const getPizzaState = createSelector(
  getProductState,
  (state: ProductsState) => state.pizzas
);

export const getAllPizzas = createSelector(getPizzaState, fromPizza.getPizzas);
export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizza.getPizzasLoaded
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizza.getPizzasLoading
);
