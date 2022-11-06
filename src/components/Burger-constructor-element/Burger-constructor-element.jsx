import styles from './Burger-constructor-element.module.css';
import { ingredientPropTypes } from '../../utils/template-prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function BurgerConstructorElement({ ingredient }) {
	const {name, price, image} = ingredient;
	
	return (
		<li className={`${styles.constructor__element}`}>
			<DragIcon type="primary" />
			<ConstructorElement
				text={name}
        price={price}
        thumbnail={image} />
		</li>
	);
};

BurgerConstructorElement.propTypes = {
	ingredient: ingredientPropTypes.isRequired,
};