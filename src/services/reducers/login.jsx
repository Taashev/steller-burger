import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
} from '../actions/login';

const initialState = {

};

export function loginReducer(state = initialState, action) {
	switch(action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				
			};
		case LOGIN_SUCCESS:
			return {
				...state,

			}
		case LOGIN_FAILED:
			return {
				...state,

			}
		default:
			return state;
	};
};
