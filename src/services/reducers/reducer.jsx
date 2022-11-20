// import ingredients actions
import {
	GET_INGREDIENTS,
	GET_INGREDIENTS_FAILED,
	GET_INGREDIENTS_SUCCESS,
} from '../actions/ingredients';

// import constructor ingredients actions
import {
	ADD_CONSTRUCTOR_BUN,
	ADD_CONSTRUCTOR_INGREDIENT,
	REMOVE_CONSTRUCTOR_INGREDIENT,
	CLEAR_CONSTRUCTOR,
} from '../actions/constructorIngredients';

// import ingredient details actions
import {
	GET_INGREDIENT,
	REMOVE_INGREDIENT,
} from '../actions/ingredientDetails';

// import order details actions
import {
	SET_ORDER_DETAILS_REQUEST,
	SET_ORDER_DETAILS_SUCCESS,
	SET_ORDER_DETAILS_FAILED,
	CLEAR_ORDER_DETAILS,
} from '../actions/orderDetails';

// import total price action
import {
	SET,
	REMOVE,
	RESET,
}	from '../actions/totalPrice';


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
		case GET_INGREDIENT:
			return {
				ingredientDetails: action.ingredientDetails,
			};
		case REMOVE_INGREDIENT:
			return {
				ingredientDetails: null,
			};
		default:
			return state;
	};
};


// order details initial state
const orderDetailsInitialState = {
	setOrderDetailsRequest: false,
	setOrderDetailsSeuccess: false,
	setOrderDetailsFailed: false,

	orderId: null,
};

// order details reducer
export function orderDetailsReducer(
	state = orderDetailsInitialState,
	action
) {
	switch(action.type) {
		case SET_ORDER_DETAILS_REQUEST:
			return {
				...state,
				setOrderDetailsRequest: true,
			};
		case SET_ORDER_DETAILS_SUCCESS:
			return {
				...state,
				setOrderDetailsRequest: false,
				setOrderDetailsSeuccess: true,
				setOrderDetailsFailed: false,
				orderId: action.orderId,
			};
		case SET_ORDER_DETAILS_FAILED:
			return {
				...state,
				setOrderDetailsRequest: false,
				setOrderDetailsSeuccess: false,
				setOrderDetailsFailed: true,
			}
		case CLEAR_ORDER_DETAILS:
			return {
				...state,
				setOrderDetailsSeuccess: false,
				orderId: null,
			};
		default:
			return state;
	};
};


// total price initial state
const totalPriceInitialState = {
	totalPrice: 0,
};

// total price reducer
export function totalPriceReducer(
	state = totalPriceInitialState,
	action
) {
	switch (action.type) {
		case SET:
			return {
				totalPrice: state.totalPrice + action.payload,
			};
		case REMOVE:
			return {
				totalPrice: state.totalPrice - action.payload,
			};
		case RESET:
			return {
				totalPrice: 0,
			};
		default:
			return state;
	};
};
