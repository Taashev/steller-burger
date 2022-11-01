import { BurgerIngredients } from '../Burger-ingredients/Burger-ingredients';
import stylesMain from './Main.module.css';

export function Main() {
	return (
		<main className={stylesMain.main}>
			<div className={stylesMain.container}>
				<BurgerIngredients />
			</div>
		</main>
	);
};