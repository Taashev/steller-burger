import {
  wsHistoryOrdersSuccess,
  wsHistoryOrdersError,
  wsHistoryOrdersClosed,
  wsHistoryOrdersGetMessage,
} from '../../actions/wsHistoryOrdersAction/wsHistoryOrdersAction';

import { WSHistoryOrdersReducer, initialState } from './wsHistoryOrdersActions';

describe('WS history orders reducer', () => {
  it('ws history orders success', () => {
    const expectedState = {
      ...initialState,
      wsConnected: true,
      error: undefined,
    };
    expect(
      WSHistoryOrdersReducer(initialState, wsHistoryOrdersSuccess({} as any))
    ).toEqual(expectedState);
  });

  it('wh history orders error', () => {
    const expectedState = {
      ...initialState,
      wsConnected: false,
      error: {},
    };
    expect(
      WSHistoryOrdersReducer(initialState, wsHistoryOrdersError({} as any))
    ).toEqual(expectedState);
  });

  it('ws history orders closed', () => {
    const expectedState = {
      ...initialState,
      wsConnected: false,
      error: undefined,
    };
    expect(
      WSHistoryOrdersReducer(initialState, wsHistoryOrdersClosed({} as any))
    ).toEqual(expectedState);
  });

  it('ws hostory get message', () => {
    const expectedState = {
      ...initialState,
      message: {},
      error: undefined,
    };
    expect(
      WSHistoryOrdersReducer(initialState, wsHistoryOrdersGetMessage({} as any))
    ).toEqual(expectedState);
  });
});
