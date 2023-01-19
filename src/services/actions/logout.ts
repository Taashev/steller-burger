import { signOut } from '../../utils/Api';
import { deleteCookie } from '../../utils/cookie';
import { userDelete } from './user';
import { AppDispatch, AppThunk } from '../types';

// action types
export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = 'LOGOUT_FAILED';

// action interface
export interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
}
export interface ILogoutFailed {
  readonly type: typeof LOGOUT_FAILED;
}
export type TLogoutActions = ILogoutRequest | ILogoutSuccess | ILogoutFailed;

// actions
export function logoutRequest(): TLogoutActions {
  return { type: LOGOUT_REQUEST };
}
export function logoutSuccess(): TLogoutActions {
  return { type: LOGOUT_SUCCESS };
}
export function logoutFailed(): TLogoutActions {
  return { type: LOGOUT_FAILED };
}

// action thunk
export function logout(): AppThunk {
  return async function (dispatch: AppDispatch) {
    dispatch(logoutRequest());

    try {
      const response: any = await signOut();

      if (response && response.success) {
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        dispatch(userDelete());
        dispatch(logoutSuccess());
      }
    } catch (err) {
      console.log(err);
      dispatch(logoutFailed());
    }
  };
}
