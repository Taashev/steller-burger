import styles from './Ingredient-details.module.css';
// import { ingredientPropTypes  } from '../../utils/template-prop-types';
import { ModalOverlay } from '../Modal-overlay/Modal-overlay';
import { Modal } from '../Modal/Modal';

export function IngredientDetails({ data }) {

	return (
		<ModalOverlay>
			<Modal title="Детали ингредиента">
				<div className={`${styles.details}`}>
					<img className={`mb-4 ${styles.details__img}`} src="#" alt="" />
					<span className={`text_type_main-medium mb-8`}>Name</span>
					<ul className={`${styles.details__list}`}>
						<li className={`${styles.details__item}`}>
							<span>Калории,ккал</span>
							<span>244,4</span>
						</li>
						<li className={`${styles.details__item}`}>
							<span>Белки, г</span>
							<span>12,2</span>
						</li>
						<li className={`${styles.details__item}`}>
							<span>Жиры, г</span>
							<span>17,2</span>
						</li>
						<li className={`${styles.details__item}`}>
							<span>Углеводы, г</span>
							<span>10,2</span>
						</li>
					</ul>
				</div>
			</Modal>
		</ModalOverlay>
	);
};

// IngredientDetails.propTypes = {
// 	data: ingredientPropTypes.isRequired,
// };