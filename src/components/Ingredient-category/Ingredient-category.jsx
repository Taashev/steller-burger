import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/template-prop-types';
import stylesIngredients from './Ingredient-category.module.css';
import { CardIngredient } from '../Card-ingredient/Card-ingredient';

export function IngredientCategory({ title, ingredients, id=null, openIngredientDetails, setIngredient }) {
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
							data={ingredient}
							counter={1}
							openIngredientDetails={openIngredientDetails}
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
};