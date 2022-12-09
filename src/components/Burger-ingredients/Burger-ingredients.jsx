import { useMemo, useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import SimpleBar from 'simplebar-react';

import { Modal } from '../Modal/Modal';
import { Tabs } from '../Tabs/Tabs';
import { removeIngredientDetails } from '../../services/actions/ingredientDetails';
import { IngredientDetails } from './IngredientDetails/Ingredient-details';
import { IngredientCategory } from './Ingredient-category/Ingredient-category';

import stylesBurgerIngredients from './Burger-ingredients.module.css';


export function BurgerIngredients() {
	const simpleBarRef = useRef();
	const bunCategoryRef = useRef();
	const mainCategoryRef = useRef();
	const sauceCategoryRef = useRef();

	const [ currentTab, setCurrentTab ] = useState('bun');

	// const dispatch = useDispatch();
	const ingredients = useSelector((store) => store.burgerIngredientsReducer.ingredients);
	// const ingredientDetails = useSelector((store) => store.ingredientDetailsReducer.ingredientDetails);

	const bun = useMemo(() => ingredients.filter((ingredient) => ingredient.type === 'bun'), [ingredients]);
	const main = useMemo(() => ingredients.filter((ingredient) => ingredient.type === 'main'), [ingredients]);
	const sauce = useMemo(() => ingredients.filter((ingredient) => ingredient.type === 'sauce'), [ingredients]);

	// component did mount
	useEffect(() => {
		const simpleBar = simpleBarRef.current;

		if (simpleBar) {
			simpleBar.addEventListener('scroll', onScroll)
		}

		return () => simpleBar.removeEventListener('scroll', onScroll);
	}, []);
	
	// close details modal
	// function closeDetailsModal() {
	// 	dispatch(removeIngredientDetails());
	// };

	// on scroll
	function onScroll() {
		const simpleBarTop = simpleBarRef.current.getBoundingClientRect().top;
		const bunBottom = bunCategoryRef.current.getBoundingClientRect().bottom - 100;
		const mainTop = mainCategoryRef.current.getBoundingClientRect().top - 100;
		const sauceTop = sauceCategoryRef.current.getBoundingClientRect().top;

		if (bunBottom > simpleBarTop) setCurrentTab('bun');
		if (sauceTop < simpleBarTop) setCurrentTab('sauce');
		if (mainTop < simpleBarTop) setCurrentTab('main');
	};

	return (
		<>
			<section className={`pt-10 ${stylesBurgerIngredients.burgerIngredients}`}>
				<h1 className="text text_type_main-large mb-5">
					Соберите бургер
				</h1>
				<Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
				{  }
				<SimpleBar
					className={`${stylesBurgerIngredients.simplebar}`}
					scrollableNodeProps={{ ref: simpleBarRef }}
				>
					<IngredientCategory 
						id="bun"
						title="Булки"
						ingredients={bun}
						refCatefory={bunCategoryRef} />
					<IngredientCategory 
						id="sauce"
						title="Соусы"
						ingredients={sauce}
						refCatefory={sauceCategoryRef} />
					<IngredientCategory 
						id="main"
						title="Начинки"
						ingredients={main}
						refCatefory={mainCategoryRef} />
				</SimpleBar>
			</section>
			{/* {
				ingredientDetails &&
					<Modal title={"Детали ингредиента"} onClose={closeDetailsModal}>
						<IngredientDetails />
					</Modal>
			} */}
		</>
	);
};
