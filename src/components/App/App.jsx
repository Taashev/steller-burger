import stylesApp from './App.module.css';
import { AppHeader } from '../App-header/App-header';
import { Main } from '../Main/Main';
import { data } from '../../utils/data';

function App() {
  return (
    <div className={`text text_type_main-default ${ stylesApp.app }`}>
			<AppHeader />
			<Main data={ data } />
    </div>
  );
};

export default App;
