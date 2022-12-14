import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { BurgerIngredients } from '../Burger-ingredients/Burger-ingredients';
import { BurgerConstructor } from '../Burger-constructor/Burger-constructor';

import stylesMain from './Main.module.css';

export function Main(): JSX.Element {
	return (
		<main className={stylesMain.main}>
			<div className={stylesMain.container}>
				<DndProvider backend={HTML5Backend}>
					<BurgerIngredients />
					<BurgerConstructor />
				</DndProvider>
			</div>
		</main>
	);
};
