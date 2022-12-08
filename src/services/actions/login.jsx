import { signIn as ApiSignIn } from '../../utils/Api';
import { setCookie } from '../../utils/cookie';
import { getUser } from './user';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export function signIn(email, password) {
	return async function(dispatch) {
		dispatch({ type: LOGIN_REQUEST });

		try {
			const response = await ApiSignIn(email, password);

			if (response.success) {
				const accessToken = response.accessToken.split('Bearer ')[1];
				const refreshToken = response.refreshToken;
				setCookie('accessToken', accessToken);
				setCookie('refreshToken', refreshToken);

				dispatch(getUser());
				dispatch({ type: LOGIN_SUCCESS });
			}
		} catch(err) {
			dispatch({ type: LOGIN_FAILED });
		}
	};
};
