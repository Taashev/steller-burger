// import order details actions
import {
	SET_ORDER_DETAILS_REQUEST,
	SET_ORDER_DETAILS_SUCCESS,
	SET_ORDER_DETAILS_FAILED,
	CLEAR_ORDER_DETAILS,
} from '../actions/orderDetails';

// order details initial state
const orderDetailsInitialState = {
	setOrderDetailsRequest: false,
	setOrderDetailsSeuccess: false,
	setOrderDetailsFailed: false,

	orderId: null,
};

// order details reducer
export function orderDetailsReducer(
	state = orderDetailsInitialState,
	action
) {
	switch(action.type) {
		case SET_ORDER_DETAILS_REQUEST:
			return {
				...state,
				setOrderDetailsRequest: true,
			};
		case SET_ORDER_DETAILS_SUCCESS:
			return {
				...state,
				setOrderDetailsRequest: false,
				setOrderDetailsSeuccess: true,
				setOrderDetailsFailed: false,
				orderId: action.orderId,
			};
		case SET_ORDER_DETAILS_FAILED:
			return {
				...state,
				setOrderDetailsRequest: false,
				setOrderDetailsSeuccess: false,
				setOrderDetailsFailed: true,
			}
		case CLEAR_ORDER_DETAILS:
			return {
				...state,
				setOrderDetailsSeuccess: false,
				orderId: null,
			};
		default:
			return state;
	};
};
