import { useDispatch, useSelector } from 'react-redux/es/exports';
import SimpleBar from 'simplebar-react';
import styles from './Burger-constructor.module.css';

import { setOrder, CLEAR_ORDER_DETAILS } from '../../services/actions/orderDetails';
import { Modal } from '../Modal/Modal';
import { OrderDetails } from '../OrderDetails/Order-details';
import { CurrencyIcon, Button } 
	from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerConstructorElement } 
	from '../Burger-constructor-element/Burger-constructor-element';

export function BurgerConstructor() {
	const dispatch = useDispatch();

	const {
		constructorBun,
		constructorIngredients
	} = useSelector((store) => store.constructorReducer);

	const orderId = useSelector((store) => store.orderDetailsReducer.orderId);
	const totalPrice = useSelector((store) => store.totalPriceReducer.totalPrice);

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
			constructorIngredients.forEach((i) => ingredients.push(i._id));
	
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
		? constructorIngredients.map((ingredient) =>
				<BurgerConstructorElement key={ingredient._id} ingredient={ingredient} />
			)
		: 'Выберите инредиенты';

	return (
		<>
			<section className={`pt-25 pl-4 ${styles.constructor}`}>
				<div className={`${styles.constructor__wrapper}`}>
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
