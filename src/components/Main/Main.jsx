import stylesMain from './Main.module.css';
import { BurgerIngredients } from '../Burger-ingredients/Burger-ingredients';
import { BurgerConstructor } from '../Burger-constructor/Burger-constructor';

export function Main(props) {
	return (
		<main className={stylesMain.main}>
			<div className={stylesMain.container}>
				<BurgerIngredients />
				<BurgerConstructor { ...props } />
			</div>
		</main>
	);
};