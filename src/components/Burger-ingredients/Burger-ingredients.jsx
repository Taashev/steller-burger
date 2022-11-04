import stylesBurgerIngredients from './Burger-ingredients.module.css';
import { Tabs } from '../Tabs/Tabs';
import { ContainerIngredients } from '../Container-ingredients/Container-ingredients';
import { CardIngredient } from '../Card-ingredient/Card-ingredient';
import SimpleBar from 'simplebar-react';

export function BurgerIngredients({ data }) {
	return (
		<section className={`pt-10 ${ stylesBurgerIngredients.burgerIngredients }`}>
			<h1 className="text text_type_main-large mb-5">
				Соберите бургер
			</h1>
			<Tabs />
			<SimpleBar style={{ height: 'calc(100vh - 350px)' }}>
				<ContainerIngredients title="Булки">
					{
						data
							.filter((i) => i.type === 'bun')
							.map((i) => <CardIngredient key={ i._id } { ...i } counter="1" />)
					}
				</ContainerIngredients>
				<ContainerIngredients title="Соусы">
					{
						data
							.filter((i) => i.type === 'sauce')
							.map((i) => <CardIngredient key={ i._id } { ...i } counter="1" />)
					}
				</ContainerIngredients>
				<ContainerIngredients title="Начинки">
					{
						data
							.filter((i) => i.type === 'main')
							.map((i) => <CardIngredient key={ i._id } { ...i } counter="1" />)
					}
				</ContainerIngredients>
			</SimpleBar>
		</section>
	);
};