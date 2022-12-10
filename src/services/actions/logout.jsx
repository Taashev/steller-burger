import { signOut } from "../../utils/Api";
import { deleteCookie } from "../../utils/cookie";
import { deleteUser } from "./user";

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export function logout() {
	return async function(dispatch) {
		dispatch({ type: LOGOUT_REQUEST });

		try {
			const response = await signOut();

			if (response && response.success) {
				deleteCookie('accessToken');
				deleteCookie('refreshToken');
				dispatch(deleteUser());
			}
		} catch(err) {
			console.log(err);
		}
	};
};
