import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd/dist/hooks';
import stylesCard from './Card-ingredient.module.css';

import { getIngredientDetails } from '../../services/actions/ingredientDetails';
import { ingredientPropTypes } from '../../utils/template-prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function CardIngredient({ ingredient }) {
	// props
	const { name, image, image_mobile, price } = ingredient;

	// dispatch
	const dispatch = useDispatch();

	// store
	const { constructorBun, constructorIngredients } = useSelector((store) => store.constructorReducer);

	// dnd drag
	const [, dragRef] = useDrag({
		type: 'ingredient',
		item: ingredient,
	});

	// counter
  const counter = useMemo(() => {
		return ingredient.type !== 'bun'
			? constructorIngredients.filter(({ingredient: i}) => i._id === ingredient._id).length
			: constructorBun?._id === ingredient._id
			? 2
			: 0
	}, [constructorBun, constructorIngredients, ingredient])

	// handle ingredient
	function handleIngredient() {
		dispatch(getIngredientDetails(ingredient));
	};

	return (
		<article className={stylesCard.card} onClick={handleIngredient} ref={dragRef}>
			<h2 className={stylesCard.card__title}>{name}</h2>
			{ counter !== 0 && <Counter count={counter} size="default" /> }
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
