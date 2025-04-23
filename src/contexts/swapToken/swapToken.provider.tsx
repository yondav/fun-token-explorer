import {
  getAssetErc20ByChainAndSymbol,
  getAssetPriceInfo,
} from '@funkit/api-base';
import { useEffect, useMemo, useReducer, type ReactNode } from 'react';

import * as actions from './swapToken.actions';
import { API_KEY } from './swapToken.constants';
import {
  initialState,
  SwapContext,
  SwapContextActions,
} from './swapToken.context';
import { swapTokenReducer } from './swapToken.reducer';
import type { TokenDefinition, TokenWithPrice } from './swapToken.types';

export function SwapProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(swapTokenReducer, initialState);

  useEffect(() => {
    let mounted = true;

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

    const load = async () => {
      actions.setLoading(dispatch)(true);
      try {
        const [src, tgt] = await Promise.all([
          fetchToken(state.sourceToken),
          fetchToken(state.targetToken),
        ]);

        if (!mounted) return;
        actions.setSourceData(dispatch)(src);
        actions.setTargetData(dispatch)(tgt);
      } catch (err) {
        console.error('Token fetch failed:', err);
      } finally {
        if (mounted) actions.setLoading(dispatch)(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, [state.sourceToken, state.targetToken]);

  const stateValue = useMemo(() => state, [state]);

  const actionsValue = useMemo(
    () => ({
      setSourceToken: actions.setSourceToken(dispatch),
      setTargetToken: actions.setTargetToken(dispatch),
      setUsdAmount: actions.setUSDAmount(dispatch),
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
