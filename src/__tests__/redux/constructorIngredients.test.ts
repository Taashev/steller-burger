import {
  addConstructorBun,
  removeConstructorIngredient,
  ADD_CONSTRUCTOR_INGREDIENT,
} from '../../services/actions/constructorIngredients';

import {
  constructorInitialState,
  constructorReducer,
} from '../../services/reducers/constructorIngredients';

import { mockIngredient } from '../../utils/mockConstants';

describe('Constructor reducer', () => {
	
  // case add counstructor bun
  it('add constructor bun', () => {
    const expectedState = {
      ...constructorInitialState,
      constructorBun: mockIngredient,
    };

    expect(
      constructorReducer(
        constructorInitialState,
        addConstructorBun(mockIngredient)
      )
    ).toEqual(expectedState);
  });

  // case add constructor ingredient
  it('add constructor ingredient', () => {
    const action = {
      type: ADD_CONSTRUCTOR_INGREDIENT,
      ingredient: { mockIngredient, id: 'id' },
    } as any;
		
    const expectedState = {
      ...constructorInitialState,
      constructorIngredients: [{ mockIngredient, id: 'id' }],
    };

    expect(constructorReducer(constructorInitialState, action)).toEqual(
      expectedState
    );
  });

  // case remove constructor ingredient
  it('remove constructor ingredient', () => {
    const initialState = {
      ...constructorInitialState,
      constructorIngredients: [
        { ingredient: { ...mockIngredient }, id: '1' },
        { ingredient: { ...mockIngredient }, id: '2' },
      ],
    };

    const expectedState = {
      ...constructorInitialState,
      constructorIngredients: [{ ingredient: { ...mockIngredient }, id: '2' }],
    };

    expect(
      constructorReducer(initialState, removeConstructorIngredient('1'))
    ).toEqual(expectedState);
  });
});
