import styles from './Burger-constructor.module.css';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import { ingredientPropTypes } from '../../utils/template-prop-types';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerConstructorElement } from '../Burger-constructor-element/Burger-constructor-element';
import { Modal } from '../Modal/Modal';
import { OrderDetails } from '../OrderDetails/Order-details';

export function BurgerConstructor({
	data,
	openOrderDetails,
	isOrderDetailsModal,
	closeOrderModal,
}) {
	const orderId = Math.floor(Math.random() * 50_000);

	const bun = data.find(
		(ingredient) => ingredient.type === 'bun'
	);
	const ingredients = data.filter(
		(ingredient) => ingredient.type !== 'bun'
	);

	return (
		<>
			<section className={`pt-25 pl-4 ${styles.constructor}`}>
				<div className={`${styles.constructor__wrapper}`}>
					<div className={`pr-4 ${styles.constructor__element_top}`}>
						<ConstructorElement
							type="top"
							isLocked={true}
							text={bun.name + ' (верх)'}
							price={bun.price}
							thumbnail={bun.image} />
					</div>
					<SimpleBar className={styles.simplebar}>
						<ul className={`${styles.constructor__list}`}>
							{ingredients.map(
								(ingredient) =>
									<BurgerConstructorElement key={ingredient._id} ingredient={ingredient} />
							)}
						</ul>
					</SimpleBar>
					<div className={`pr-4 ${styles.constructor__element_bottom}`}>
						<ConstructorElement
							type="bottom"
							isLocked={true}
							text={bun.name + ' (низ)'}
							price={bun.price}
							thumbnail={bun.image} />
					</div>
				</div>
				<div className={`mt-10 pr-4 ${styles.footer}`}>
					<div className={`text_type_digits-medium ${styles.total}`}>
						<span className={`mr-2 ${styles.total__item}`}>0</span>
						<CurrencyIcon type="primary" />
					</div>
					<Button type="primary" size="large" htmlType="button" onClick={openOrderDetails}>
						Оформить заказ
					</Button>
				</div>
			</section>
			{
				isOrderDetailsModal &&
					<Modal component={OrderDetails} onClose={closeOrderModal} orderId={orderId} />
			}
		</>
	);
};

BurgerConstructor.propTypes = {
	data: PropTypes.arrayOf(
		ingredientPropTypes.isRequired
	).isRequired,
};
