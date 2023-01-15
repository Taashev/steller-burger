import { TOrders } from '../types';

export const WS_ORDER_CONNECTION_START: 'WS_ORDER_CONNECTION_START' =
  'WS_ORDER_CONNECTION_START';
export const WS_ORDER_CONNECTION_SUCCESS: 'WS_ORDER_CONNECTION_SUCCESS' =
  'WS_ORDER_CONNECTION_SUCCESS';
export const WS_ORDER_CONNECTION_ERROR: 'WS_ORDER_CONNECTION_ERROR' =
  'WS_ORDER_CONNECTION_ERROR';
export const WS_ORDER_CONNECTION_CLOSED: 'WS_ORDER_CONNECTION_CLOSED' =
  'WS_ORDER_CONNECTION_CLOSED';
export const WS_ORDER_GET_MESSAGE: 'WS_ORDER_GET_MESSAGE' =
  'WS_ORDER_GET_MESSAGE';
export const WS_ORDER_SEND_MESSAGE: 'WS_ORDER_SEND_MESSAGE' =
  'WS_ORDER_SEND_MESSAGE';
export const WS_ORDER_DISCONNECTED: 'WS_ORDER_DISCONNECTED' =
  'WS_ORDER_DISCONNECTED';

// action interface
export interface IWSStart {
  readonly type: typeof WS_ORDER_CONNECTION_START;
}
export interface IWSSuccess {
  readonly type: typeof WS_ORDER_CONNECTION_SUCCESS;
  readonly payload: Event;
}
export interface IWSError {
  readonly type: typeof WS_ORDER_CONNECTION_ERROR;
  readonly payload: Event;
}
export interface IWSClosed {
  readonly type: typeof WS_ORDER_CONNECTION_CLOSED;
  readonly payload: Event;
}
export interface IWSGetMessage {
  readonly type: typeof WS_ORDER_GET_MESSAGE;
  readonly payload: TOrders;
}
export interface IWSSendMessage {
  readonly type: typeof WS_ORDER_SEND_MESSAGE;
  readonly payload: any;
}
export interface IWSDisconnected {
  readonly type: typeof WS_ORDER_DISCONNECTED;
}

export type TWSOrdersActions =
  | IWSStart
  | IWSSuccess
  | IWSError
  | IWSClosed
  | IWSGetMessage
  | IWSSendMessage
  | IWSDisconnected;

// actions
export function wsOrdersStart(): TWSOrdersActions {
  return { type: WS_ORDER_CONNECTION_START };
}
export function wsOrdersSuccess(Event: Event): TWSOrdersActions {
  return { type: WS_ORDER_CONNECTION_SUCCESS, payload: Event };
}
export function wsOrdersError(Event: Event): TWSOrdersActions {
  return { type: WS_ORDER_CONNECTION_ERROR, payload: Event };
}
export function wsOrdersClosed(Event: Event): TWSOrdersActions {
  return { type: WS_ORDER_CONNECTION_CLOSED, payload: Event };
}
export function wsOrdersGetMessage(message: TOrders): TWSOrdersActions {
  return { type: WS_ORDER_GET_MESSAGE, payload: message };
}
export function wsOrdersSendMessage(payload: any): TWSOrdersActions {
  return { type: WS_ORDER_SEND_MESSAGE, payload };
}
export function wsOrdersDisconnected(): TWSOrdersActions {
  return { type: WS_ORDER_DISCONNECTED };
}
