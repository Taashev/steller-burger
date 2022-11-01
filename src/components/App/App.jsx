import React from 'react';
import stylesApp from './App.module.css';
import { AppHeader } from '../App-header/App-header';
import { Main } from '../Main/Main';

function App() {
  return (
    <div className={`text text_type_main-default ${ stylesApp.app }`}>
			<AppHeader />
			<Main />
    </div>
  );
};

export default App;
