import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import stylesApp from './App.module.css';

import { getUser } from '../../services/actions/user';
import { getIngredients } from '../../services/actions/ingredients';
import { Main } from '../Main/Main';
import { Preloader } from '../Preloader/Preloader';
import { AppHeader } from '../App-header/App-header';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { ForgotPassword } from '../pages/Login/forgotPassword/ForgotPassword';
import { ResetPassword } from '../pages/Login/ResetPassword/ResetPassword';
import { PersanalArea } from '../pages/PersanalArea/PersanalArea';

function App() {
	const dispatch = useDispatch();
	const ingredientsRequest = useSelector((store) => store.burgerIngredientsReducer.ingredientsRequest);
	const user = useSelector((store) => store.userReducer.user);

	// component did update user
	useEffect(() => {
		if (!user) {
			dispatch(getUser());
		}
	}, [dispatch, user]);

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
								<Route path="/login" exact>
									<Login />
								</Route>
								<Route path="/register" exact>
									<Register />
								</Route>
								<Route path="/reset-password" exact>
									<ResetPassword />
								</Route>
								<Route path="/forgot-password" exact>
									<ForgotPassword />
								</Route>
								<Route path="/profile">
									<PersanalArea />
								</Route>
								<Route path="/" exact>
									<Main />
								</Route>
							</Switch>
						</>
			}
		</div>
  );
};

export default App;
