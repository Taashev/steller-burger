export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
export const REMOVE_TOTAL_PRICE = 'REMOVE_TOTAL_PRICE';

export function setTotalPrice(price) {
	return { type: SET_TOTAL_PRICE, payload: price };
};

export function removeTotalPrice(price) {
	return { type: REMOVE_TOTAL_PRICE, payload: price };
};
