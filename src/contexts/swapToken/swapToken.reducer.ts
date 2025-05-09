import { calculations, formatAmount } from '../../utils';

import { FALLBACK_DECIMAL_PRECISION } from './swapToken.constants';
import {
  SwapTokenActionTypes,
  type SwapContextState,
  type SwapTokenReducerActions,
} from './swapToken.types';

/**
 * Reducer function for managing swap context state.
 *
 * Handles updates to tokens, input amounts (USD, source, target),
 * metadata from the API, and loading flags.
 * Automatically recalculates dependent amounts based on the active input type.
 *
 * @param state - The current state of the swap context
 * @param action - The dispatched action to update part of the state
 * @returns The updated state object
 */
export function swapTokenReducer(
  state: SwapContextState,
  { type, payload }: SwapTokenReducerActions
) {
  switch (type) {
    case SwapTokenActionTypes.SET_LOADING:
      return { ...state, loading: payload };

    case SwapTokenActionTypes.SET_REAL_TIME:
      return { ...state, realTime: payload };

    case SwapTokenActionTypes.SET_INPUT_TYPE:
      return { ...state, inputType: payload };

    case SwapTokenActionTypes.SET_FOCUSED_TOKEN:
      return { ...state, focusedToken: payload };

    case SwapTokenActionTypes.SET_SOURCE_TOKEN:
      return { ...state, sourceToken: payload };

    case SwapTokenActionTypes.SET_TARGET_TOKEN:
      return { ...state, targetToken: payload };

    case SwapTokenActionTypes.SET_SOURCE_DATA:
      return {
        ...state,
        sourceData: payload,
        sourceAmount: calculations.fromUsd(state.usdAmount.value ?? 0, payload),
      };

    case SwapTokenActionTypes.SET_TARGET_DATA:
      return {
        ...state,
        targetData: payload,
        targetAmount: calculations.fromUsd(state.usdAmount.value ?? 0, payload),
      };

    case SwapTokenActionTypes.SET_USD_AMOUNT:
      return {
        ...state,
        usdAmount: formatAmount(payload, 2, '$'),
        sourceAmount: calculations.fromUsd(payload, state.sourceData),
        targetAmount: calculations.fromUsd(payload, state.targetData),
      };

    case SwapTokenActionTypes.SET_SOURCE_AMOUNT: {
      return {
        ...state,
        usdAmount: formatAmount(
          calculations.usdFromToken(payload, state.sourceData),
          2,
          '$'
        ),
        sourceAmount: formatAmount(
          payload,
          state.sourceData?.decimals ?? FALLBACK_DECIMAL_PRECISION,
          state.sourceData?.symbol
        ),
        targetAmount: calculations.targetFromSource(
          payload,
          state.sourceData,
          state.targetData
        ),
      };
    }

    case SwapTokenActionTypes.SET_TARGET_AMOUNT: {
      return {
        ...state,
        usdAmount: formatAmount(
          calculations.usdFromToken(payload, state.targetData),
          2,
          '$'
        ),
        targetAmount: formatAmount(
          payload,
          state.targetData?.decimals ?? FALLBACK_DECIMAL_PRECISION,
          state.targetData?.symbol
        ),
        sourceAmount: calculations.sourceFromTarget(
          payload,
          state.sourceData,
          state.targetData
        ),
      };
    }

    default:
      return state;
  }
}
