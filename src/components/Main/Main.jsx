import PropTypes from 'prop-types';
import stylesMain from './Main.module.css';
import { ingredientPropTypes } from '../../utils/template-prop-types';
import { BurgerIngredients } from '../Burger-ingredients/Burger-ingredients';
import { BurgerConstructor } from '../Burger-constructor/Burger-constructor';

export function Main({
	data,
	openOrderDetails,
	ingredient,
	setIngredient,
	closeIngredientModal,
	isOrderDetailsModal,
	closeOrderModal,
}) {
	return (
		<main className={stylesMain.main}>
			<div className={stylesMain.container}>
				<BurgerIngredients
					data={data}
					ingredient={ingredient}
					setIngredient={setIngredient}
					closeIngredientModal={closeIngredientModal} />
				<BurgerConstructor
					data={data}
					openOrderDetails={openOrderDetails}
					isOrderDetailsModal={isOrderDetailsModal}
					closeOrderModal={closeOrderModal} />
			</div>
		</main>
	);
};

Main.propTypes = {
	data: PropTypes.arrayOf(
		ingredientPropTypes.isRequired
	).isRequired,
	openOrderDetails: PropTypes.func,
	ingredient: PropTypes.object,
	setIngredient: PropTypes.func,
	closeIngredientModal: PropTypes.func,
	isOrderDetailsModal: PropTypes.bool,
	closeOrderModal: PropTypes.func,
};
