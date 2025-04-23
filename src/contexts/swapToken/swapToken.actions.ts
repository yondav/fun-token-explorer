import type { Dispatch } from 'react';

import type {
  LoadingAction,
  SourceAmountAction,
  SourceDataAction,
  SourceTokenAction,
  TargetAmountAction,
  TargetDataAction,
  TargetTokenAction,
  USDAmountAction,
} from './swapToken.types';
import { SwapTokenActionTypes } from './swapToken.types';

export const setSourceToken =
  (dispatch: Dispatch<SourceTokenAction>) =>
  (payload: SourceTokenAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_SOURCE_TOKEN, payload });
  };

export const setTargetToken =
  (dispatch: Dispatch<TargetTokenAction>) =>
  (payload: TargetTokenAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_TARGET_TOKEN, payload });
  };

export const setUSDAmount =
  (dispatch: Dispatch<USDAmountAction>) =>
  (payload: USDAmountAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_USD_AMOUNT, payload });
  };

export const setSourceData =
  (dispatch: Dispatch<SourceDataAction>) =>
  (payload: SourceDataAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_SOURCE_DATA, payload });
  };

export const setTargetData =
  (dispatch: Dispatch<TargetDataAction>) =>
  (payload: TargetDataAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_TARGET_DATA, payload });
  };

export const setLoading =
  (dispatch: Dispatch<LoadingAction>) =>
  (payload: LoadingAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_LOADING, payload });
  };

export const setSourceAmount =
  (dispatch: Dispatch<SourceAmountAction>) =>
  (payload: SourceAmountAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_SOURCE_AMOUNT, payload });
  };

export const setTargetAmount =
  (dispatch: Dispatch<TargetAmountAction>) =>
  (payload: TargetAmountAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_TARGET_AMOUNT, payload });
  };
