import { useMemo } from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import stylesBurgerIngredients from './Burger-ingredients.module.css';
import { Tabs } from '../Tabs/Tabs';
import { ingredientPropTypes } from '../../utils/template-prop-types';
import { IngredientCategory } from '../Ingredient-category/Ingredient-category';
import { Modal } from '../Modal/Modal';
import { IngredientDetails } from '../IngredientDetails/Ingredient-details';

export function BurgerIngredients({
	data,
	ingredient,
	setIngredient,
	closeIngredientModal,
}) {
	const bun = useMemo(() => data.filter((ingredient) => ingredient.type === 'bun'), [data]);
	const main = useMemo(() => data.filter((ingredient) => ingredient.type === 'main'), [data]);
	const sauce = useMemo(() => data.filter((ingredient) => ingredient.type === 'sauce'), [data]);

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

BurgerIngredients.propTypes = {
	data: PropTypes.arrayOf(
		ingredientPropTypes.isRequired
	).isRequired,
	ingredient: PropTypes.object,
	setIngredient: PropTypes.func,
	closeIngredientModal: PropTypes.func,
};
