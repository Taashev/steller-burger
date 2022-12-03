const BASE_URL = 'https://norma.nomoreparties.space';

function checkResponse(res) {
	if (res.ok) {
		return res.json();
	}

	return res.json()
		.then((res) => { throw new Error(res) })
};

// get ingredients
export function getIngredients() {
	return fetch(`${BASE_URL}/api/ingredients`)
		.then(checkResponse)
};

// set order
export function setOrder(order) {
	return fetch(`${BASE_URL}/api/orders`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			"ingredients": order
		}),
	}).then(checkResponse)
};

// sign in
export function signIn(email, password) {
	fetch(`${BASE_URL}/api/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password })
	}).then(checkResponse)
};

// sing up
export function signUp(email, password, name) {
	return fetch(`${BASE_URL}/api/auth/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
			password,
			name,
		}),
	}).then(checkResponse)
};

// email reset password
export function setForgotPassword(email) {
	return fetch(`${BASE_URL}/api/password-reset`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email })
	}).then(checkResponse)
};

// reset password
export function setResetPassword(password, token) {
	return fetch(`${BASE_URL}/api/password-reset/reset`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ password, token })
	}).then(checkResponse)
};
