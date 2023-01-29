import { TWSOrdersActions } from '../../actions/wsOrdersAction/wsOrdersAction';
import { TOrders } from '../../types';

import {
  WS_ORDER_CONNECTION_SUCCESS,
  WS_ORDER_CONNECTION_ERROR,
  WS_ORDER_CONNECTION_CLOSED,
  WS_ORDER_GET_MESSAGE,
} from '../../actions/wsOrdersAction/wsOrdersAction';

export type TWSOrdersState = {
  wsConnected: boolean;
  message: TOrders | null;
  error?: Event | undefined;
};

const initialState: TWSOrdersState = {
  wsConnected: false,
  message: null,
  error: undefined,
};

export function WSOrdersReducer(state = initialState, action: TWSOrdersActions): TWSOrdersState {
  switch (action.type) {
    case WS_ORDER_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        error: undefined,
      };
    case WS_ORDER_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        error: action.payload,
      };
    case WS_ORDER_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        error: undefined,
      };
    case WS_ORDER_GET_MESSAGE:
      return {
        ...state,
        message: action.payload,
        error: undefined,
      };
    default:
      return state;
  }
}
