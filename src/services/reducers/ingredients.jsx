// import ingredients actions
import {
	GET_INGREDIENTS,
	GET_INGREDIENTS_FAILED,
	GET_INGREDIENTS_SUCCESS,
} from '../actions/ingredients';

// ingredients initial state
const IngredientsInitialState = {
	ingredientsRequest: false,
	ingredientsSuccess: false,
	ingredientsFailed: false,

	ingredients: [],
};

// burger ingredients reducer
export function burgerIngredientsReducer(
	state = IngredientsInitialState,
	action
) {
	switch (action.type) {
		case GET_INGREDIENTS:
			return { ...state, ingredientsRequest: true };
		case GET_INGREDIENTS_SUCCESS:
			return {
				...state,
				ingredientsRequest: false,
				ingredientsSuccess: true,
				ingredientsFailed: false,
				ingredients: action.data,
			};
		case GET_INGREDIENTS_FAILED:
			return {
				...state,
				ingredientsRequest: false,
				ingredientsSuccess: false,
				ingredientsFailed: true,
			};
		default:
			return state;
	};
};
