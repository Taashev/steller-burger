import React from 'react';
import stylesApp from './App.module.css';
import { AppHeader } from '../App-header/App-header';

function App() {
  return (
    <div className={`text text_type_main-default ${ stylesApp.app }`}>
			<AppHeader />
    </div>
  );
};

export default App;
