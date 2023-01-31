// action types
export const SET_TOTAL_PRICE: 'SET_TOTAL_PRICE' = 'SET_TOTAL_PRICE';
export const REMOVE_TOTAL_PRICE: 'REMOVE_TOTAL_PRICE' = 'REMOVE_TOTAL_PRICE';

// action interface
export interface ISetTotalPrice {
  readonly type: typeof SET_TOTAL_PRICE;
  readonly payload: number;
}
export interface IRemoveTotalPrice {
  readonly type: typeof REMOVE_TOTAL_PRICE;
  readonly payload: number;
}
export type TTotalPriceActions = ISetTotalPrice | IRemoveTotalPrice;

// actions
export function setTotalPrice(price: number): TTotalPriceActions {
  return { type: SET_TOTAL_PRICE, payload: price };
}
export function removeTotalPrice(price: number): TTotalPriceActions {
  return { type: REMOVE_TOTAL_PRICE, payload: price };
}
