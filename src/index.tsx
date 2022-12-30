import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App/App';
import '@ya.praktikum/react-developer-burger-ui-components';
import { rootReducer } from './services/reducers/rootReducer';

import './index.css';
import 'simplebar-react/dist/simplebar.min.css';
import reportWebVitals from './reportWebVitals';

// compose enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// enhancer
const enhancer = composeEnhancers(applyMiddleware(thunk));

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
