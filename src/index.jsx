import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import 'simplebar-react/dist/simplebar.min.css';
import { rootReducer } from './services/reducers/rootReducer'
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

// compose enhancers
const composeEnhancers = typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 

// enhancer
const enhancer = composeEnhancers(applyMiddleware(thunk));

// store
const store = createStore(rootReducer, enhancer);

// root
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// render
root.render(
  <React.StrictMode>
		<Provider store={store}>
    	<App />
		</Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
