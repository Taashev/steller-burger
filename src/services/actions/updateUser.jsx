import { updateUser as ApiUpdateUser } from "../../utils/Api";
import { withRefreshToken } from "../../utils/refreshToken";
import { getUser } from "./user";

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export function updateUser(data) {
	return async function(dispatch) {
		dispatch({ type: UPDATE_USER_REQUEST });

		try{
			const response = await withRefreshToken(ApiUpdateUser, data );

			if (response.success) {
				dispatch(getUser());
				dispatch({ type: UPDATE_USER_SUCCESS });
			}
		} catch(err) {
			console.log(err);
		}
	};
};
