import { getIngredients as ApiGetIngredients } from '../../utils/Api';
import { SET_ORDER_DETAILS_FAILED } from './orderDetails';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export function getIngredients() {
	return async function(dispatch) {
		dispatch({ type: GET_INGREDIENTS });

		try {
			const response = await ApiGetIngredients();

			dispatch({
				type: GET_INGREDIENTS_SUCCESS,
				data: response.data,
			});
		} catch(err) {
			dispatch({ type: SET_ORDER_DETAILS_FAILED });
		}
	};
};
