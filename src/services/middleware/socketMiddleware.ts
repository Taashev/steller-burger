import type { Middleware, MiddlewareAPI } from 'redux';
import type { AppActions, AppDispatch, RootState } from '../types';

export function socketMiddleware(wsUrl: string, wsActions: any): Middleware { //! any
  return function (store: MiddlewareAPI<AppDispatch, RootState>) {
    const {
      wsInit,
      wsSendMessage,
      wsDisconnected,
      onOpen,
      onClose,
      onError,
      onMessage,
    } = wsActions;

    let socket: WebSocket | null;

    return function (next) {
      return function (action) {
        const { dispatch } = store;
        const { type } = action;

        if (type === wsInit) {
          socket = new WebSocket(wsUrl);
        }

        if (socket) {
          socket.onopen = (Event) => {
            dispatch(onOpen(Event));
          };

          socket.onerror = (Event) => {
            dispatch(onError(Event));
          };

          socket.onmessage = (Event) => {
            const { data } = Event;
            dispatch(onMessage(JSON.parse(data)));
          };

          socket.onclose = (Event) => {
            dispatch(onClose(Event));
          };

          if (type === wsSendMessage) {
            socket.send(JSON.stringify(action.payload));
          }

          if (type === wsDisconnected) {
            socket.close(1000, 'CLOSE_NORMAL');
          }
        }

        next(action);
      };
    };
  } as Middleware;
}
