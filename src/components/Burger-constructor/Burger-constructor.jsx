import styles from './Burger-constructor.module.css';
import SimpleBar from 'simplebar-react';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function BurgerConstructor(props) {
	return (
		<section className={`pt-25 pl-4 ${styles.constructor}`}>
			<div className={`mt-10 pr-4 ${styles.footer}`}>
				<div className={`text_type_digits-medium ${styles.total}`}>
					<span className={`mr-2 ${styles.total__item}`}>610</span>
					<CurrencyIcon type="primary" />
				</div>
				<Button type="primary" size="large">
					Оформить заказ
				</Button>
			</div>
		</section>
	);
};