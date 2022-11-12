import stylesIngredients from './Ingredient-category.module.css';
import PropTypes from 'prop-types';

import { CardIngredient } from '../Card-ingredient/Card-ingredient';
import { ingredientPropTypes } from '../../utils/template-prop-types';

export function IngredientCategory({ title, ingredients, id=null, setIngredient }) {
	return (
		<div className={`${stylesIngredients.ingredients}`} id={id}>
			<h2 className={`text_type_main-medium mb-6 ${stylesIngredients.title}`}>
				{title}
			</h2>
			<div className={`pl-4 pr-4 pb-10 ${stylesIngredients.wrapper}`}>
				{ingredients.map(
					(ingredient) => 
						<CardIngredient
							key={ingredient._id}
							ingredient={ingredient}
							counter={null}
							setIngredient={setIngredient} />
				)}
			</div>
		</div>
	);
};

IngredientCategory.propTypes = {
	title: PropTypes.string.isRequired,
	ingredients: PropTypes.arrayOf(
		ingredientPropTypes.isRequired
	).isRequired,
	id: PropTypes.string.isRequired,
	setIngredient: PropTypes.func,
};
