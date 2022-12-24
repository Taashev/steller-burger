import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd/dist/hooks';

import { IIngredient } from '../../../services/types';
import { ILocationState } from '../../../services/types/locationState';
import { getIngredientDetails } from '../../../services/actions/ingredientDetails';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import stylesCard from './Card-ingredient.module.css';

interface ICardIngredient {
	ingredient: IIngredient;
};

export function CardIngredient({ ingredient }: ICardIngredient): JSX.Element {
	// props
	const { name, image, image_mobile, price, _id } = ingredient;

	// location
	const location = useLocation<ILocationState>();

	// dispatch
	const dispatch = useDispatch();

	// store
	const {
		constructorBun,
		constructorIngredients,
	} = useSelector((store: any): {
		constructorBun: IIngredient;
		constructorIngredients: [{ ingredient: IIngredient; id: string; }];
	} => store.constructorReducer);

	// dnd drag
	const [, dragRef] = useDrag({
		type: 'ingredient',
		item: ingredient,
	});

	// counter
  const counter = useMemo(() => {
		return ingredient.type !== 'bun'
			? constructorIngredients.filter(({ ingredient: i }) => i._id === ingredient._id).length
			: constructorBun?._id === ingredient._id
			? 2
			: 0
	}, [constructorBun, constructorIngredients, ingredient]);

	// handle ingredient
	function handleIngredient(): void {
		dispatch(getIngredientDetails(ingredient));
	};

	return (
		<Link
			className={stylesCard.link}
			to={{
				pathname: `/ingredients/${_id}`,
				state: { background: location },
			}}
		>
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
		</Link>
	);
};
