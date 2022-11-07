import { useState, useEffect } from 'react';
import stylesApp from './App.module.css';
import { getIngredients } from '../../utils/Api';

import { AppHeader } from '../App-header/App-header';
import { Main } from '../Main/Main';

function App() {
	const [ingredients, setIngredients] = useState([]);
	const [ingredient, setIngredient] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isOrderDetailsModal, setIsOrderDetailsModal] = useState(false);

	function openOrderDetails() {
		setIsOrderDetailsModal(true);
	};

	function closeOrderModal() {
		setIsOrderDetailsModal(false);
	};
	
	function closeIngredientModal() {
		setIngredient(null);
	}

	useEffect(() => {
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
						<div>Загрузка...</div>
					:
						<>
							<AppHeader />
							<Main
								data={ingredients}
								ingredient={ingredient}
								openOrderDetails={openOrderDetails}
								closeIngredientModal={closeIngredientModal}
								setIngredient={setIngredient}
								isOrderDetailsModal={isOrderDetailsModal}
								closeOrderModal={closeOrderModal} />
						</>
			}
    </div>
  );
};

export default App;
