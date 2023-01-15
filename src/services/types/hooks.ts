import { AppDispatch, RootState } from './index';

import {
  useSelector as selectorHook,
  useDispatch as dispatchHook,
  TypedUseSelectorHook,
} from 'react-redux';

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
