// import ingredient details actions
import {
	GET_INGREDIENT_DETAILS,
	REMOVE_INGREDIENT_DETAILS,
} from '../actions/ingredientDetails';

// ingredient details initial state
const ingredientDetailsInitialState = {
	ingredientDetails: null,
};

// ingredient details reducer
export function ingredientDetailsReducer(
	state = ingredientDetailsInitialState,
	action
) {
	switch (action.type) {
		case GET_INGREDIENT_DETAILS:
			return {
				ingredientDetails: action.ingredientDetails,
			};
		case REMOVE_INGREDIENT_DETAILS:
			return {
				ingredientDetails: null,
			};
		default:
			return state;
	};
};
