import { signUp as ApiSignUp } from "../../utils/Api";

export const SET_REGISTER = 'SET_REGISTER';
export const SET_REGISTER_SUCCESS = 'SET_REGISTER_SUCCESS';
export const SET_REGISTER_FAILED = 'SET_REGISTER_FAILED';

export function signUp (email, password, name) {
	return async function(dispatch) {
		dispatch({ type: SET_REGISTER });

		try {
			const response = await ApiSignUp(email, password, name);

			if (response && response.success) {
				dispatch({
					type: SET_REGISTER_SUCCESS,
				});
			} else {
				dispatch({
					type: SET_REGISTER_FAILED,
				});
			}
		} catch (err) {
			dispatch({ type: SET_REGISTER_FAILED })
		}
	};
};
