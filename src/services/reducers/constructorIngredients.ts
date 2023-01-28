// import constructor ingredients actions
import { IIngredient, IConstrucrotIngredients } from '../types';
import {
  ADD_CONSTRUCTOR_BUN,
  ADD_CONSTRUCTOR_INGREDIENT,
  UPDATE_CONSTRUCTOR_INGREDIENT,
  REMOVE_CONSTRUCTOR_INGREDIENT,
  CLEAR_CONSTRUCTOR,
  TConnstructorActions,
} from '../actions/constructorIngredients';

interface IConstructorState {
  constructorBun: IIngredient | null;
  constructorIngredients: IConstrucrotIngredients[];
}

// constructor ingredients initial state
export const constructorInitialState: IConstructorState = {
  constructorBun: null,
  constructorIngredients: [],
};

// constructor reducer
export function constructorReducer(
  state = constructorInitialState,
  action: TConnstructorActions
): IConstructorState {
  switch (action.type) {
    case ADD_CONSTRUCTOR_BUN:
      return {
        ...state,
        constructorBun: action.bun,
      };
    case ADD_CONSTRUCTOR_INGREDIENT:
      return {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients,
          action.ingredient,
        ],
      };
    case UPDATE_CONSTRUCTOR_INGREDIENT:
      return {
        ...state,
        constructorIngredients: [...action.constructorIngredients],
      };
    case REMOVE_CONSTRUCTOR_INGREDIENT:
      return {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients.filter(({ id }) => id !== action.id),
        ],
      };
    case CLEAR_CONSTRUCTOR:
      return {
        constructorBun: null,
        constructorIngredients: [],
      };
    default:
      return state;
  }
}
