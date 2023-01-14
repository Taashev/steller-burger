import { TWSActions } from '../actions/wsAction';
import { TOrders } from '../types';

import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from '../actions/wsAction';

export type TWSState = {
  wsConnected: boolean;
  message: TOrders | null;
  error?: Event | undefined;
};

const initialState: TWSState = {
  wsConnected: false,
  message: null,
  error: undefined,
};

export function WSReducer(state = initialState, action: TWSActions): TWSState {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        error: undefined,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        error: action.payload,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        error: undefined,
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        message: action.payload,
        error: undefined,
      };
    default:
      return state;
  }
}
