import { IIngredient } from '../../types';

// action types
export const GET_INGREDIENT_DETAILS: 'GET_INGREDIENT_DETAILS' =
  'GET_INGREDIENT_DETAILS';
export const REMOVE_INGREDIENT_DETAILS: 'REMOVE_INGREDIENT_DETAILS' =
  'REMOVE_INGREDIENT_DETAILS';

// action interface
export interface IGetIngredientDetails {
  readonly type: typeof GET_INGREDIENT_DETAILS;
  readonly ingredientDetails: IIngredient;
}
export interface IRemoveIngredientDetails {
  readonly type: typeof REMOVE_INGREDIENT_DETAILS;
}
export type TIngredientDetailsActions =
  | IGetIngredientDetails
  | IRemoveIngredientDetails;

// actions
export function getIngredientDetails(
  ingredient: IIngredient
): TIngredientDetailsActions {
  return { type: GET_INGREDIENT_DETAILS, ingredientDetails: ingredient };
}
export function removeIngredientDetails(): TIngredientDetailsActions {
  return { type: REMOVE_INGREDIENT_DETAILS };
}
