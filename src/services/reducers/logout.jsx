import {
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	LOGOUT_FAILED,
} from '../actions/logout';

const initialState = {
	logoutRequest: false,
	logoutSuccess: false,
	logoutFailed: false,
};

export function logoutReducer(state = initialState, action) {
	switch(action.type) {
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
	};
};
