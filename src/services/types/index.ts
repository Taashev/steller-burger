import { store } from '../..';
import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';

// import actions
import { TConnstructorActions } from '../actions/constructorIngredients';
import { TForgotPasswordActions } from '../actions/forgotPassword';
import { TIngredientDetailsActions } from '../actions/ingredientDetails';
import { TIngredientsActions } from '../actions/ingredients';
import { TLoginActions } from '../actions/login';
import { TLogoutActions } from '../actions/logout';
import { TOrderDetailsActions } from '../actions/orderDetails';
import { TTotalPriceActions } from '../actions/totalPrice';
import { TUpdateUserActions } from '../actions/updateUser';
import { TUserActions } from '../actions/user';

// RootState
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch
export type AppDispatch = Dispatch<TApplicationActions>;

// TApplicationActions
export type TApplicationActions =
  | TConnstructorActions
  | TForgotPasswordActions
  | TIngredientDetailsActions
  | TIngredientsActions
  | TLoginActions
  | TLogoutActions
  | TOrderDetailsActions
  | TTotalPriceActions
  | TUpdateUserActions
  | TUserActions;

// AppThunk
export type AppThunk<TReturn = Promise<void>> = ThunkAction<
  TReturn,
  Action,
  RootState,
  TApplicationActions
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
