import stylesIngredients from './Container-ingredients.module.css';

export function ContainerIngredients({ title, children }) {
	return (
		<div className={`${ stylesIngredients.ingredients }`}>
			<h2 className={`text text_type_main-medium mb-6 ${ stylesIngredients.title }`}>
				{ title }
			</h2>
			<div className={`pl-4 pr-4 pb-10 ${ stylesIngredients.wrapper }`}>
				{ children }
			</div>
		</div>
	);
};