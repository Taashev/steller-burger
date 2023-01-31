import { mockOrder } from '../../../utils/mockConstants';
import {
  getOrderRequest,
  getOrderSuccess,
  getOrderFailed,
  getOrderClear,
} from '../../actions/getOrder/getOrder';

import { getOrderReducer, initialState } from './getOrder';

describe('Get order reducer', () => {
  it('get order request', () => {
    const expectedState = {
      ...initialState,
      getOrderRequest: true,
    };
    expect(getOrderReducer(initialState, getOrderRequest())).toEqual(
      expectedState
    );
  });

  it('get order success', () => {
    const expectedState = {
      ...initialState,
      getOrderRequest: false,
      getOrderSuccess: true,
      getOrderFailed: false,
      order: mockOrder,
    };
    expect(getOrderReducer(initialState, getOrderSuccess(mockOrder))).toEqual(
      expectedState
    );
  });

  it('get order failed', () => {
    const expectedState = {
      ...initialState,
      getOrderRequest: false,
      getOrderSuccess: false,
      getOrderFailed: true,
    };
    expect(getOrderReducer(initialState, getOrderFailed())).toEqual(
      expectedState
    );
  });

  it('get order clear', () => {
    const initialState = {
      getOrderRequest: false,
      getOrderSuccess: true,
      getOrderFailed: false,
      order: mockOrder,
    };
    const expectedState = {
      ...initialState,
      getOrderRequest: false,
      getOrderSuccess: false,
      getOrderFailed: false,
      order: null,
    };
    expect(getOrderReducer(initialState, getOrderClear())).toEqual(
      expectedState
    );
  });
});
