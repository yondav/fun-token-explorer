import {
  getAssetErc20ByChainAndSymbol,
  getAssetPriceInfo,
} from '@funkit/api-base';
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from 'react';

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

  /** Ref for managing polling intervals */
  const pollingRef = useRef<Nullable<ReturnType<typeof setInterval>>>(null);

  /** Fetch both source and target tokens */
  const fetchBothTokens = useCallback(async () => {
    try {
      const [src, tgt] = await Promise.all([
        fetchToken(state.sourceToken),
        fetchToken(state.targetToken),
      ]);

      actions.setSourceData(dispatch)(src);
      actions.setTargetData(dispatch)(tgt);
    } catch (error) {
      console.error('Token fetch failed:', error);
    }
  }, [state.sourceToken, state.targetToken]);

  /**
   * Debounced initial fetch when tokens change
   */
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      actions.setLoading(dispatch)(true);
      await fetchBothTokens();
      actions.setLoading(dispatch)(false);
    }, 150);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [fetchBothTokens, state.sourceToken, state.targetToken]);

  /**
   * Polling for refreshing prices periodically (optional)
   */
  useEffect(() => {
    if (!state.sourceToken || !state.targetToken || !state.realTime) return;

    pollingRef.current = setInterval(() => {
      fetchBothTokens();
    }, 30000); // every 60 seconds

    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, [fetchBothTokens, state.realTime, state.sourceToken, state.targetToken]);

  const stateValue = useMemo(() => state, [state]);

  const actionsValue = useMemo(
    () => ({
      setSourceToken: actions.setSourceToken(dispatch),
      setTargetToken: actions.setTargetToken(dispatch),
      setUsdAmount: actions.setUsdAmount(dispatch),
      setSourceAmount: actions.setSourceAmount(dispatch),
      setTargetAmount: actions.setTargetAmount(dispatch),
      setInputType: actions.setInputType(dispatch),
      setFocusedToken: actions.setFocusedToken(dispatch),
      setRealTime: actions.setRealTime(dispatch),
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
