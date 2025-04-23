import { createContext, useContext } from 'react';

import { SUPPORTED_TOKENS } from './swapToken.constants';
import type {
  SwapContextState,
  SwapContextStateActions,
} from './swapToken.types';

export const initialState: SwapContextState = {
  sourceToken: SUPPORTED_TOKENS.USDC,
  targetToken: SUPPORTED_TOKENS.ETH,
  usdAmount: 100,
  sourceData: null,
  targetData: null,
  loading: true,
  sourceAmount: null,
  targetAmount: null,
};

export const SwapContext = createContext<SwapContextState>(initialState);

export const SwapContextActions = createContext<
  SwapContextStateActions | undefined
>(undefined);

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
