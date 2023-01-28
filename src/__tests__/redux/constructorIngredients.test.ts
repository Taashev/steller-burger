import { addConstructorBun } from '../../services/actions/constructorIngredients';

import {
  constructorInitialState,
  constructorReducer,
} from '../../services/reducers/constructorIngredients';

describe('Reducer', () => {
  it('constructorReducer', () => {
    expect(
      constructorReducer(constructorInitialState, addConstructorBun({} as any))
    ).toEqual({ ...constructorInitialState, constructorBun: {} });
  });
});
