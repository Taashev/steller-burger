import { useState, useEffect } from 'react';
import stylesApp from './App.module.css';
import { getIngredients } from '../../utils/Api';
import { AppHeader } from '../App-header/App-header';
import { Main } from '../Main/Main';

import { IngredientDetails } from '../IngredientDetails/Ingredient-details';
import { OrderDetails } from '../OrderDetails/Order-details';

function App() {
	const [ingredients, setIngredients] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isOrderDetailsModal, setIsOrderDetailsModal] = useState(false);
	const [isIngredientsDetailsModal, setIsIngredientsDetailsModal] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		getIngredients()
			.then((res) => setIngredients(res.data))
			.catch((err) => console.error(err))
			.finally(() => setIsLoading(false))
	}, []);

  return (
    <div className={`text text_type_main-default ${ stylesApp.app }`}>
			{
				isLoading
					? 
						<div className="loading">Загрузка...</div>
					:
						<>
							<AppHeader />
							<Main data={ingredients} />
						</>
			}
			{isIngredientsDetailsModal && <IngredientDetails />}
			{isOrderDetailsModal && <OrderDetails />}
    </div>
  );
};

export default App;
