import {
	FORGOT_PASSWORD_REQURED,
	FORGOT_PASSWORD_SUCCESS,
	FORGOT_PASSWORD_FAILED,
} from '../actions/forgotPassword';

const initialState = {
	forgotPasswordRequired: false,
	forgotPasswordSuccess: false,
	forgotPasswordFailded: false,
};

export function forgotPasswordReducer(state=initialState, action) {
	switch(action.type) {
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
	};
};
