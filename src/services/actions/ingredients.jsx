import { getIngredients as ApiGetIngredients } from '../../utils/Api';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export function getIngredients() {
	return function(dispatch) {
		dispatch({ type: GET_INGREDIENTS });
		
		ApiGetIngredients()
			.then((res) => {
				if (res && res.success) {
					dispatch({
						type: GET_INGREDIENTS_SUCCESS,
						data: res.data,
					});
				}
			})
			.catch((err) => {
				dispatch({
					type: GET_INGREDIENTS_FAILED
				});
			})
	};
};
