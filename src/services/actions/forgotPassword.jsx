import { setForgotPassword } from "../../utils/Api";

export const FORGOT_PASSWORD_REQURED = 'FORGOT_PASSWORD_REQURED';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';

export function forgotPassword(email) {
	return async function(dispatch) {
		dispatch({ type: FORGOT_PASSWORD_REQURED });

		try{
			const response = await setForgotPassword(email);

			if (response.success) {
				dispatch({ type: FORGOT_PASSWORD_SUCCESS });
			}
		} catch(err) {
			dispatch({ type: FORGOT_PASSWORD_FAILED });
		}
	};
};
