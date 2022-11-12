const BASE_URL = 'https://norma.nomoreparties.space';

function checkResponse(res) {
	if (res.ok) {
		return res.json();
	}

	return res.json()
		.then((res) => { throw new Error(res) })
};

export function getIngredients() {
	return fetch(`${BASE_URL}/api/ingredients`)
		.then(checkResponse)
};

export function setOrder(order) {
	return fetch(`${BASE_URL}/api/orders`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			"ingredients": order
		}),
	})
		.then(checkResponse)
};
