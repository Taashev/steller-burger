import {
  loginRequred,
  loginSuccess,
  loginFailed,
} from '../../actions/login/login';

import { loginReducer, initialState } from './login';

describe('login reducer', () => {
  it('login requred', () => {
    const expectedState = {
      ...initialState,
      loginRequest: true,
    };
    expect(loginReducer(initialState, loginRequred())).toEqual(expectedState);
  });

  it('login success', () => {
    const expectedState = {
      ...initialState,
      loginRequest: false,
      loginSuccess: true,
      loginFailed: false,
    };
    expect(loginReducer(initialState, loginSuccess())).toEqual(expectedState);
  });

  it('login failed', () => {
    const expectedState = {
      ...initialState,
      loginRequest: false,
      loginSuccess: false,
      loginFailed: true,
    };
    expect(loginReducer(initialState, loginFailed())).toEqual(expectedState);
  });
});
