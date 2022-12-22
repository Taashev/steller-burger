import { IIngredient } from '../../../services/types/ingredient';
import { CardIngredient } from '../Card-ingredient/Card-ingredient';
import stylesIngredients from './Ingredient-category.module.css';

interface IIngredientCategoryProps {
  title: string;
  ingredients: Array<IIngredient>;
  id: string;
  refCategory: any;
}

export function IngredientCategory({
  title,
  ingredients,
  id,
  refCategory,
}: IIngredientCategoryProps): JSX.Element {
  return (
    <div
      className={`${stylesIngredients.ingredients}`}
      id={id}
      ref={refCategory}
    >
      <h2 className={`text_type_main-medium mb-6 ${stylesIngredients.title}`}>
        {title}
      </h2>
      <div className={`pl-4 pr-4 pb-10 ${stylesIngredients.wrapper}`}>
        {ingredients.map((ingredient) => (
          <CardIngredient key={ingredient._id} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
}
