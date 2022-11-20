import { combineReducers } from 'redux';
import {
	burgerIngredientsReducer,
	constructorReducer,
	ingredientDetailsReducer,
	orderDetailsReducer,
	totalPriceReducer,
} from './reducer';

// root reducer
export const rootReducer = combineReducers({
	burgerIngredientsReducer,
	constructorReducer,
	ingredientDetailsReducer,
	orderDetailsReducer,
	totalPriceReducer,
});
