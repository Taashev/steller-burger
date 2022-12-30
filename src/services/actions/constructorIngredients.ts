import { v1 } from 'uuid';
import { IIngredient, IConstrucrotIngredients } from '../types';

// action types
export const ADD_CONSTRUCTOR_BUN: 'ADD_CONSTRUCTOR_BUN' = 'ADD_CONSTRUCTOR_BUN';
export const ADD_CONSTRUCTOR_INGREDIENT: 'ADD_CONSTRUCTOR_INGREDIENT' =
  'ADD_CONSTRUCTOR_INGREDIENT';
export const UPDATE_CONSTRUCTOR_INGREDIENT: 'UPDATE_CONSTRUCTOR_INGREDIENT' =
  'UPDATE_CONSTRUCTOR_INGREDIENT';
export const REMOVE_CONSTRUCTOR_INGREDIENT: 'REMOVE_CONSTRUCTOR_INGREDIENT' =
  'REMOVE_CONSTRUCTOR_INGREDIENT';
export const CLEAR_CONSTRUCTOR: 'CLEAR_CONSTRUCTOR' = 'CLEAR_CONSTRUCTOR';

// actions interface
export interface IAddConstructorBun {
  readonly type: typeof ADD_CONSTRUCTOR_BUN;
  readonly bun: IIngredient;
}
export interface IAddConstructorIngredient {
  readonly type: typeof ADD_CONSTRUCTOR_INGREDIENT;
  readonly ingredient: IConstrucrotIngredients;
}
export interface IUpdateConstructorIngredient {
  readonly type: typeof UPDATE_CONSTRUCTOR_INGREDIENT;
  readonly constructorIngredients: IConstrucrotIngredients[];
}
export interface IRemoveConstructorIngredient {
  readonly type: typeof REMOVE_CONSTRUCTOR_INGREDIENT;
  readonly id: string | undefined;
}
export interface IClearConstructor {
  readonly type: typeof CLEAR_CONSTRUCTOR;
}
export type TConnstructorActions =
  | IAddConstructorBun
  | IAddConstructorIngredient
  | IUpdateConstructorIngredient
  | IRemoveConstructorIngredient
  | IClearConstructor;

// actions
export function addConstructorBun(
  ingredient: IIngredient
): TConnstructorActions {
  return { type: ADD_CONSTRUCTOR_BUN, bun: ingredient };
}
export function addConstructorIngredient(
  ingredient: IIngredient
): TConnstructorActions {
  return {
    type: ADD_CONSTRUCTOR_INGREDIENT,
    ingredient: { ingredient, id: v1() },
  };
}
export function updateConstructorIngredient(
  newCards: IConstrucrotIngredients[]
): TConnstructorActions {
  return {
    type: UPDATE_CONSTRUCTOR_INGREDIENT,
    constructorIngredients: newCards,
  };
}
export function removeConstructorIngredient(
  id: string | undefined
): TConnstructorActions {
  return { type: REMOVE_CONSTRUCTOR_INGREDIENT, id };
}
export function clearConstructor(): TConnstructorActions {
  return { type: CLEAR_CONSTRUCTOR };
}
