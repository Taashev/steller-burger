import { getUser as ApiGetUser } from '../../utils/Api';
import { withRefreshToken } from '../../utils/refreshToken';
import { AppDispatch, AppThunk, IUser } from '../types';

// action types
export const USER_REQUEST: 'USER_REQUEST' = 'USER_REQUEST';
export const USER_SUCCESS: 'USER_SUCCESS' = 'USER_SUCCESS';
export const USER_FAILED: 'USER_FAILED' = 'USER_FAILED';
export const USER_DELETE: 'USER_DELETE' = 'USER_DELETE';

// action interface
export interface IUserRequest {
  readonly type: typeof USER_REQUEST;
}
export interface IUserSuccess {
  readonly type: typeof USER_SUCCESS;
  readonly user: IUser;
}
export interface IUserFailed {
  readonly type: typeof USER_FAILED;
}
export interface IUserDelete {
  readonly type: typeof USER_DELETE;
}
export type TUserActions =
  | IUserRequest
  | IUserSuccess
  | IUserFailed
  | IUserDelete;

// actions
export function userRequest(): TUserActions {
  return { type: USER_REQUEST };
}
export function userSuccess(user: IUser): TUserActions {
  return { type: USER_SUCCESS, user };
}
export function userFailed(): TUserActions {
  return { type: USER_FAILED };
}
export function userDelete(): TUserActions {
  return { type: USER_DELETE };
}

// action thunk
export function getUser(): AppThunk {
  return async function (dispatch: AppDispatch) {
    dispatch(userRequest());

    try {
      const getUserResponse: any = await withRefreshToken(ApiGetUser);

      if (getUserResponse.success && getUserResponse) {
        dispatch(userSuccess(getUserResponse.user));
      }
    } catch (err) {
      console.log(err);
      dispatch(userFailed());
    }
  };
}
