import { AppDispatch, AppThunk, TOrder } from '../types';
import { getOrder as apiGetOrder } from '../../utils/Api';

export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';
export const GET_ORDER_CLEAR: 'GET_ORDER_CLEAR' = 'GET_ORDER_CLEAR';

// action interface
interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}
interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: TOrder;
}
interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED;
}
interface IGetOrderClear {
  readonly type: typeof GET_ORDER_CLEAR;
}
export type TGetOrderActions =
  | IGetOrderRequest
  | IGetOrderSuccess
  | IGetOrderFailed
  | IGetOrderClear;

// actions
export function getOrderRequest(): TGetOrderActions {
  return { type: GET_ORDER_REQUEST };
}
export function getOrderSuccess(order: TOrder): TGetOrderActions {
  return { type: GET_ORDER_SUCCESS, payload: order };
}
export function getOrderFailed(): TGetOrderActions {
  return { type: GET_ORDER_FAILED };
}
export function getOrderClear(): TGetOrderActions {
  return { type: GET_ORDER_CLEAR };
}

// thunk
export function getOrder(number: string): AppThunk {
  return async function (dispatch: AppDispatch) {
    dispatch(getOrderRequest());

    try {
      const res: any = await apiGetOrder(number);
      const order = res.orders[0];
      dispatch(getOrderSuccess(order));
    } catch (err) {
      console.log(err);
      dispatch(getOrderFailed());
    }
  };
}
