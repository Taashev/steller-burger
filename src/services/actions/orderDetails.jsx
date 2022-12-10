import { setOrder as ApiSetOrder } from '../../utils/Api';
import { clearConstructor } from './constructorIngredients';

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
				dispatch(clearConstructor())
			})
			.catch((err) => {
				console.log(err)
				dispatch({
					type: SET_ORDER_DETAILS_FAILED,
				});
			})
	};
};

export function clearOrderDetails() {
	return{ type: CLEAR_ORDER_DETAILS };
};
