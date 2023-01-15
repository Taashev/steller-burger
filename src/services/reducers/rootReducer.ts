import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './ingredients';
import { constructorReducer } from './constructorIngredients';
import { ingredientDetailsReducer } from './ingredientDetails';
import { orderDetailsReducer } from './orderDetails';
import { totalPriceReducer } from './totalPrice';
import { loginReducer } from './login';
import { userReducer } from './user';
import { updateUserReducer } from './updateUser';
import { forgotPasswordReducer } from './forgotPassword';
import { WSOrdersReducer } from './wsOrdersReducer';
import { WSHistoryOrdersReducer } from './wsHistoryOrdersActions';
import { getOrderReducer } from './getOrder';

// root reducer
export const rootReducer = combineReducers({
  burgerIngredientsReducer,
  constructorReducer,
  ingredientDetailsReducer,
  orderDetailsReducer,
  totalPriceReducer,
  loginReducer,
  userReducer,
  updateUserReducer,
  forgotPasswordReducer,
  WSOrdersReducer,
  WSHistoryOrdersReducer,
  getOrderReducer,
});
