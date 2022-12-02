// import constructor ingredients actions
import {
	ADD_CONSTRUCTOR_BUN,
	ADD_CONSTRUCTOR_INGREDIENT,
	UPDATE_CONSTRUCTOR_INGREDIENT,
	REMOVE_CONSTRUCTOR_INGREDIENT,
	CLEAR_CONSTRUCTOR,
} from '../actions/constructorIngredients';

// constructor ingredients initial state
const constructorInitialState = {
	constructorBun: null,
	constructorIngredients: [],
};

// constructor reducer
export function constructorReducer(
	state = constructorInitialState,
	action
) {
	switch (action.type) {
		case ADD_CONSTRUCTOR_BUN:
			return {
				...state,
				constructorBun: action.bun,
			};
		case ADD_CONSTRUCTOR_INGREDIENT:
			return {
				...state,
				constructorIngredients: [
					...state.constructorIngredients,
					action.ingredient,
				],
			};
		case UPDATE_CONSTRUCTOR_INGREDIENT:
			return {
				...state,
				constructorIngredients: [
					...action.constructorIngredients,
				],
			};
		case REMOVE_CONSTRUCTOR_INGREDIENT:
			return {
				...state,
				constructorIngredients: [
					...state.constructorIngredients.filter(
						({id}) => id !== action.id
					),
				],
			};
		case CLEAR_CONSTRUCTOR:
			return {
				constructorBun: null,
				constructorIngredients: [],
			};
		default:
			return state;
	};
};
