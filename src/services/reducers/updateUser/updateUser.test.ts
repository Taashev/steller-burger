import {
  updateUserRequest,
  updateUserSuccess,
  updateUserFailed,
} from '../../actions/updateUser/updateUser';

import { updateUserReducer, initialState } from './updateUser';

describe('Update user reducer', () => {
  it('update user request', () => {
    const expectedState = {
      ...initialState,
      updateUserRequest: true,
    };
    expect(updateUserReducer(initialState, updateUserRequest())).toEqual(
      expectedState
    );
  });

  it('update user success', () => {
    const expectedState = {
      ...initialState,
      updateUserRequest: false,
      updateUserSuccess: true,
      updateUserFailed: false,
    };
    expect(updateUserReducer(initialState, updateUserSuccess())).toEqual(
      expectedState
    );
  });

  it('update user failed', () => {
    const expectedState = {
      ...initialState,
      updateUserRequest: false,
      updateUserSuccess: false,
      updateUserFailed: true,
    };
    expect(updateUserReducer(initialState, updateUserFailed())).toEqual(
      expectedState
    );
  });
});
