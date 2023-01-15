import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './services/reducers/rootReducer';
import { socketMiddleware } from './services/middleware/socketMiddleware';

import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import 'simplebar-react/dist/simplebar.min.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import './index.css';
import { getCookie } from './utils/cookie';

import {
  WS_ORDER_CONNECTION_START,
  WS_ORDER_SEND_MESSAGE,
  WS_ORDER_DISCONNECTED,
  wsOrdersSuccess,
  wsOrdersError,
  wsOrdersClosed,
  wsOrdersGetMessage,
} from './services/actions/wsOrdersAction';

import {
  WS_HISTORY_ORDERS_CONNECTION_START,
  WS_HISTORY_ORDERS_SEND_MESSAGE,
  WS_HISTORY_ORDERS_DISCONNECTED,
  wsHistoryOrdersSuccess,
  wsHistoryOrdersError,
  wsHistoryOrdersClosed,
  wsHistoryOrdersGetMessage,
} from './services/actions/wsHistoryOrdersAction';

// token
const token = getCookie('accessToken');

// ws orders
const wsOrders = socketMiddleware(
  'wss://norma.nomoreparties.space/orders/all',
  {
    wsInit: WS_ORDER_CONNECTION_START,
    wsSendMessage: WS_ORDER_SEND_MESSAGE,
    wsDisconnected: WS_ORDER_DISCONNECTED,
    onClose: wsOrdersClosed,
    onOpen: wsOrdersSuccess,
    onError: wsOrdersError,
    onMessage: wsOrdersGetMessage,
  }
);

// ws history orders
const wsHistoryOrders = socketMiddleware(
  `wss://norma.nomoreparties.space/orders?token=${token}`,
  {
    wsInit: WS_HISTORY_ORDERS_CONNECTION_START,
    wsSendMessage: WS_HISTORY_ORDERS_SEND_MESSAGE,
    wsDisconnected: WS_HISTORY_ORDERS_DISCONNECTED,
    onClose: wsHistoryOrdersClosed,
    onOpen: wsHistoryOrdersSuccess,
    onError: wsHistoryOrdersError,
    onMessage: wsHistoryOrdersGetMessage,
  }
);

// compose enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// enhancer
const enhancer = composeEnhancers(
  applyMiddleware(thunk, wsOrders, wsHistoryOrders)
);

// store
export const store = createStore(rootReducer, enhancer);

// root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// render
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
