import PropTypes from 'prop-types';
import stylesMain from './Main.module.css';
import { ingredientPropTypes } from '../../utils/template-prop-types';
import { BurgerIngredients } from '../Burger-ingredients/Burger-ingredients';
import { BurgerConstructor } from '../Burger-constructor/Burger-constructor';

export function Main({ data, openOrderDetails, openIngredientDetails, setIngredient }) {
	return (
		<main className={stylesMain.main}>
			<div className={stylesMain.container}>
				<BurgerIngredients 
					data={data}
					openIngredientDetails={openIngredientDetails}
					setIngredient={setIngredient} />
				<BurgerConstructor 
					data={data}
					openOrderDetails={openOrderDetails} />
			</div>
		</main>
	);
};

Main.propTypes = {
	data: PropTypes.arrayOf(
		ingredientPropTypes.isRequired
	).isRequired
};
