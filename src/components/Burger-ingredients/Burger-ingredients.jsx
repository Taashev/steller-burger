import stylesIngredients from './Burger-ingredients.module.css';
import { Tabs } from '../Tabs/Tabs';

export function BurgerIngredients() {
	return (
		<section className={`pt-10 ${ stylesIngredients.ingredients }`}>
			<h1 className="text text_type_main-large mb-5">
				Соберите бургер
			</h1>
			<Tabs />
		</section>
	);
};