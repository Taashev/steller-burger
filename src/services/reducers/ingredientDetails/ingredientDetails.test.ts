import { mockIngredient } from '../../../utils/mockConstants';

import {
  ingredientDetailsReducer,
  ingredientDetailsInitialState,
} from './ingredientDetails';

import {
  getIngredientDetails,
  removeIngredientDetails,
} from '../../actions/ingredientDetails/ingredientDetails';

describe('Ingredient details reducer', () => {
  it('get ingredient details', () => {
    const expectedState = { ingredientDetails: mockIngredient };
    expect(
      ingredientDetailsReducer(
        ingredientDetailsInitialState,
        getIngredientDetails(mockIngredient)
      )
    ).toEqual(expectedState);
  });

  it('remove ingredient details', () => {
    const initialState = { ingredientDetails: mockIngredient };
    expect(
      ingredientDetailsReducer(initialState, removeIngredientDetails())
    ).toEqual(ingredientDetailsInitialState);
  });
});
