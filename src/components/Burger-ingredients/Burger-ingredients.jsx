import { useMemo } from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import stylesBurgerIngredients from './Burger-ingredients.module.css';
import { Tabs } from '../Tabs/Tabs';
import { ingredientPropTypes } from '../../utils/template-prop-types';
import { IngredientCategory } from '../Ingredient-category/Ingredient-category';

export function BurgerIngredients({ data }) {
	const bun = useMemo(() => data.filter((ingredient) => ingredient.type === 'bun'), [data]);
	const main = useMemo(() => data.filter((ingredient) => ingredient.type === 'main'), [data]);
	const sauce = useMemo(() => data.filter((ingredient) => ingredient.type === 'sauce'), [data]);

	return (
		<section className={`pt-10 ${stylesBurgerIngredients.burgerIngredients}`}>
			<h1 className="text text_type_main-large mb-5">
				Соберите бургер
			</h1>
			<Tabs />
			<SimpleBar style={{height: 'calc(100vh - 350px)'}}>
				<IngredientCategory id="bun" title="Булки" ingredients={bun} />
				<IngredientCategory id="sauce" title="Соусы" ingredients={sauce} />
				<IngredientCategory id="main" title="Начинки" ingredients={main} />
			</SimpleBar>
		</section>
	);
};

BurgerIngredients.propTypes = {
	data: PropTypes.arrayOf(
		ingredientPropTypes.isRequired
	).isRequired,
};
