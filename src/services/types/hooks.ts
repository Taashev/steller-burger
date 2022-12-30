import { AppDispatch, AppThunk, RootState } from './index';

import {
  useSelector as selectorHook,
  useDispatch as dispatchHook,
  TypedUseSelectorHook,
} from 'react-redux';

export const useDispatch = () => dispatchHook<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
