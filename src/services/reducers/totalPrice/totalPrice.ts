// import total price action
import {
  SET_TOTAL_PRICE,
  REMOVE_TOTAL_PRICE,
  TTotalPriceActions,
} from '../../actions/totalPrice/totalPrice';

interface ITotalPriceState {
  totalPrice: number;
}

// total price initial state
const totalPriceInitialState: ITotalPriceState = {
  totalPrice: 0,
};

// total price reducer
export function totalPriceReducer(
  state = totalPriceInitialState,
  action: TTotalPriceActions
): ITotalPriceState {
  switch (action.type) {
    case SET_TOTAL_PRICE:
      return {
        totalPrice: state.totalPrice + action.payload,
      };
    case REMOVE_TOTAL_PRICE:
      return {
        totalPrice: state.totalPrice - action.payload,
      };
    default:
      return state;
  }
}
