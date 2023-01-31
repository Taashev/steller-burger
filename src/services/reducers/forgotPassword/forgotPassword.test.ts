import {
  forgotPasswordRequred,
  forgotPasswordSuccess,
  forgotPasswordSFailed,
} from '../../actions/forgotPassword/forgotPassword';

import { forgotPasswordReducer, initialState } from './forgotPassword';

describe('Forgot password reducer', () => {
  it('forgot passowrd request', () => {
    const expectedState = { ...initialState, forgotPasswordRequired: true };
    expect(
      forgotPasswordReducer(initialState, forgotPasswordRequred())
    ).toEqual(expectedState);
  });
  it('forgot passowrd success', () => {
    const expectedState = {
      ...initialState,
      forgotPasswordRequired: false,
      forgotPasswordSuccess: true,
      forgotPasswordFailded: false,
    };
    expect(
      forgotPasswordReducer(initialState, forgotPasswordSuccess())
    ).toEqual(expectedState);
  });
  it('forgot passowrd failed', () => {
    const expectedState = {
      ...initialState,
      forgotPasswordRequired: false,
      forgotPasswordSuccess: false,
      forgotPasswordFailded: true,
    };
    expect(
      forgotPasswordReducer(initialState, forgotPasswordSFailed())
    ).toEqual(expectedState);
  });
});
