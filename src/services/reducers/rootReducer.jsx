import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './ingredients';
import { constructorReducer } from './constructorIngredients';
import { ingredientDetailsReducer } from './ingredientDetails';
import { orderDetailsReducer } from './orderDetails';
import { totalPriceReducer } from './totalPrice';
//! import { registerReducer } from './register';
import { loginReducer } from './login';
import { userReducer } from './user';
import { updateUserReducer } from './updateUser';

// root reducer
export const rootReducer = combineReducers({
	burgerIngredientsReducer,
	constructorReducer,
	ingredientDetailsReducer,
	orderDetailsReducer,
	totalPriceReducer,
	//! registerReducer,
	loginReducer,
	userReducer,
	updateUserReducer,
});
