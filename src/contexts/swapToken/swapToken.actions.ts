import type { Dispatch } from 'react';

import type {
  FocusedTokenAction,
  InputTypeAction,
  LoadingAction,
  RealTimeAction,
  SourceAmountAction,
  SourceDataAction,
  SourceTokenAction,
  TargetAmountAction,
  TargetDataAction,
  TargetTokenAction,
  USDAmountAction,
} from './swapToken.types';
import { SwapTokenActionTypes } from './swapToken.types';

/**
 * Sets the currently selected source token.
 * Triggers a fetch for metadata and pricing based on the new token.
 */
export const setSourceToken =
  (dispatch: Dispatch<SourceTokenAction>) =>
  (payload: SourceTokenAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_SOURCE_TOKEN, payload });
  };

/**
 * Sets the currently selected target token.
 * Triggers a fetch for metadata and pricing based on the new token.
 */
export const setTargetToken =
  (dispatch: Dispatch<TargetTokenAction>) =>
  (payload: TargetTokenAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_TARGET_TOKEN, payload });
  };

/**
 * Sets the user-input USD amount used for conversion.
 * Automatically updates the derived token amounts in the reducer.
 */
export const setUsdAmount =
  (dispatch: Dispatch<USDAmountAction>) =>
  (payload: USDAmountAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_USD_AMOUNT, payload });
  };

/**
 * Stores the resolved metadata and price info for the source token.
 * Typically called after fetching via the API.
 */
export const setSourceData =
  (dispatch: Dispatch<SourceDataAction>) =>
  (payload: SourceDataAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_SOURCE_DATA, payload });
  };

/**
 * Stores the resolved metadata and price info for the target token.
 * Typically called after fetching via the API.
 */
export const setTargetData =
  (dispatch: Dispatch<TargetDataAction>) =>
  (payload: TargetDataAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_TARGET_DATA, payload });
  };

/**
 * Updates the global loading state while async token fetches are in progress.
 */
export const setLoading =
  (dispatch: Dispatch<LoadingAction>) =>
  (payload: LoadingAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_LOADING, payload });
  };

/**
 * Sets the user-input source amount used for conversion.
 * Automatically updates the derived token amounts in the reducer.
 */
export const setSourceAmount =
  (dispatch: Dispatch<SourceAmountAction>) =>
  (payload: SourceAmountAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_SOURCE_AMOUNT, payload });
  };

/**
 * Sets the user-input target amount used for conversion.
 * Automatically updates the derived token amounts in the reducer.
 */
export const setTargetAmount =
  (dispatch: Dispatch<TargetAmountAction>) =>
  (payload: TargetAmountAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_TARGET_AMOUNT, payload });
  };

/**
 * Sets the input type we are tracking to calculate all values.
 */
export const setInputType =
  (dispatch: Dispatch<InputTypeAction>) =>
  (payload: InputTypeAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_INPUT_TYPE, payload });
  };

/**
 * Sets the token card that is currently in focus.
 */
export const setFocusedToken =
  (dispatch: Dispatch<FocusedTokenAction>) =>
  (payload: FocusedTokenAction['payload']) => {
    dispatch({ type: SwapTokenActionTypes.SET_FOCUSED_TOKEN, payload });
  };

/**
 * Sets user preference for real time token updates.
 */
export const setRealTime =
  (dispatch: Dispatch<RealTimeAction>) =>
  (payload: RealTimeAction['payload']) => {
    window.localStorage.setItem('realTime', JSON.stringify(payload));
    dispatch({ type: SwapTokenActionTypes.SET_REAL_TIME, payload });
  };
