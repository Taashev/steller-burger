import { getCookie } from './cookie';
import {
  TSignUp,
  TSignIn,
  TForgotPassword,
  TResetPassword,
} from '../services/types';

const BASE_URL: string = 'https://norma.nomoreparties.space';

function checkResponse(res: any): any {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((res: any) => {
    throw res.message;
  });
}

// get ingredients
export function getIngredients<T>(): Promise<T> {
  return fetch(`${BASE_URL}/api/ingredients`).then(checkResponse);
}

// set order
export function setOrder<T>(order: Array<string>): Promise<T> {
  return fetch(`${BASE_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('accessToken')}`,
    },
    body: JSON.stringify({
      ingredients: order,
    }),
  }).then(checkResponse);
}

// sign in
export function signIn<T>(data: TSignIn): Promise<T> {
  return fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

// sign out
export function signOut<T>(): Promise<T> {
  return fetch(`${BASE_URL}/api/auth/logout`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: getCookie('refreshToken') }),
  }).then(checkResponse);
}

// sing up
export function signUp<T>(data: TSignUp): Promise<T> {
  return fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

// refresh token
export function refreshToken<T>(): Promise<T> {
  return fetch(`${BASE_URL}/api/auth/token`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: getCookie('refreshToken') }),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then(checkResponse);
}

// get user
export function getUser<T>(): Promise<T> {
  return fetch(`${BASE_URL}/api/auth/user`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('accessToken')}`,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then(checkResponse);
}

// update user
export function updateUser<T>(data: { [name: string]: string }): Promise<T> {
  return fetch(`${BASE_URL}/api/auth/user`, {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('accessToken')}`,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  }).then(checkResponse);
}

// email reset password
export function setForgotPassword<T>(email: TForgotPassword): Promise<T> {
  return fetch(`${BASE_URL}/api/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then(checkResponse);
}

// reset password
export function setResetPassword<T>(data: TResetPassword): Promise<T> {
  return fetch(`${BASE_URL}/api/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}
