import stylesMain from './Main.module.css';
import { BurgerIngredients } from '../Burger-ingredients/Burger-ingredients';

export function Main() {
	return (
		<main className={stylesMain.main}>
			<div className={stylesMain.container}>
				<BurgerIngredients />
			</div>
		</main>
	);
};