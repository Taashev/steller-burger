import { TOrders } from '../../types';

export const WS_HISTORY_ORDERS_CONNECTION_START: 'WS_HISTORY_ORDERS_CONNECTION_START' =
  'WS_HISTORY_ORDERS_CONNECTION_START';
export const WS_HISTORY_ORDERS_CONNECTION_SUCCESS: 'WS_HISTORY_ORDERS_CONNECTION_SUCCESS' =
  'WS_HISTORY_ORDERS_CONNECTION_SUCCESS';
export const WS_HISTORY_ORDERS_CONNECTION_ERROR: 'WS_HISTORY_ORDERS_CONNECTION_ERROR' =
  'WS_HISTORY_ORDERS_CONNECTION_ERROR';
export const WS_HISTORY_ORDERS_CONNECTION_CLOSED: 'WS_HISTORY_ORDERS_CONNECTION_CLOSED' =
  'WS_HISTORY_ORDERS_CONNECTION_CLOSED';
export const WS_HISTORY_ORDERS_GET_MESSAGE: 'WS_HISTORY_ORDERS_GET_MESSAGE' =
  'WS_HISTORY_ORDERS_GET_MESSAGE';
export const WS_HISTORY_ORDERS_SEND_MESSAGE: 'WS_HISTORY_ORDERS_SEND_MESSAGE' =
  'WS_HISTORY_ORDERS_SEND_MESSAGE';
export const WS_HISTORY_ORDERS_DISCONNECTED: 'WS_HISTORY_ORDERS_DISCONNECTED' =
  'WS_HISTORY_ORDERS_DISCONNECTED';

// action interface
export interface IWSStart {
  readonly type: typeof WS_HISTORY_ORDERS_CONNECTION_START;
}
export interface IWSSuccess {
  readonly type: typeof WS_HISTORY_ORDERS_CONNECTION_SUCCESS;
  readonly payload: Event;
}
export interface IWSError {
  readonly type: typeof WS_HISTORY_ORDERS_CONNECTION_ERROR;
  readonly payload: Event;
}
export interface IWSClosed {
  readonly type: typeof WS_HISTORY_ORDERS_CONNECTION_CLOSED;
  readonly payload: Event;
}
export interface IWSGetMessage {
  readonly type: typeof WS_HISTORY_ORDERS_GET_MESSAGE;
  readonly payload: TOrders;
}
export interface IWSSendMessage {
  readonly type: typeof WS_HISTORY_ORDERS_SEND_MESSAGE;
  readonly payload: any;
}
export interface IWSDisconnected {
  readonly type: typeof WS_HISTORY_ORDERS_DISCONNECTED;
}
export type TWSHistoryOrdersActions =
  | IWSStart
  | IWSSuccess
  | IWSError
  | IWSClosed
  | IWSGetMessage
  | IWSSendMessage
  | IWSDisconnected;

// actions
export function wsHistoryOrdersStart(): TWSHistoryOrdersActions {
  return { type: WS_HISTORY_ORDERS_CONNECTION_START };
}
export function wsHistoryOrdersSuccess(Event: Event): TWSHistoryOrdersActions {
  return { type: WS_HISTORY_ORDERS_CONNECTION_SUCCESS, payload: Event };
}
export function wsHistoryOrdersError(Event: Event): TWSHistoryOrdersActions {
  return { type: WS_HISTORY_ORDERS_CONNECTION_ERROR, payload: Event };
}
export function wsHistoryOrdersClosed(Event: Event): TWSHistoryOrdersActions {
  return { type: 'WS_HISTORY_ORDERS_CONNECTION_CLOSED', payload: Event };
}
export function wsHistoryOrdersGetMessage(
  message: TOrders
): TWSHistoryOrdersActions {
  return { type: WS_HISTORY_ORDERS_GET_MESSAGE, payload: message };
}
export function wsHistoryOrdersSendMessage(
  payload: any
): TWSHistoryOrdersActions {
  return { type: WS_HISTORY_ORDERS_SEND_MESSAGE, payload };
}
export function wsHistoryOrdersDisconnected(): TWSHistoryOrdersActions {
  return { type: WS_HISTORY_ORDERS_DISCONNECTED };
}
