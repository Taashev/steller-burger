import { ingredientPropTypes } from '../../utils/template-prop-types';
import stylesCard from './Card-ingredient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function CardIngredient({ data }) {
	const { name, image, image_mobile, price, counter } = data;

	return (
		<article className={ stylesCard.card }>
			<h2 className={ stylesCard.card__title }>{ name }</h2>
			{ counter && <Counter count={ counter } size="default" /> }
			<picture>
				<source srcSet={ image_mobile } media="(max-width: 769px)" />
				<img className={ stylesCard.card__img } src={ image } alt={ name } />
			</picture>
			<div className={`mt-1 mb-1 ${stylesCard.card__wrapper}`}>
				<span className={`text text_type_digits-default ${ stylesCard.card__price }`}>{ price }</span>
				<CurrencyIcon type="primary" />
			</div>
			<p className={ stylesCard.card__name }>{ name }</p>
		</article>
	);
};

CardIngredient.propTypes = {
	data: ingredientPropTypes,
};
