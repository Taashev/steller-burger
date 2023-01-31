import { mockUser } from '../../../utils/mockConstants';

import {
  userRequest,
  userSuccess,
  userFailed,
  userDelete,
} from '../../actions/user/user';

import { userReducer, initialState } from './user';

describe('User reducer', () => {
  it('user request', () => {
    const expectedState = {
      ...initialState,
      userRequest: true,
    };
    expect(userReducer(initialState, userRequest())).toEqual(expectedState);
  });

  it('user success', () => {
    const expectedState = {
      ...initialState,
      userRequest: false,
      userSuccess: true,
      userFailed: false,
      user: mockUser,
    };
    expect(userReducer(initialState, userSuccess(mockUser))).toEqual(
      expectedState
    );
  });

  it('user failed', () => {
    const expectedState = {
      ...initialState,
      userRequest: false,
      userSuccess: false,
      userFailed: true,
    };
    expect(userReducer(initialState, userFailed())).toEqual(expectedState);
  });

  it('user delete', () => {
    const initialState = {
      userRequest: false,
      userSuccess: false,
      userFailed: false,
      user: mockUser,
    };
    const expectedState = {
      ...initialState,
      userRequest: false,
      userSuccess: false,
      userFailed: false,
      user: null,
    };
    expect(userReducer(initialState, userDelete())).toEqual(expectedState);
  });
});
