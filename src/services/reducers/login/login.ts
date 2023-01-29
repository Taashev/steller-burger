import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  TLoginActions,
} from '../../actions/login/login';

interface ILoginState {
  loginRequest: boolean;
  loginSuccess: boolean;
  loginFailed: boolean;
}

const initialState: ILoginState = {
  loginRequest: false,
  loginSuccess: false,
  loginFailed: false,
};

export function loginReducer(
  state = initialState,
  action: TLoginActions
): ILoginState {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginRequest: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginRequest: false,
        loginSuccess: true,
        loginFailed: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginRequest: false,
        loginSuccess: false,
        loginFailed: true,
      };
    default:
      return state;
  }
}
