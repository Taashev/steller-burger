import PropTypes from 'prop-types';

import { CardIngredient } from '../Card-ingredient/Card-ingredient';
import { ingredientPropTypes } from '../../../utils/template-prop-types';
import stylesIngredients from './Ingredient-category.module.css';

export function IngredientCategory({ title, ingredients, id, refCatefory }) {
	return (
		<div className={`${stylesIngredients.ingredients}`} id={id} ref={refCatefory}>
			<h2 className={`text_type_main-medium mb-6 ${stylesIngredients.title}`}>
				{title}
			</h2>
			<div className={`pl-4 pr-4 pb-10 ${stylesIngredients.wrapper}`}>
				{ingredients.map(
					(ingredient) => 
						<CardIngredient
							key={ingredient._id}
							ingredient={ingredient} />
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
	id: PropTypes.string,
	refCatefory: PropTypes.object,
};
