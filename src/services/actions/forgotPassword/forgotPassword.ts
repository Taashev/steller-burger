import { setForgotPassword } from '../../../utils/Api';
import { AppDispatch, AppThunk, TForgotPasswordParams } from '../../types';

// action types
export const FORGOT_PASSWORD_REQURED: 'FORGOT_PASSWORD_REQURED' =
  'FORGOT_PASSWORD_REQURED';
export const FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS' =
  'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED: 'FORGOT_PASSWORD_FAILED' =
  'FORGOT_PASSWORD_FAILED';

// action interface
export interface IForgotPasswordRequred {
  readonly type: typeof FORGOT_PASSWORD_REQURED;
}
export interface IForgotPasswordSuccess {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}
export interface IForgotPasswordFailed {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
}
export type TForgotPasswordActions =
  | IForgotPasswordRequred
  | IForgotPasswordSuccess
  | IForgotPasswordFailed;

// actions
export function forgotPasswordRequred(): TForgotPasswordActions {
  return { type: FORGOT_PASSWORD_REQURED };
}
export function forgotPasswordSuccess(): TForgotPasswordActions {
  return { type: FORGOT_PASSWORD_SUCCESS };
}
export function forgotPasswordSFailed(): TForgotPasswordActions {
  return { type: FORGOT_PASSWORD_FAILED };
}

// action thunk
export function forgotPassword({ email }: TForgotPasswordParams): AppThunk {
  return async function (dispatch: AppDispatch) {
    dispatch(forgotPasswordRequred());

    try {
      const response: any = await setForgotPassword({ email });

      if (response.success) {
        dispatch(forgotPasswordSuccess());
      }
    } catch (err) {
      dispatch(forgotPasswordSFailed());
    }
  };
}
