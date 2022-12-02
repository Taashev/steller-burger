import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './ingredients';
import { constructorReducer } from './constructorIngredients';
import { ingredientDetailsReducer } from './ingredientDetails';
import { orderDetailsReducer } from './orderDetails';
import { totalPriceReducer } from './totalPrice';
import { registerReducer } from './register';

// root reducer
export const rootReducer = combineReducers({
	burgerIngredientsReducer,
	constructorReducer,
	ingredientDetailsReducer,
	orderDetailsReducer,
	totalPriceReducer,
	registerReducer,
});
