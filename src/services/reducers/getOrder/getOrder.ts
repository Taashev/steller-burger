import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  GET_ORDER_CLEAR,
  TGetOrderActions,
} from '../../actions/getOrder/getOrder';

import { TOrder } from '../../types';

type TGetOrderState = {
  getOrderRequest: boolean;
  getOrderSuccess: boolean;
  getOrderFailed: boolean;
  order: TOrder | null;
};

const initialState: TGetOrderState = {
  getOrderRequest: false,
  getOrderSuccess: false,
  getOrderFailed: false,
  order: null,
};

export function getOrderReducer(
  state = initialState,
  action: TGetOrderActions
): TGetOrderState {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        ...state,
        getOrderRequest: true,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        getOrderRequest: false,
        getOrderSuccess: true,
        getOrderFailed: false,
        order: action.payload,
      };
    case GET_ORDER_FAILED:
      return {
        ...state,
        getOrderRequest: false,
        getOrderSuccess: false,
        getOrderFailed: true,
      };
    case GET_ORDER_CLEAR:
      return {
        ...state,
        getOrderRequest: false,
        getOrderSuccess: false,
        getOrderFailed: false,
        order: null,
      };
    default:
      return state;
  }
}
