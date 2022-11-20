import stylesCard from './Card-ingredient.module.css';
import { useDispatch } from 'react-redux';
import { GET_INGREDIENT } from '../../services/actions/ingredientDetails';
import { ingredientPropTypes } from '../../utils/template-prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function CardIngredient({ ingredient, counter }) {
	const { name, image, image_mobile, price } = ingredient;
	
	const dispatch = useDispatch();

	// handle ingredient
	function handleIngredient() {
		// dispatch({
		// 	type: GET_INGREDIENT,
		// 	ingredientDetails: ingredient,
		// });

		//!
		ingredient.type === 'bun'
			? dispatch({
					type: 'ADD_CONSTRUCTOR_BUN',
					bun: ingredient,
				})
			: dispatch({
					type: 'ADD_CONSTRUCTOR_INGREDIENT',
					ingredient: ingredient,
				})
	};

	return (
		<article className={stylesCard.card} onClick={handleIngredient}>
			<h2 className={stylesCard.card__title}>{name}</h2>
			{ counter && <Counter count={counter} size="default" /> }
			<picture>
				<source srcSet={image_mobile} media="(max-width: 769px)" />
				<img className={stylesCard.card__img} src={image} alt={name} />
			</picture>
			<div className={`mt-1 mb-1 ${stylesCard.card__wrapper}`}>
				<span className={`text text_type_digits-default ${ stylesCard.card__price }`}>{price}</span>
				<CurrencyIcon type="primary" />
			</div>
			<p className={stylesCard.card__name}>{name}</p>
		</article>
	);
};

CardIngredient.propTypes = {
	ingredient: ingredientPropTypes.isRequired,
};
