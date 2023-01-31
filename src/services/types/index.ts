import type {} from 'redux-thunk/extend-redux';
import { store } from '../..';
import { ThunkAction } from 'redux-thunk';

// import actions
import { TConnstructorActions } from '../actions/constructorIngredients/constructorIngredients';
import { TForgotPasswordActions } from '../actions/forgotPassword/forgotPassword';
import { TIngredientDetailsActions } from '../actions/ingredientDetails/ingredientDetails';
import { TIngredientsActions } from '../actions/ingredients/ingredients';
import { TLoginActions } from '../actions/login/login';
import { TLogoutActions } from '../actions/logout/logout';
import { TOrderDetailsActions } from '../actions/orderDetails/orderDetails';
import { TTotalPriceActions } from '../actions/totalPrice/totalPrice';
import { TUpdateUserActions } from '../actions/updateUser/updateUser';
import { TUserActions } from '../actions/user/user';
import { TWSOrdersActions } from '../actions/wsOrdersAction/wsOrdersAction';
import { TWSHistoryOrdersActions } from '../actions/wsHistoryOrdersAction/wsHistoryOrdersAction';
import { TGetOrderActions } from '../actions/getOrder/getOrder';

// RootState
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch
export type AppDispatch<TReturnType = void> = (
  action: AppActions | AppThunk<TReturnType>
) => TReturnType;

// AppActions
export type AppActions =
  | TConnstructorActions
  | TForgotPasswordActions
  | TIngredientDetailsActions
  | TIngredientsActions
  | TLoginActions
  | TLogoutActions
  | TOrderDetailsActions
  | TTotalPriceActions
  | TUpdateUserActions
  | TUserActions
  | TWSOrdersActions
  | TWSHistoryOrdersActions
  | TGetOrderActions;

// AppThunk
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActions
>;

// IIngredient
export interface IIngredient {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v?: number;
  _id: string;
}

// IConstrucrotIngredients
export interface IConstrucrotIngredients {
  id: string;
  ingredient: IIngredient;
}

export interface IUser {
  email: string;
  name: string;
}

// IValuesState
export interface IValuesState {
  [name: string]: string;
}

// IRefreshToken
export interface IRefreshToken {
  success: boolean;
  accessToken: string;
  refreshToken: string;
}

// api params
export type TSignUpParams = {
  name: string;
  email: string;
  password: string;
};
export type TSignInParams = Omit<TSignUpParams, 'name'>;
export type TForgotPasswordParams = Omit<TSignUpParams, 'name' | 'password'>;
export type TResetPasswordParams = Omit<TSignUpParams, 'name' | 'email'> & {
  token: string;
};

// orders
export type TOrder = {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};
export type TOrders = {
  success: boolean;
  orders: Array<TOrder>;
  total: number;
  totalToday: number;
};
