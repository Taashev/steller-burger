import { useState, useContext } from 'react';
import styles from './Burger-constructor.module.css';
import SimpleBar from 'simplebar-react';

import { Modal } from '../Modal/Modal';
import { setOrder } from '../../utils/Api';
import { OrderDetails } from '../OrderDetails/Order-details';
import { BurgerConstructorContext, TotalPriceContext } from '../../contexts/appContext';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerConstructorElement } from '../Burger-constructor-element/Burger-constructor-element';

export function BurgerConstructor() {
	const { burgerConstructor } = useContext(BurgerConstructorContext);
	const { totalPriceState } = useContext(TotalPriceContext);

	const [ orderId, setOrderId ] = useState(null);
	const [ isOrderDetailsModal, setIsOrderDetailsModal ] = useState(false);

	const bun = burgerConstructor?.find((ingredient) => ingredient.type === 'bun');
	const ingredientElements = burgerConstructor?.filter((ingredient) => ingredient.type !== 'bun');

	// close order modal
	function closeOrderModal() {
		setIsOrderDetailsModal(false);
	};
	
	// handle order
	function handleOrder() {
		const ingredients = [];
		ingredients.push(bun._id);
		ingredientElements.forEach((i) => ingredients.push(i._id));
		
		setOrder(ingredients)
			.then((res) => {
				setOrderId(res.order.number);
				setIsOrderDetailsModal(true);
			})
			.catch((err) => console.log(err))
	};

	return (
		<>
			<section className={`pt-25 pl-4 ${styles.constructor}`}>
				<div className={`${styles.constructor__wrapper}`}>
					<div className={`pr-4 ${styles.constructor__element_top}`}>
						{
							burgerConstructor &&
								<BurgerConstructorElement type="top" ingredient={bun} />
						}
					</div>
					<SimpleBar className={styles.simplebar}>
						<ul className={`${styles.constructor__list}`}>
							{
								burgerConstructor &&
									//!TODO: метод slice временно для тестирования отрисовки компонентов
									ingredientElements.slice(0, 1).map(
										(ingredient) =>
											<BurgerConstructorElement key={ingredient._id} ingredient={ingredient} />
									)
							}
						</ul>
					</SimpleBar>
					<div className={`pr-4 ${styles.constructor__element_bottom}`}>
						{
							burgerConstructor &&
								<BurgerConstructorElement type="bottom" ingredient={bun} />
						}
					</div>
				</div>
				<div className={`mt-10 pr-4 ${styles.footer}`}>
					<div className={`text_type_digits-medium ${styles['total-price']}`}>
						<span className={`mr-2`}>
							{ totalPriceState.price }
						</span>
						<CurrencyIcon type="primary" />
					</div>
					<Button type="primary" size="large" htmlType="button" onClick={handleOrder}>
						Оформить заказ
					</Button>
				</div>
			</section>
			{
				isOrderDetailsModal &&
					<Modal onClose={closeOrderModal}>
						<OrderDetails orderId={orderId} />
					</Modal>
			}
		</>
	);
};
