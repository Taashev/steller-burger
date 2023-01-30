import {
  wsOrdersSuccess,
  wsOrdersError,
  wsOrdersClosed,
  wsOrdersGetMessage,
} from '../../actions/wsOrdersAction/wsOrdersAction';

import { WSOrdersReducer, initialState } from './wsOrdersReducer';

describe('WS history orders reducer', () => {
  it('ws history orders success', () => {
    const expectedState = {
      ...initialState,
      wsConnected: true,
      error: undefined,
    };
    expect(WSOrdersReducer(initialState, wsOrdersSuccess({} as any))).toEqual(
      expectedState
    );
  });

  it('wh history orders error', () => {
    const expectedState = {
      ...initialState,
      wsConnected: false,
      error: {},
    };
    expect(WSOrdersReducer(initialState, wsOrdersError({} as any))).toEqual(
      expectedState
    );
  });

  it('ws history orders closed', () => {
    const expectedState = {
      ...initialState,
      wsConnected: false,
      error: undefined,
    };
    expect(WSOrdersReducer(initialState, wsOrdersClosed({} as any))).toEqual(
      expectedState
    );
  });

  it('ws hostory get message', () => {
    const expectedState = {
      ...initialState,
      message: {},
      error: undefined,
    };
    expect(
      WSOrdersReducer(initialState, wsOrdersGetMessage({} as any))
    ).toEqual(expectedState);
  });
});
