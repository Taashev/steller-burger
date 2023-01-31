import { mockIngredient } from '../../../utils/mockConstants';
import {
  getIngredientsRequred,
  getIngredientsSuccess,
  getIngredientsFailed,
} from '../../actions/ingredients/ingredients';

import {
  burgerIngredientsReducer,
  IngredientsInitialState,
} from './ingredients';

describe('ingredients reducer', () => {
  it('get ingredients requred', () => {
    const expectedState = {
      ...IngredientsInitialState,
      ingredientsRequest: true,
    };
    expect(
      burgerIngredientsReducer(IngredientsInitialState, getIngredientsRequred())
    ).toEqual(expectedState);
  });

  it('get ingredients success', () => {
    const expectedState = {
      ...IngredientsInitialState,
      ingredientsRequest: false,
      ingredientsSuccess: true,
      ingredientsFailed: false,
      ingredients: [mockIngredient],
    };
    expect(
      burgerIngredientsReducer(
        IngredientsInitialState,
        getIngredientsSuccess([mockIngredient])
      )
    ).toEqual(expectedState);
  });

  it('get ingredients failed', () => {
    const expectedState = {
      ...IngredientsInitialState,
      ingredientsRequest: false,
      ingredientsSuccess: false,
      ingredientsFailed: true,
    };
    expect(
      burgerIngredientsReducer(IngredientsInitialState, getIngredientsFailed())
    ).toEqual(expectedState);
  });
});
