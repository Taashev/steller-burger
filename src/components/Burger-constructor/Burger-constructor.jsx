import styles from './Burger-constructor.module.css';
import SimpleBar from 'simplebar-react';
import { BurgerConstructorElement } from '../Burger-constructor-element/Burger-constructor-element';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function BurgerConstructor({ data }) {
	return (
		<section className={`pt-25 pl-4 ${styles.constructor}`}>
			<div className={`${styles.constructor__wrapper}`}>
				<div className={`pr-4 ${styles.constructor__element_top}`}>
					<ConstructorElement
						type="top"
						isLocked={true}
						text={data[0].name}
						price={data[0].price}
						thumbnail={data[0].image}
					/>
				</div>
				<SimpleBar style={{height: 'calc(100vh - 570px)', maxHeight: '660px'}}>
					<ul className={`${styles.constructor__list}`}>
						{
							data
								.filter((i) => i.type === 'main')
								.map((i) => {
									return <BurgerConstructorElement
										key={i._id}
										text={i.name}
										price={i.price}
										image={i.image}
									/>
								})
						}
					</ul>
				</SimpleBar>
				<div className={`pr-4 ${styles.constructor__element_bottom}`}>
					<ConstructorElement
						type="bottom"
						isLocked={true}
						text={data[0].name}
						price={data[0].price}
						thumbnail={data[0].image}
					/>
				</div>
			</div>
			<div className={`mt-10 pr-4 ${styles.footer}`}>
				<div className={`text_type_digits-medium ${styles.total}`}>
					<span className={`mr-2 ${styles.total__item}`}>0</span>
					<CurrencyIcon type="primary" />
				</div>
				<Button type="primary" size="large" htmlType="button">
					Оформить заказ
				</Button>
			</div>
		</section>
	);
};