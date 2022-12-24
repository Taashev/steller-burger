import { getUser as ApiGetUser } from "../../utils/Api";
import { withRefreshToken } from "../../utils/refreshToken";

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILED = 'USER_FAILED';
export const USER_DELETE = 'USER_DELETE';

export function getUser() {
	return async function(dispatch) {
		dispatch({ type: USER_REQUEST });

		try {
			const getUserResponse = await withRefreshToken(ApiGetUser);

			if (getUserResponse.success && getUserResponse) {
				dispatch({ type: USER_SUCCESS, user: getUserResponse.user });
			}
		} catch(err) {
			dispatch({ type: USER_FAILED });
		}
	};
};

export function deleteUser() {
	return function(dispatch) {
		dispatch({ type: USER_DELETE });
	};
};
