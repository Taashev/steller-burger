import { useState, useContext, useMemo } from 'react';
import stylesBurgerIngredients from './Burger-ingredients.module.css';
import SimpleBar from 'simplebar-react';

import { Tabs } from '../Tabs/Tabs';
import { Modal } from '../Modal/Modal';
import { IngredientDetails } from '../IngredientDetails/Ingredient-details';
import { IngredientCategory } from '../Ingredient-category/Ingredient-category';
import { IngredientsContext } from '../../contexts/appContext';

export function BurgerIngredients() {
	const { ingredients } = useContext(IngredientsContext);

	const [ ingredient, setIngredient ] = useState(null);

	const bun = useMemo(() => ingredients.filter((ingredient) => ingredient.type === 'bun'), [ingredients]);
	const main = useMemo(() => ingredients.filter((ingredient) => ingredient.type === 'main'), [ingredients]);
	const sauce = useMemo(() => ingredients.filter((ingredient) => ingredient.type === 'sauce'), [ingredients]);

	// close ingredient modal
	function closeIngredientModal() { setIngredient(null) };

	return (
		<>
			<section className={`pt-10 ${stylesBurgerIngredients.burgerIngredients}`}>
				<h1 className="text text_type_main-large mb-5">
					Соберите бургер
				</h1>
				<Tabs />
				<SimpleBar className={`${stylesBurgerIngredients.simplebar}`}>
					<IngredientCategory 
						id="bun"
						title="Булки"
						ingredients={bun}
						setIngredient={setIngredient} />
					<IngredientCategory 
						id="sauce"
						title="Соусы"
						ingredients={sauce}
						setIngredient={setIngredient} />
					<IngredientCategory 
						id="main"
						title="Начинки"
						ingredients={main}
						setIngredient={setIngredient} />
				</SimpleBar>
			</section>
			{
				ingredient &&
					<Modal  onClose={closeIngredientModal} title={"Детали ингредиента"}>
						<IngredientDetails ingredient={ingredient} />
					</Modal>
			}
		</>
	);
};
