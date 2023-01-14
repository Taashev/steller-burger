import { TOrders } from '../types';

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' =
  'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' =
  'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';
export const WS_DISCONNECTED: 'WS_DISCONNECTED' = 'WS_DISCONNECTED';

// action interface
export interface IWSStart {
  readonly type: typeof WS_CONNECTION_START;
}
export interface IWSSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  readonly payload: Event;
}
export interface IWSError {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
}
export interface IWSClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly payload: Event;
}
export interface IWSGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: TOrders;
}
export interface IWSSendMessage {
  readonly type: typeof WS_SEND_MESSAGE;
  readonly payload: any; //! any
}
export interface IWSDisconnected {
  readonly type: typeof WS_DISCONNECTED;
}

export type TWSActions =
  | IWSStart
  | IWSSuccess
  | IWSError
  | IWSClosed
  | IWSGetMessage
  | IWSSendMessage
  | IWSDisconnected;

// actions
export function wsStart(): TWSActions {
  return { type: WS_CONNECTION_START };
}
export function wsSuccess(Event: Event): TWSActions {
  return { type: WS_CONNECTION_SUCCESS, payload: Event };
}
export function wsError(Event: Event): TWSActions {
  return { type: WS_CONNECTION_ERROR, payload: Event };
}
export function wsClosed(Event: Event): TWSActions {
  return { type: WS_CONNECTION_CLOSED, payload: Event };
}
export function wsGetMessage(message: TOrders): TWSActions {
  return { type: WS_GET_MESSAGE, payload: message };
}
export function wsSendMessage(payload: any): TWSActions {
  //! any
  return { type: WS_SEND_MESSAGE, payload };
}
export function wsDisconnected(): TWSActions {
  return { type: WS_DISCONNECTED };
}
