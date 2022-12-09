import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Ingredient-details.module.css';

export function IngredientDetails() {
	const { ingredientId } = useParams();
	const ingredients = useSelector((store) => store.burgerIngredientsReducer.ingredients);
	const ingredinet = ingredients.find((item) => item._id === ingredientId);

  return (
    <div className={`${styles.details}`}>
      <picture>
        <source srcSet={ingredinet?.image__mobile} media="(max-width: 769px)" />
        <img className={`mb-4 ${styles.details__img}`} src={ingredinet?.image} alt={ingredinet?.name} />
      </picture>
      <span className={`text_type_main-medium mb-8`}>{ingredinet?.name}</span>
      <ul className={`${styles.details__list}`}>
        <li className={`${styles.details__item}`}>
          <span>Калории,ккал</span>
          <span>{ingredinet?.calories}</span>
        </li>
        <li className={`${styles.details__item}`}>
          <span>Белки, г</span>
          <span>{ingredinet?.proteins}</span>
        </li>
        <li className={`${styles.details__item}`}>
          <span>Жиры, г</span>
          <span>{ingredinet?.fat}</span>
        </li>
        <li className={`${styles.details__item}`}>
          <span>Углеводы, г</span>
          <span>{ingredinet?.carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
};
