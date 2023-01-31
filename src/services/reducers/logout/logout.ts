import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  TLogoutActions,
} from '../../actions/logout/logout';

interface ILogoutState {
  logoutRequest: boolean;
  logoutSuccess: boolean;
  logoutFailed: boolean;
}

export const initialState: ILogoutState = {
  logoutRequest: false,
  logoutSuccess: false,
  logoutFailed: false,
};

export function logoutReducer(
  state = initialState,
  action: TLogoutActions
): ILogoutState {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        logoutRequest: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutRequest: false,
        logoutSuccess: true,
        logoutFailed: false,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        logoutRequest: false,
        logoutSuccess: false,
        logoutFailed: true,
      };
    default:
      return state;
  }
}
