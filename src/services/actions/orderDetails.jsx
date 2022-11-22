import { setOrder as ApiSetOrder } from '../../utils/Api';
import { CLEAR_CONSTRUCTOR } from './constructorIngredients';

export const SET_ORDER_DETAILS_REQUEST = 'SET_ORDER_DETAILS_REQUEST';
export const SET_ORDER_DETAILS_SUCCESS = 'SET_ORDER_DETAILS_SUCCESS';
export const SET_ORDER_DETAILS_FAILED = 'SET_ORDER_DETAILS_FAILED';
export const CLEAR_ORDER_DETAILS = 'CLEAR_ORDER_DETAILS';

export function setOrder(ingredients) {
	return function(dispatch) {
		dispatch({ type: SET_ORDER_DETAILS_REQUEST });

		ApiSetOrder(ingredients)
			.then((res) => {
				dispatch({
					type: SET_ORDER_DETAILS_SUCCESS,
					orderId: res.order.number,
				});
			})
			.then(_ => {
				dispatch({ type: CLEAR_CONSTRUCTOR })
			})
			.catch((err) => {
				console.log(err)
				dispatch({
					type: SET_ORDER_DETAILS_FAILED,
				});
			})
	};
};
