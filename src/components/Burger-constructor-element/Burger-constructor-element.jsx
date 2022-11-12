import { useContext, useEffect } from 'react';
import styles from './Burger-constructor-element.module.css';
import PropTypes from 'prop-types';

import { TotalPriceContext } from '../../contexts/appContext';
import { ingredientPropTypes } from '../../utils/template-prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function BurgerConstructorElement({ ingredient=null, type }) {
	const { totalPriceDispatch } = useContext(TotalPriceContext);

	const { name, price, image } = ingredient;

	// component did mount
	useEffect(() => {
		totalPriceDispatch({ type: 'set', payload: price });

		return () => totalPriceDispatch({ type: 'remove', payload: price });
	// TODO: dependencies array.length === 0
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{
				type
					?
						<ConstructorElement
							type={type}
							isLocked={true}
							text={`${name} ${type === 'top' ? '(верх)' : '(низ)'}`}
							price={price}
							thumbnail={image} />
					:
						<li className={`${styles.constructor__element}`}>
							<DragIcon type="primary" />
							<ConstructorElement
								text={name}
								price={price}
								thumbnail={image} />
						</li>
				}
		</>
	);
};

BurgerConstructorElement.propTypes = {
	ingredient: ingredientPropTypes.isRequired,
	type: PropTypes.string,
};
