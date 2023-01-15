import { TWSHistoryOrdersActions } from '../actions/wsHistoryOrdersAction';
import { TOrders } from '../types';

import {
  WS_HISTORY_ORDERS_CONNECTION_SUCCESS,
  WS_HISTORY_ORDERS_CONNECTION_ERROR,
  WS_HISTORY_ORDERS_CONNECTION_CLOSED,
  WS_HISTORY_ORDERS_GET_MESSAGE,
} from '../actions/wsHistoryOrdersAction';

export type TWSHistoryOrdersState = {
  wsConnected: boolean;
  message: TOrders | null;
  error?: Event | undefined;
};

const initialState: TWSHistoryOrdersState = {
  wsConnected: false,
  message: null,
  error: undefined,
};

export function WSHistoryOrdersReducer(
  state = initialState,
  action: TWSHistoryOrdersActions
): TWSHistoryOrdersState {
  switch (action.type) {
    case WS_HISTORY_ORDERS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        error: undefined,
      };
    case WS_HISTORY_ORDERS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        error: action.payload,
      };
    case WS_HISTORY_ORDERS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        error: undefined,
      };
    case WS_HISTORY_ORDERS_GET_MESSAGE:
      return {
        ...state,
        message: action.payload,
        error: undefined,
      };
    default:
      return state;
  }
}
