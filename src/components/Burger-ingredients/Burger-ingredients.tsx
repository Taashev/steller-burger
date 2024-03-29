import { useMemo, useRef, useEffect, useState } from 'react';
import { useSelector } from '../../services/types/hooks';
import SimpleBar from 'simplebar-react';

import { Tabs } from '../Tabs/Tabs';
import { IngredientCategory } from './Ingredient-category/Ingredient-category';

import { IIngredient } from '../../services/types';
import stylesBurgerIngredients from './Burger-ingredients.module.css';

export function BurgerIngredients(): JSX.Element {
  // ref
  const simpleBarRef = useRef<HTMLDivElement | null>(null);
  const bunCategoryRef = useRef<HTMLDivElement | null>(null);
  const mainCategoryRef = useRef<HTMLDivElement | null>(null);
  const sauceCategoryRef = useRef<HTMLDivElement | null>(null);

  // current tab
  const [currentTab, setCurrentTab] = useState<string>('bun');

  // ingredients
  const ingredients = useSelector(
    (store) => store.burgerIngredientsReducer.ingredients
  );

  // ingredient category
  const bun = useMemo<IIngredient[]>(
    () => ingredients.filter((ingredient) => ingredient.type === 'bun'),
    [ingredients]
  );
  const main = useMemo<IIngredient[]>(
    () => ingredients.filter((ingredient) => ingredient.type === 'main'),
    [ingredients]
  );
  const sauce = useMemo<IIngredient[]>(
    () => ingredients.filter((ingredient) => ingredient.type === 'sauce'),
    [ingredients]
  );

  // component did mount
  useEffect(() => {
    const simpleBar = simpleBarRef.current;

    if (simpleBar) {
      simpleBar.addEventListener('scroll', onScroll);
    }

    return () => simpleBar!.removeEventListener('scroll', onScroll);
  }, []);

  // on scroll
  function onScroll() {
    const simpleBarTop = simpleBarRef.current!.getBoundingClientRect().top;
    const bunBottom =
      bunCategoryRef.current!.getBoundingClientRect().bottom - 100;
    const mainTop = mainCategoryRef.current!.getBoundingClientRect().top - 100;
    const sauceTop = sauceCategoryRef.current!.getBoundingClientRect().top;

    if (bunBottom > simpleBarTop) setCurrentTab('bun');
    if (sauceTop < simpleBarTop) setCurrentTab('sauce');
    if (mainTop < simpleBarTop) setCurrentTab('main');
  }

  return (
    <>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <SimpleBar
        className={`${stylesBurgerIngredients.simplebar}`}
        scrollableNodeProps={{ ref: simpleBarRef }}
      >
        <IngredientCategory
          id="bun"
          title="Булки"
          ingredients={bun}
          refCategory={bunCategoryRef}
        />
        <IngredientCategory
          id="sauce"
          title="Соусы"
          ingredients={sauce}
          refCategory={sauceCategoryRef}
        />
        <IngredientCategory
          id="main"
          title="Начинки"
          ingredients={main}
          refCategory={mainCategoryRef}
        />
      </SimpleBar>
    </>
  );
}
