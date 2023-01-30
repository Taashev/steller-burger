import {
  setOrderDetailsRequest,
  setOrderDetailsSuccess,
  setOrderDetailsFailed,
  clearOrderDetails,
} from '../../actions/orderDetails/orderDetails';

import { orderDetailsReducer, orderDetailsInitialState } from './orderDetails';

describe('order details reducer', () => {
  it('set order details request', () => {
    const expectedState = {
      ...orderDetailsInitialState,
      setOrderDetailsRequest: true,
    };
    expect(
      orderDetailsReducer(orderDetailsInitialState, setOrderDetailsRequest())
    ).toEqual(expectedState);
  });

  it('set order details success', () => {
    const expectedState = {
      ...orderDetailsInitialState,
      setOrderDetailsRequest: false,
      setOrderDetailsSeuccess: true,
      setOrderDetailsFailed: false,
      orderId: 1,
    };
    expect(
      orderDetailsReducer(orderDetailsInitialState, setOrderDetailsSuccess(1))
    ).toEqual(expectedState);
  });

  it('set order details failed', () => {
    const expectedState = {
      ...orderDetailsInitialState,
      setOrderDetailsRequest: false,
      setOrderDetailsSeuccess: false,
      setOrderDetailsFailed: true,
    };
    expect(
      orderDetailsReducer(orderDetailsInitialState, setOrderDetailsFailed())
    ).toEqual(expectedState);
  });

  it('clear order details', () => {
    const initialState = {
      setOrderDetailsRequest: false,
      setOrderDetailsSeuccess: true,
      setOrderDetailsFailed: false,
      orderId: 1,
    };
    const expectedState = {
      ...orderDetailsInitialState,
      setOrderDetailsSeuccess: false,
      orderId: null,
    };
    expect(orderDetailsReducer(initialState, clearOrderDetails())).toEqual(
      expectedState
    );
  });
});
