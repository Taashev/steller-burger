//! import {
// 	SET_REGISTER,
// 	SET_REGISTER_SUCCESS,
// 	SET_REGISTER_FAILED,
// } from '../actions/register';

// const initialState = {
// 	registerRequest: false,
// 	registerSuccess: false,
// 	registerFailed: false,
// };

// export function registerReducer(state = initialState, action) {
// 	switch(action.type) {
// 		case SET_REGISTER:
// 			return {
// 				...state,
// 				registerRequest: true,
// 			};
// 		case SET_REGISTER_SUCCESS:
// 			return {
// 				...state,
// 				registerRequest: false,
// 				registerSuccess: true,
// 				registerFailed: false,
// 			};
// 		case SET_REGISTER_FAILED:
// 			return {
// 				...state,
// 				registerRequest: false,
// 				registerSuccess: false,
// 				registerFailed: true,
// 			};
// 		default:
// 			return state;
// 	};
// };
