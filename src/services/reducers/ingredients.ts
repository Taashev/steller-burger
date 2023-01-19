// import ingredients actions
import {
  GET_INGREDIENTS_REQURED,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  TIngredientsActions,
} from '../actions/ingredients';
import { IIngredient } from '../types';

interface IIngredientsState {
  ingredientsRequest: boolean;
  ingredientsSuccess: boolean;
  ingredientsFailed: boolean;

  ingredients: IIngredient[];
}

// ingredients initial state
const IngredientsInitialState: IIngredientsState = {
  ingredientsRequest: false,
  ingredientsSuccess: false,
  ingredientsFailed: false,

  ingredients: [],
};

// burger ingredients reducer
export function burgerIngredientsReducer(
  state = IngredientsInitialState,
  action: TIngredientsActions
): IIngredientsState {
  switch (action.type) {
    case GET_INGREDIENTS_REQURED:
      return { ...state, ingredientsRequest: true };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsSuccess: true,
        ingredientsFailed: false,
        ingredients: action.data,
      };
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsSuccess: false,
        ingredientsFailed: true,
      };
    default:
      return state;
  }
}
