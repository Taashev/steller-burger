import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Burger-constructor-element.module.css';

import { SET, REMOVE } from '../../services/actions/totalPrice';
import { REMOVE_CONSTRUCTOR_INGREDIENT } from '../../services/actions/constructorIngredients';
import { ingredientPropTypes } from '../../utils/template-prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function BurgerConstructorElement({ ingredient, type }) {
	const dispatch = useDispatch();
	const { name, price, image, _id } = ingredient;

	// component did update price
	useEffect(() => {
		dispatch({ type: SET, payload: price });

		return () => dispatch({ type: REMOVE, payload: price });
	}, [dispatch, price]);

	// remove ingredient
	function removeIngredient() {
		dispatch({
			type: REMOVE_CONSTRUCTOR_INGREDIENT,
			id: _id,
		});
	};

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
								thumbnail={image}
								handleClose={removeIngredient} />
						</li>
				}
		</>
	);
};

BurgerConstructorElement.propTypes = {
	ingredient: ingredientPropTypes.isRequired,
	type: PropTypes.string,
};
