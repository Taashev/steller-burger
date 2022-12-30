import { signIn as ApiSignIn } from '../../utils/Api';
import { setCookie } from '../../utils/cookie';
import { AppDispatch, TSignInParams } from '../types';
import { getUser } from './user';

// action types
export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_FAILED: 'LOGIN_FAILED' = 'LOGIN_FAILED';

// action interface
export interface ILoginRequred {
  readonly type: typeof LOGIN_REQUEST;
}
export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
}
export interface ILoginFailed {
  readonly type: typeof LOGIN_FAILED;
}
export type TLoginActions = ILoginRequred | ILoginSuccess | ILoginFailed;

// actions
function loginRequred(): TLoginActions {
  return { type: LOGIN_REQUEST };
}
function loginSuccess(): TLoginActions {
  return { type: LOGIN_SUCCESS };
}
function loginFailed(): TLoginActions {
  return { type: LOGIN_FAILED };
}

// action thunk
export function signIn(data: TSignInParams): any {
  return async function (dispatch: AppDispatch) {
    dispatch(loginRequred());

    try {
      const response: any = await ApiSignIn(data);

      if (response.success) {
        const accessToken = response.accessToken.split('Bearer ')[1];
        const refreshToken = response.refreshToken;
        setCookie('accessToken', accessToken);
        setCookie('refreshToken', refreshToken);

        dispatch(getUser());
        dispatch(loginSuccess());
      }
    } catch (err) {
      dispatch(loginFailed());
    }
  };
}
