import { refreshToken as ApiRefreshToken } from "./Api";
import { setCookie } from "./cookie";

export async function whiteRefreshToken(request) {
	try {
		return await request();
	} catch(err) {
		const refreshTokenResponse = await ApiRefreshToken();

		if (refreshTokenResponse && refreshTokenResponse.success) {
			const accessToken = refreshTokenResponse.accessToken.split('Bearer ')[1];
			const refreshToken = refreshTokenResponse.refreshToken;

			setCookie('accessToken', accessToken, { expires: 1200 }); // 20min
			setCookie('refreshToken', refreshToken, { expires: 86_400 }); // 24h

			return request();
		} else {
			console.log(err);
		}
	}
};
