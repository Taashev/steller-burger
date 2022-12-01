import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import stylesApp from './App.module.css';

import { getIngredients } from '../../services/actions/ingredients';
import { Main } from '../Main/Main';
import { Preloader } from '../Preloader/Preloader';
import { AppHeader } from '../App-header/App-header';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';

function App() {
	const dispatch = useDispatch();
	const ingredientsRequest = useSelector((store) => store.burgerIngredientsReducer.ingredientsRequest);

	// component did mount
	useEffect(() => {
		dispatch(getIngredients());
	// TODO: dependencies array.length === 0
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

  return (
		<div className={`text text_type_main-default ${stylesApp.app}`}>
			{
				ingredientsRequest
					? <Preloader width={50} height={50} />
					: <>
							<AppHeader />
							<Switch>
								<Route path="/" exact>
									<Main />
								</Route>
								<Route path="/register" exact>
									<Register />
								</Route>
								<Route patch="/login" exact>
									<Login />
								</Route>
							</Switch>
						</>
			}
		</div>
  );
};

export default App;
