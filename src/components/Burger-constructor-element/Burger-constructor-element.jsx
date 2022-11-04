import styles from './Burger-constructor-element.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function BurgerConstructorElement({ text, price, image }) {
	return (
		<li className={`${styles.constructor__element}`}>
			<DragIcon type="primary" />
			<ConstructorElement
				text={text}
        price={price}
        thumbnail={image}
			/>
		</li>
	);
};