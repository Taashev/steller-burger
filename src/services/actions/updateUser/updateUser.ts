import { getUser } from '../user/user';
import { withRefreshToken } from '../../../utils/refreshToken';
import { updateUser as ApiUpdateUser } from '../../../utils/Api';
import { AppDispatch, AppThunk, IUser, IValuesState } from '../../types';

// action types
export const UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST' = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS' = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED: 'UPDATE_USER_FAILED' = 'UPDATE_USER_FAILED';

// action interface
export interface IUpdateUserRequest {
  readonly type: typeof UPDATE_USER_REQUEST;
}
export interface IUpdateUserSuccess {
  readonly type: typeof UPDATE_USER_SUCCESS;
}
export interface IUpdateUserFailed {
  readonly type: typeof UPDATE_USER_FAILED;
}
export type TUpdateUserActions =
  | IUpdateUserRequest
  | IUpdateUserSuccess
  | IUpdateUserFailed;

// actions
export function updateUserRequest(): TUpdateUserActions {
  return { type: UPDATE_USER_REQUEST };
}
export function updateUserSuccess(): TUpdateUserActions {
  return { type: UPDATE_USER_SUCCESS };
}
export function updateUserFailed(): TUpdateUserActions {
  return { type: UPDATE_USER_FAILED };
}

// action thunk
export function updateUser(data: IValuesState): AppThunk {
  return async function (dispatch: AppDispatch) {
    dispatch(updateUserRequest());

    try {
      const response: IUser & { success: boolean } = await withRefreshToken(
        ApiUpdateUser,
        data
      );

      if (response.success) {
        dispatch(getUser());
        dispatch(updateUserSuccess());
      }
    } catch (err) {
      console.log(err);
      dispatch(updateUserFailed());
    }
  };
}
