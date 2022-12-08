import {
	UPDATE_USER_REQUEST,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAILED,
} from '../actions/updateUser';

const initialState = {
	updateUserRequest: false,
	updateUserSuccess: false,
	updateUserFailed: false,
};

export function updateUserReducer(state = initialState, action) {
	switch(action.type) {
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
};
