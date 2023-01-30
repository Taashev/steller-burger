import {
  logoutRequest,
  logoutSuccess,
  logoutFailed,
} from '../../actions/logout/logout';

import { logoutReducer, initialState } from './logout';

describe('logout reducer', () => {
  it('logout requred', () => {
    const expectedState = {
      ...initialState,
      logoutRequest: true,
    };
    expect(logoutReducer(initialState, logoutRequest())).toEqual(expectedState);
  });

  it('logout success', () => {
    const expectedState = {
      ...initialState,
      logoutRequest: false,
      logoutSuccess: true,
      logoutFailed: false,
    };
    expect(logoutReducer(initialState, logoutSuccess())).toEqual(expectedState);
  });

  it('logout failed', () => {
    const expectedState = {
      ...initialState,
      logoutRequest: false,
      logoutSuccess: false,
      logoutFailed: true,
    };
    expect(logoutReducer(initialState, logoutFailed())).toEqual(expectedState);
  });
});
