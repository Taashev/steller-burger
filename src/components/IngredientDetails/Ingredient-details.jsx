import styles from './Ingredient-details.module.css';
import { ingredientPropTypes } from '../../utils/template-prop-types';

export function IngredientDetails({ ingredient }) {
	const {
		calories,
		carbohydrates,
		fat,
		image,
		image__mobile,
		name,
		proteins,
	} = ingredient;

  return (
    <div className={`${styles.details}`}>
      <picture>
        <source srcSet={image__mobile} media="(max-width: 769px)" />
        <img className={`mb-4 ${styles.details__img}`} src={image} alt={name} />
      </picture>
      <span className={`text_type_main-medium mb-8`}>{name}</span>
      <ul className={`${styles.details__list}`}>
        <li className={`${styles.details__item}`}>
          <span>Калории,ккал</span>
          <span>{calories}</span>
        </li>
        <li className={`${styles.details__item}`}>
          <span>Белки, г</span>
          <span>{proteins}</span>
        </li>
        <li className={`${styles.details__item}`}>
          <span>Жиры, г</span>
          <span>{fat}</span>
        </li>
        <li className={`${styles.details__item}`}>
          <span>Углеводы, г</span>
          <span>{carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
};
