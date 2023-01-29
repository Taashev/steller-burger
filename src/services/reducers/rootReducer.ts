import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './ingredients/ingredients';
import { constructorReducer } from './constructorIngredients/constructorIngredients';
import { ingredientDetailsReducer } from './ingredientDetails/ingredientDetails';
import { orderDetailsReducer } from './orderDetails/orderDetails';
import { totalPriceReducer } from './totalPrice/totalPrice';
import { loginReducer } from './login/login';
import { userReducer } from './user/user';
import { updateUserReducer } from './updateUser/updateUser';
import { forgotPasswordReducer } from './forgotPassword/forgotPassword';
import { WSOrdersReducer } from './wsOrdersReducer/wsOrdersReducer';
import { WSHistoryOrdersReducer } from './wsHistoryOrdersActions/wsHistoryOrdersActions';
import { getOrderReducer } from './getOrder/getOrder';

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
