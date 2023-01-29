import {
  FORGOT_PASSWORD_REQURED,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
	TForgotPasswordActions
} from '../actions/forgotPassword';

interface IForgotPassword {
  forgotPasswordRequired: boolean;
  forgotPasswordSuccess: boolean;
  forgotPasswordFailded: boolean;
}

export const initialState: IForgotPassword = {
  forgotPasswordRequired: false,
  forgotPasswordSuccess: false,
  forgotPasswordFailded: false,
};

export function forgotPasswordReducer(
  state = initialState,
  action: TForgotPasswordActions
): IForgotPassword {
  switch (action.type) {
    case FORGOT_PASSWORD_REQURED:
      return {
        ...state,
        forgotPasswordRequired: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordRequired: false,
        forgotPasswordSuccess: true,
        forgotPasswordFailded: false,
      };
    case FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        forgotPasswordRequired: false,
        forgotPasswordSuccess: false,
        forgotPasswordFailded: true,
      };
    default:
      return state;
  }
}
