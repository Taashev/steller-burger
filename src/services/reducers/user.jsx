import {
	USER_REQUEST,
	USER_SUCCESS,
	USER_FAILED,
	USER_DELETE,
} from '../actions/user';

const initialState = {
	userRequest: false,
	userSuccess: false,
	userFailed: false,

	user: null,
};

export function userReducer(state = initialState, action) {
	switch(action.type) {
		case USER_REQUEST:
			return {
				...state,
				userRequest: true,
			};
		case USER_SUCCESS:
			return {
				...state,
				userRequest: false,
				userSuccess: true,
				userFailed: false,
				user: action.user,
			};
		case USER_FAILED:
			return {
				...state,
				userRequest: false,
				userSuccess: false,
				userFailed: true,
			};
		case USER_DELETE:
			return {
				...state,
				userRequest: false,
				userSuccess: false,
				userFailed: false,
				user: null,
			};
		default:
			return state;
	}
};
