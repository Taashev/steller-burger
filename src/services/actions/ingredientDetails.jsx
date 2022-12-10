export const GET_INGREDIENT_DETAILS = 'GET_INGREDIENT_DETAILS';
export const REMOVE_INGREDIENT_DETAILS = 'REMOVE_INGREDIENT_DETAILS';

export function getIngredientDetails(ingredient) {
	return { type: GET_INGREDIENT_DETAILS, ingredientDetails: ingredient };
};

export function removeIngredientDetails() {
	return { type: REMOVE_INGREDIENT_DETAILS };
};
