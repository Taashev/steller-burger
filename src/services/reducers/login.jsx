import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
} from '../actions/login';

const initialState = {
	loginRequest: false,
	loginSuccess: false,
	loginFailed: false,
};

export function loginReducer(state = initialState, action) {
	switch(action.type) {
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
			}
		case LOGIN_FAILED:
			return {
				...state,
				loginRequest: false,
				loginSuccess: false,
				loginFailed: true,
			}
		default:
			return state;
	};
};
