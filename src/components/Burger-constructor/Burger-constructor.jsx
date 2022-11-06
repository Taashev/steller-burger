import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import styles from './Burger-constructor.module.css';
import { ingredientPropTypes } from '../../utils/template-prop-types';
import { BurgerConstructorElement } from '../Burger-constructor-element/Burger-constructor-element';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function BurgerConstructor({ data, openOrderDetails }) {
	const bun = data.find(
		(ingredient) => ingredient.type === 'bun'
	);
	const ingredients = data.filter(
		(ingredient) => ingredient.type !== 'bun'
	);

	return (
		<section className={`pt-25 pl-4 ${styles.constructor}`}>
			<div className={`${styles.constructor__wrapper}`}>
				<div className={`pr-4 ${styles.constructor__element_top}`}>
					<ConstructorElement
						type="top"
						isLocked={true}
						text={bun.name}
						price={bun.price}
						thumbnail={bun.image} />
				</div>
				<SimpleBar style={{height: 'calc(100vh - 570px)', maxHeight: '660px'}}>
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
						text={bun.name}
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
	);
};

BurgerConstructor.propTypes = {
	data: PropTypes.arrayOf(
		ingredientPropTypes.isRequired
	).isRequired,
};
