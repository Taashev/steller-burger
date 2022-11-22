import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import stylesApp from './App.module.css';

import { getIngredients } from '../../services/actions/ingredients';
import { Main } from '../Main/Main';
import { Preloader } from '../Preloader/Preloader';
import { AppHeader } from '../App-header/App-header';

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
							<Main />
						</>
			}
		</div>
  );
};

export default App;
