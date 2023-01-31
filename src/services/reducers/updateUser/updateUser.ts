import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  TUpdateUserActions,
} from '../../actions/updateUser/updateUser';

interface updateUserState {
  updateUserRequest: boolean;
  updateUserSuccess: boolean;
  updateUserFailed: boolean;
}

export const initialState: updateUserState = {
  updateUserRequest: false,
  updateUserSuccess: false,
  updateUserFailed: false,
};

export function updateUserReducer(
  state = initialState,
  action: TUpdateUserActions
): updateUserState {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        updateUserRequest: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updateUserRequest: false,
        updateUserSuccess: true,
        updateUserFailed: false,
      };
    case UPDATE_USER_FAILED:
      return {
        ...state,
        updateUserRequest: false,
        updateUserSuccess: false,
        updateUserFailed: true,
      };
    default:
      return state;
  }
}
