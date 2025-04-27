import {
  getAssetErc20ByChainAndSymbol,
  getAssetPriceInfo,
} from '@funkit/api-base';
import { useEffect, useMemo, useReducer, useRef, type ReactNode } from 'react';

import type { Nullable } from '../../types';

import * as actions from './swapToken.actions';
import { API_KEY } from './swapToken.constants';
import {
  initialState,
  SwapContext,
  SwapContextActions,
} from './swapToken.context';
import { swapTokenReducer } from './swapToken.reducer';
import type { TokenDefinition, TokenWithPrice } from './swapToken.types';

/**
 * Fetch full token metadata + price from the external API.
 * Used when source or target tokens change.
 */
const fetchToken = async ({
  symbol,
  chain,
}: TokenDefinition): Promise<TokenWithPrice> => {
  const meta = await getAssetErc20ByChainAndSymbol({
    symbol,
    chainId: chain,
    apiKey: API_KEY,
  });

  const price = await getAssetPriceInfo({
    assetTokenAddress: meta.address,
    chainId: chain,
    apiKey: API_KEY,
  });

  return {
    name: meta.name,
    chain: meta.chain,
    symbol: meta.symbol,
    address: meta.address,
    decimals: meta.decimals,
    unitPrice: price.unitPrice,
  };
};

/**
 * Context provider for the swap logic.
 * Handles token selection, fetching metadata, and managing derived values.
 */
export function SwapProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(swapTokenReducer, initialState);

  /** Ref for managing debounce timers */
  const timeoutRef = useRef<Nullable<ReturnType<typeof setTimeout>>>(null);

  /**
   * Fetch fresh metadata whenever source or target tokens change.
   * Does NOT handle input recalculation (handled by reducer separately).
   */
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      actions.setLoading(dispatch)(true);

      try {
        const [src, tgt] = await Promise.all([
          fetchToken(state.sourceToken),
          fetchToken(state.targetToken),
        ]);

        actions.setSourceData(dispatch)(src);
        actions.setTargetData(dispatch)(tgt);
      } catch (error) {
        console.error('Token fetch failed:', error);
      } finally {
        actions.setLoading(dispatch)(false);
      }
    }, 150);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [state.sourceToken, state.targetToken]);

  /** Stable reference to the current state */
  const stateValue = useMemo(() => state, [state]);

  /** Stable reference to all available actions */
  const actionsValue = useMemo(
    () => ({
      setSourceToken: actions.setSourceToken(dispatch),
      setTargetToken: actions.setTargetToken(dispatch),
      setUsdAmount: actions.setUsdAmount(dispatch),
      setSourceAmount: actions.setSourceAmount(dispatch),
      setTargetAmount: actions.setTargetAmount(dispatch),
      setInputType: actions.setInputType(dispatch),
      setFocusedToken: actions.setFocusedToken(dispatch),
    }),
    []
  );

  return (
    <SwapContext.Provider value={stateValue}>
      <SwapContextActions.Provider value={actionsValue}>
        {children}
      </SwapContextActions.Provider>
    </SwapContext.Provider>
  );
}
