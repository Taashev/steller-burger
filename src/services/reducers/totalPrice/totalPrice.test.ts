import {
  setTotalPrice,
  removeTotalPrice,
} from '../../actions/totalPrice/totalPrice';

import { totalPriceInitialState, totalPriceReducer } from './totalPrice';

describe('Total price reducer', () => {
  it('set total price', () => {
    const expectedState = { totalPrice: 1 };
    expect(totalPriceReducer(totalPriceInitialState, setTotalPrice(1))).toEqual(
      expectedState
    );
  });

  it('removeTotalPrice', () => {
    const initialState = { totalPrice: 1 };
    expect(totalPriceReducer(initialState, removeTotalPrice(1))).toEqual(
      totalPriceInitialState
    );
  });
});
