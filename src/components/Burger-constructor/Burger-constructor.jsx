import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useDrop } from 'react-dnd/dist/hooks';
import { v1 } from 'uuid';
import SimpleBar from 'simplebar-react';
import styles from './Burger-constructor.module.css';

import { ADD_CONSTRUCTOR_BUN, ADD_CONSTRUCTOR_INGREDIENT, UPDATE_CONSTRUCTOR_INGREDIENT } 
	from '../../services/actions/constructorIngredients';
import { setOrder, CLEAR_ORDER_DETAILS } from '../../services/actions/orderDetails';
import { Modal } from '../Modal/Modal';
import { OrderDetails } from '../OrderDetails/Order-details';
import { CurrencyIcon, Button } 
	from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerConstructorElement } 
	from '../Burger-constructor-element/Burger-constructor-element';

export function BurgerConstructor() {
	// dispatch
	const dispatch = useDispatch();

	// store
	const {
		constructorBun,
		constructorIngredients,
	} = useSelector((store) => store.constructorReducer);
	const orderId = useSelector((store) => store.orderDetailsReducer.orderId);
	const totalPrice = useSelector((store) => store.totalPriceReducer.totalPrice);

	// dnd drop ingredient
	const [, dropIngredientRef] = useDrop({
		accept: 'ingredient',
		drop(ingredient) {
			ingredient.type === 'bun'
				? dispatch({ type: ADD_CONSTRUCTOR_BUN, bun: ingredient })
				: dispatch({ type: ADD_CONSTRUCTOR_INGREDIENT, ingredient: { ingredient, id: v1() } });
		},
	});

	const handlerUpdateConstructor = useCallback((dragIndex, hoverIndex) => {
      const dragCard = constructorIngredients[dragIndex];
      const newCards = [...constructorIngredients];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);

      dispatch({ type: UPDATE_CONSTRUCTOR_INGREDIENT, constructorIngredients: newCards });
    }, [constructorIngredients, dispatch]);


	// close order modal
	function closeOrderModal() {
		dispatch({
			type: CLEAR_ORDER_DETAILS,
		});
	};
	
	// handle order
	function handleOrder() {
		const ingredients = [];

		if (constructorBun) {
			ingredients.push(constructorBun._id);
			constructorIngredients.forEach(({ingredient}) => ingredients.push(ingredient._id));
	
			dispatch(setOrder(ingredients));
		} else {
			alert('Выберите булочку')
		}
	};

	// handle bun component
	function handleBunComponent(position) {
		return constructorBun
			? <BurgerConstructorElement type={position} ingredient={constructorBun} />
			: 'Выберите булочку';
	};

	// handle ingredients component
	const handleIngredientsComponent = constructorIngredients.length > 0
		? constructorIngredients.map(({id, ingredient}, index) => {
				return <BurgerConstructorElement
					key={id}
					id={id}
					index={index}
					ingredient={ingredient}
					onUpdateConstructor={handlerUpdateConstructor} />
			})
		: 'Выберите инредиенты';
		//!TODO: заглушки "Выберите ингредиенты это временное решение..."

	return (
		<>
			<section className={`pt-25 pl-4 ${styles.constructor}`}>
				<div className={`${styles.constructor__wrapper}`} ref={dropIngredientRef}>
					<div className={`pr-4 ${styles.constructor__element_top}`}>
						{ handleBunComponent('top') }
					</div>
					<SimpleBar className={styles.simplebar}>
						<ul className={`${styles.constructor__list}`}>
							{ handleIngredientsComponent }
						</ul>
					</SimpleBar>
					<div className={`pr-4 ${styles.constructor__element_bottom}`}>
						{ handleBunComponent('bottom') }
					</div>
				</div>
				<div className={`mt-10 pr-4 ${styles.footer}`}>
					<div className={`text_type_digits-medium ${styles['total-price']}`}>
						<span className={`mr-2`}>
							{ totalPrice }
						</span>
						<CurrencyIcon type="primary" />
					</div>
					<Button type="primary" size="large" htmlType="button" onClick={handleOrder}>
						Оформить заказ
					</Button>
				</div>
			</section>
			{
				orderId &&
					<Modal onClose={closeOrderModal}>
						<OrderDetails />
					</Modal>
			}
		</>
	);
};
