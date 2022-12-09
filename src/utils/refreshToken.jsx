import { refreshToken as ApiRefreshToken } from "./Api";
import { setCookie } from "./cookie";

export async function withRefreshToken(request, props={}) {
	try {
		return await request(props);
	} catch(err) {
		if (err === 'jwt expired') {
			const refreshTokenResponse = await ApiRefreshToken();
	
			if (!refreshTokenResponse.success) {
				return Promise.rejects(refreshTokenResponse);
			}

			const accessToken = refreshTokenResponse.accessToken.split('Bearer ')[1];
			const refreshToken = refreshTokenResponse.refreshToken;

			setCookie('accessToken', accessToken);
			setCookie('refreshToken', refreshToken);

			return request(props);
		} else {
			return Promise.reject(err);
		}
	}
};
