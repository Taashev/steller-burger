import { v1 } from 'uuid';

export const ADD_CONSTRUCTOR_BUN = 'ADD_CONSTRUCTOR_BUN';
export const ADD_CONSTRUCTOR_INGREDIENT = 'ADD_CONSTRUCTOR_INGREDIENT';
export const UPDATE_CONSTRUCTOR_INGREDIENT = 'UPDATE_CONSTRUCTOR_INGREDIENT';
export const REMOVE_CONSTRUCTOR_INGREDIENT = 'REMOVE_CONSTRUCTOR_INGREDIENT';
export const CLEAR_CONSTRUCTOR = 'CLEAR_CONSTRUCTOR';

export function addConstructorBun(ingredient) {
	return { type: ADD_CONSTRUCTOR_BUN, bun: ingredient }
};

export function addConstructorIngredient(ingredient) {
	return { type: ADD_CONSTRUCTOR_INGREDIENT, ingredient: { ingredient, id: v1() } };
};

export function updateConstructorIngredient(newCards) {
	return { type: UPDATE_CONSTRUCTOR_INGREDIENT, constructorIngredients: newCards };
};

export function removeConstructorIngredient(id) {
	return { type: REMOVE_CONSTRUCTOR_INGREDIENT, id };
};

export function clearConstructor() {
	return { type: CLEAR_CONSTRUCTOR };
};
