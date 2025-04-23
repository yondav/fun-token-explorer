import {
  SwapTokenActionTypes,
  type SwapContextState,
  type SwapTokenReducerActions,
} from './swapToken.types';

export function swapTokenReducer(
  state: SwapContextState,
  { type, payload }: SwapTokenReducerActions
) {
  switch (type) {
    case SwapTokenActionTypes.SET_LOADING:
      return { ...state, loading: payload };

    case SwapTokenActionTypes.SET_SOURCE_DATA:
      return { ...state, sourceData: payload };

    case SwapTokenActionTypes.SET_TARGET_DATA:
      return { ...state, targetData: payload };

    case SwapTokenActionTypes.SET_SOURCE_TOKEN:
      return { ...state, sourceToken: payload };

    case SwapTokenActionTypes.SET_TARGET_TOKEN:
      return { ...state, targetToken: payload };

    case SwapTokenActionTypes.SET_USD_AMOUNT:
      return { ...state, usdAmount: payload };

    case SwapTokenActionTypes.SET_SOURCE_AMOUNT:
      return {
        ...state,
        sourceAmount:
          state.sourceData && state.usdAmount
            ? state.usdAmount / state.sourceData.unitPrice
            : null,
      };

    case SwapTokenActionTypes.SET_TARGET_AMOUNT:
      return {
        ...state,
        targetAmount:
          state.targetData && state.usdAmount
            ? state.usdAmount / state.targetData.unitPrice
            : null,
      };

    default:
      return state;
  }
}
