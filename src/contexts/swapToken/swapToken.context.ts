import { createContext, useContext } from 'react';

import { SUPPORTED_TOKENS } from './swapToken.constants';
import type {
  SwapContextState,
  SwapContextStateActions,
} from './swapToken.types';

const browserPrefRealTime = window.localStorage.getItem('realTime');

/**
 * The default state for the swap context.
 * Preselects USDC as the source and ETH as the target, with a $100 default amount.
 * This state will be overridden by the provider once data loads.
 */
export const initialState: SwapContextState = {
  sourceToken: SUPPORTED_TOKENS.USDC,
  targetToken: SUPPORTED_TOKENS.ETH,
  usdAmount: { value: 100, display: '$100.00' },
  sourceData: null,
  targetData: null,
  loading: true,
  sourceAmount: { value: null, display: '0' },
  targetAmount: { value: null, display: '0' },
  inputType: 'usd',
  focusedToken: 'source',
  realTime: browserPrefRealTime ? JSON.parse(browserPrefRealTime) : false,
};

export const SwapContext = createContext<SwapContextState>(initialState);

/**
 * Separate context for exposing mutation actions that update the swap state.
 * This prevents unnecessary rerenders when only dispatch methods are needed.
 */
export const SwapContextActions = createContext<
  SwapContextStateActions | undefined
>(undefined);

/**
 * Hook for consuming both the swap state and dispatch actions.
 * Must be used within a `<SwapProvider>` or it will throw an error.
 *
 * @returns An object containing:
 * - `state`: the current swap context state
 * - `actions`: setter functions for modifying the swap inputs
 */
export function useSwapContext(): {
  state: SwapContextState;
  actions: SwapContextStateActions;
} {
  const state = useContext(SwapContext);
  const actions = useContext(SwapContextActions);

  if (!state || !actions)
    throw new Error('useSwapContext must be used within a SwapProvider');

  return { state, actions };
}
