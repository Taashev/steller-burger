import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useDrop } from 'react-dnd/dist/hooks';
import SimpleBar from 'simplebar-react';

import {
	addConstructorBun,
	addConstructorIngredient,
} from '../../services/actions/constructorIngredients';
import {
	setOrder,
	clearOrderDetails
} from '../../services/actions/orderDetails';
import { IIngredient } from '../../services/types';

import { Modal } from '../Modal/Modal';
import { OrderDetails } from '../OrderDetails/Order-details';
import { Preloader } from '../Preloader/Preloader';
import { BurgerConstructorElement }
from './Burger-constructor-element/Burger-constructor-element';
import { CurrencyIcon, Button }
	from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './Burger-constructor.module.css';

export function BurgerConstructor(): JSX.Element {
	// dispatch
	const dispatch = useDispatch();

	// history
	const history = useHistory();

	// store
	const {
		constructorBun,
		constructorIngredients,
	} = useSelector((store: any): {
		constructorBun: IIngredient;
		constructorIngredients: [{ id: string; ingredient: IIngredient }];
	} => store.constructorReducer);
	const orderId = useSelector((store: any) => store.orderDetailsReducer.orderId);
	const setOrderDetailsRequest = useSelector((store: any) => store.orderDetailsReducer.setOrderDetailsRequest);
	const totalPrice = useSelector((store: any) => store.totalPriceReducer.totalPrice);
	const user = useSelector((store: any) => store.userReducer.user);

	// dnd drop ingredient
	const [{ isHoverBun, isHoverIngredient }, dropIngredientRef] = useDrop({
		accept: 'ingredient',
		drop(ingredient: IIngredient) {
			ingredient.type === 'bun'
				? dispatch(addConstructorBun(ingredient))
				: dispatch(addConstructorIngredient(ingredient));
		},
		collect: (monitor) => {
			return monitor.getItem()?.type === 'bun'
				? { isHoverBun: monitor.isOver() }
				: { isHoverIngredient: monitor.isOver() }
		}
	});

	// close order modal
	function closeOrderModal(): void {
		dispatch(clearOrderDetails());
	};

	// handle order
	function handleOrder(): void {
		if (!user) {
			return history.push('/login');
		}

		const ingredients: Array<string> = [];

		if (constructorBun) {
			ingredients.push(constructorBun._id);
			constructorIngredients.forEach(({ingredient}) => ingredients.push(ingredient._id));
	
			dispatch<any>(setOrder(ingredients));
		} else {
			alert('???????????????? ??????????????')
		}
	};

	return (
		<>
			<section className={`pt-25 pl-4 ${styles.constructor}`}>
				<div className={`${styles.constructor__wrapper}`} ref={dropIngredientRef}>
					<div className={`pr-4 ${styles.constructor__element_top}`}>
						{
							constructorBun 
								? <BurgerConstructorElement type='top' ingredient={constructorBun} />
								: <div 
										className={`
											${styles.constructor__element_default}
											${styles.constructor__element_default_top}
											${isHoverBun && styles.hover}
										`}
									>
										???????????????? ??????????????
									</div>
						}
					</div>
					<SimpleBar className={`${styles.simplebar}`}>
						<ul className={`${styles.constructor__list}`}>
							{
								constructorIngredients.length > 0
									? constructorIngredients.map(({id, ingredient}, index) => {
											return <BurgerConstructorElement
												key={id}
												id={id}
												index={index}
												ingredient={ingredient}
											/>
										})
									: <div className={`
												${styles.constructor__element_default}
												${isHoverIngredient && styles.hover}
											`}
										>
											???????????????? ??????????????
										</div>
							}
						</ul>
					</SimpleBar>
					<div className={`pr-4 ${styles.constructor__element_bottom}`}>
						{
							constructorBun
								? <BurgerConstructorElement type='bottom' ingredient={constructorBun} />
								: <div className={`
											${styles.constructor__element_default}
											${styles.constructor__element_default_bottom}
											${isHoverBun && styles.hover}
										`}
									>
										???????????????? ??????????????
									</div>
						}
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
						???????????????? ??????????
					</Button>
				</div>
			</section>
			{
				setOrderDetailsRequest &&
					<Modal>
						<Preloader width={50} height={50} />
						<p style={{ textAlign: 'center', fontSize: 32 }}>
							?????????????????? ??????????...
						</p>
					</Modal>
			}
			{
				orderId &&
					<Modal onClose={closeOrderModal}>
						<OrderDetails />
					</Modal>
			}
		</>
	);
};
