// import ingredient details actions
import {
  GET_INGREDIENT_DETAILS,
  REMOVE_INGREDIENT_DETAILS,
  TIngredientDetailsActions,
} from '../../actions/ingredientDetails/ingredientDetails';
import { IIngredient } from '../../types';

interface IIngredientDetailsState {
  ingredientDetails: IIngredient | null;
}

// ingredient details initial state
export const ingredientDetailsInitialState: IIngredientDetailsState = {
  ingredientDetails: null,
};

// ingredient details reducer
export function ingredientDetailsReducer(
  state = ingredientDetailsInitialState,
  action: TIngredientDetailsActions
): IIngredientDetailsState {
  switch (action.type) {
    case GET_INGREDIENT_DETAILS:
      return {
        ingredientDetails: action.ingredientDetails,
      };
    case REMOVE_INGREDIENT_DETAILS:
      return {
        ingredientDetails: null,
      };
    default:
      return state;
  }
}
