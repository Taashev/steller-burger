import stylesMain from './Main.module.css';
import { BurgerIngredients } from '../Burger-ingredients/Burger-ingredients';
import { BurgerConstructor } from '../Burger-constructor/Burger-constructor';

export function Main({ data }) {
	return (
		<main className={stylesMain.main}>
			<div className={stylesMain.container}>
				<BurgerIngredients data={ data } />
				<BurgerConstructor data={ data } />
			</div>
		</main>
	);
};