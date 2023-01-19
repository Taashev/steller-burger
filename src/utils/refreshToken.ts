import { IRefreshToken } from '../services/types';
import { refreshToken as ApiRefreshToken } from './Api';
import { setCookie } from './cookie';

export async function withRefreshToken<T>(
  request: any,
  props?: {}
): Promise<T> {
  try {
    return await request(props);
  } catch (err) {
    if (err === 'jwt expired') {
      const refreshTokenResponse: IRefreshToken= await ApiRefreshToken();

      if (!refreshTokenResponse.success) {
        return Promise.reject(refreshTokenResponse);
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
}
