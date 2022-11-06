import { useState, useEffect } from 'react';
import stylesApp from './App.module.css';
import { getIngredients } from '../../utils/Api';

import { AppHeader } from '../App-header/App-header';
import { Main } from '../Main/Main';

import { Modal } from '../Modal/Modal';
import { IngredientDetails } from '../IngredientDetails/Ingredient-details';
import { OrderDetails } from '../OrderDetails/Order-details';

function App() {
	const [ingredients, setIngredients] = useState([]);
	const [ingredient, setIngredient] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isOrderDetailsModal, setIsOrderDetailsModal] = useState(false);
	const [isIngredientsDetailsModal, setIsIngredientsDetailsModal] = useState(false);

	function openOrderDetails() {
		setIsOrderDetailsModal(true);
	};

	function openIngredientDetails() {
		setIsIngredientsDetailsModal(true);
	};

	function closeModal() {
		setIsOrderDetailsModal(false);
		setIsIngredientsDetailsModal(false);
		setIngredient({});
	};

	function closeOverlayModal(e) {
		if (e.target === e.currentTarget) closeModal();
	};

	function closeEscModale(e) {
		if (e.key === 'Escape') closeModal();
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
								openOrderDetails={openOrderDetails}
								openIngredientDetails={openIngredientDetails}
								setIngredient={setIngredient} />
							{
								isIngredientsDetailsModal &&
								<Modal onClose={closeModal} onCloseOverlay={closeOverlayModal} onCloseEsc={closeEscModale}>
									<IngredientDetails data={ingredient} />
								</Modal>
							}
							{
								isOrderDetailsModal &&
								<Modal onClose={closeModal} onCloseOverlay={closeOverlayModal}>
									<OrderDetails />
								</Modal>
							}
						</>
			}
    </div>
  );
};

export default App;
