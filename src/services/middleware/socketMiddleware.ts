import {
  WS_CONNECTION_START,
  WS_SEND_MESSAGE,
  WS_DISCONNECTED,
  wsSuccess,
  wsError,
  wsClosed,
  wsGetMessage,
} from '../actions/wsAction';

import type { Middleware, MiddlewareAPI } from 'redux';
import type { AppActions, AppDispatch, RootState } from '../types';

export function socketMiddleware(wsUrl: string): Middleware {
  return function (store: MiddlewareAPI<AppDispatch, RootState>) {
    let socket: WebSocket | null;

    return function (next) {
      return function (action: AppActions) {
        const { dispatch } = store;
        const { type } = action;

        if (type === WS_CONNECTION_START) {
          socket = new WebSocket(wsUrl);
        }

        if (socket) {
          socket.onopen = (Event) => {
            //! dispatch({ type: WS_CONNECTION_SUCCESS, payload: e });
            dispatch(wsSuccess(Event));
          };

          socket.onerror = (Event) => {
            //! dispatch({ type: WS_CONNECTION_ERROR, payload: e });
            dispatch(wsError(Event));
          };

          socket.onmessage = (Event) => {
            const { data } = Event;
            //! dispatch({ type: WS_GET_MESSAGE, payload: data });
            dispatch(wsGetMessage(JSON.parse(data)));
          };

          socket.onclose = (Event) => {
            //! dispatch({ type: WS_CONNECTION_CLOSED, payload: e });
            dispatch(wsClosed(Event));
          };

          if (type === WS_SEND_MESSAGE) {
            const { payload: message } = action;
            socket.send(JSON.stringify(message));
          }

          if (type === WS_DISCONNECTED) {
            socket.close(1000, 'CLOSE_NORMAL');
          }
        }

        next(action);
      };
    };
  } as Middleware;
}
