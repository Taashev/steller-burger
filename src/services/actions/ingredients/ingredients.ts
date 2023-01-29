import { getIngredients as ApiGetIngredients } from '../../../utils/Api';
import { AppDispatch, AppThunk, IIngredient } from '../../types';

// action types
export const GET_INGREDIENTS_REQURED: 'GET_INGREDIENTS_REQURED' =
  'GET_INGREDIENTS_REQURED';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' =
  'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' =
  'GET_INGREDIENTS_FAILED';

// action interface
export interface IGetIngredientsRequred {
  readonly type: typeof GET_INGREDIENTS_REQURED;
}
export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly data: IIngredient[];
}
export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}
export type TIngredientsActions =
  | IGetIngredientsRequred
  | IGetIngredientsSuccess
  | IGetIngredientsFailed;

// actions
function getIngredientsRequred(): TIngredientsActions {
  return { type: GET_INGREDIENTS_REQURED };
}
function getIngredientsSuccess(data: IIngredient[]): TIngredientsActions {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    data,
  };
}
function getIngredientsFailed(): TIngredientsActions {
  return { type: GET_INGREDIENTS_FAILED };
}

// action thunk
export function getIngredients(): AppThunk {
  return async function (dispatch: AppDispatch) {
    dispatch(getIngredientsRequred());

    try {
      const response: any = await ApiGetIngredients();
      const data = response.data;

      dispatch(getIngredientsSuccess(data));
    } catch (err) {
      dispatch(getIngredientsFailed());
    }
  };
}
