import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useDrop } from 'react-dnd/dist/hooks';
import SimpleBar from 'simplebar-react';

import { Modal } from '../Modal/Modal';
import { addConstructorBun, addConstructorIngredient, updateConstructorIngredient }
	from '../../services/actions/constructorIngredients';
import { setOrder, clearOrderDetails } from '../../services/actions/orderDetails';
import { OrderDetails } from '../OrderDetails/Order-details';
import { CurrencyIcon, Button } 
	from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerConstructorElement } 
	from './Burger-constructor-element/Burger-constructor-element';

import styles from './Burger-constructor.module.css';
import { Preloader } from '../Preloader/Preloader';

export function BurgerConstructor() {
	// dispatch
	const dispatch = useDispatch();
	
	// history
	const history = useHistory();

	// store
	const {
		constructorBun,
		constructorIngredients,
	} = useSelector((store) => store.constructorReducer);
	const orderId = useSelector((store) => store.orderDetailsReducer.orderId);
	const setOrderDetailsRequest = useSelector((store) => store.orderDetailsReducer.setOrderDetailsRequest);
	const totalPrice = useSelector((store) => store.totalPriceReducer.totalPrice);
	const user = useSelector((store) => store.userReducer.user);

	// dnd drop ingredient
	const [{ isHoverBun, isHoverIngredient }, dropIngredientRef] = useDrop({
		accept: 'ingredient',
		drop(ingredient) {
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

	const handlerUpdateConstructor = useCallback((dragIndex, hoverIndex) => {
      const dragCard = constructorIngredients[dragIndex];
      const newCards = [...constructorIngredients];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);

      dispatch(updateConstructorIngredient(newCards));
	}, [constructorIngredients, dispatch]);


	// close order modal
	function closeOrderModal() {
		dispatch(clearOrderDetails());
	};
	
	// handle order
	function handleOrder() {
		if (!user) {
			return history.push('/login');
		}

		const ingredients = [];

		if (constructorBun) {
			ingredients.push(constructorBun._id);
			constructorIngredients.forEach(({ingredient}) => ingredients.push(ingredient._id));
	
			dispatch(setOrder(ingredients));
		} else {
			alert('Выберите булочку')
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
										Выберите булочку
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
												onUpdateConstructor={handlerUpdateConstructor} />
										})
									: <div className={`
												${styles.constructor__element_default}
												${isHoverIngredient && styles.hover}
											`}
										>
											Выберите булочку
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
										Выберите булочку
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
						Оформить заказ
					</Button>
				</div>
			</section>
			{
				setOrderDetailsRequest &&
					<Modal>
						<Preloader width={50} height={50} />
						<p style={{ textAlign: 'center', fontSize: 32 }}>
							Оформляем заказ...
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
