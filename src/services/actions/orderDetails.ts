import { setOrder as ApiSetOrder } from '../../utils/Api';
import { clearConstructor } from './constructorIngredients';
import { AppDispatch, AppThunk } from '../types';

// action types
export const SET_ORDER_DETAILS_REQUEST: 'SET_ORDER_DETAILS_REQUEST' =
  'SET_ORDER_DETAILS_REQUEST';
export const SET_ORDER_DETAILS_SUCCESS: 'SET_ORDER_DETAILS_SUCCESS' =
  'SET_ORDER_DETAILS_SUCCESS';
export const SET_ORDER_DETAILS_FAILED: 'SET_ORDER_DETAILS_FAILED' =
  'SET_ORDER_DETAILS_FAILED';
export const CLEAR_ORDER_DETAILS: 'CLEAR_ORDER_DETAILS' = 'CLEAR_ORDER_DETAILS';

// action interface
export interface ISetOrderDetailsRequest {
  readonly type: typeof SET_ORDER_DETAILS_REQUEST;
}
export interface ISetOrderDetailsSuccess {
  readonly type: typeof SET_ORDER_DETAILS_SUCCESS;
  readonly orderId: number;
}
export interface ISetOrderDetailsFailed {
  readonly type: typeof SET_ORDER_DETAILS_FAILED;
}
export interface IClearOrderDetails {
  readonly type: typeof CLEAR_ORDER_DETAILS;
}
export type TOrderDetailsActions =
  | ISetOrderDetailsRequest
  | ISetOrderDetailsSuccess
  | ISetOrderDetailsFailed
  | IClearOrderDetails;

// actions
export function setOrderDetailsRequest(): TOrderDetailsActions {
  return { type: SET_ORDER_DETAILS_REQUEST };
}
export function setOrderDetailsSuccess(orderId: number): TOrderDetailsActions {
  return { type: SET_ORDER_DETAILS_SUCCESS, orderId };
}
export function setOrderDetailsFailed(): TOrderDetailsActions {
  return { type: SET_ORDER_DETAILS_FAILED };
}
export function clearOrderDetails(): TOrderDetailsActions {
  return { type: CLEAR_ORDER_DETAILS };
}

// action thunk
export function setOrder(ingredients: Array<string>): AppThunk {
  return async function (dispatch: AppDispatch) {
    dispatch(setOrderDetailsRequest());

    await ApiSetOrder(ingredients)
      .then((res: any) => {
        dispatch(setOrderDetailsSuccess(res.order.number));
      })
      .then((_) => {
        dispatch(clearConstructor());
      })
      .catch((err) => {
        console.log(err);
        dispatch(setOrderDetailsFailed());
      });
  };
}
