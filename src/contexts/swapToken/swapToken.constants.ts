import type { TokenDefinition } from './swapToken.types';

export const API_KEY = import.meta.env.VITE_API_KEY;

export const SUPPORTED_TOKENS: Record<string, TokenDefinition> = {
  USDC: { symbol: 'USDC', chain: '1' },
  USDT: { symbol: 'USDT', chain: '137' },
  ETH: { symbol: 'ETH', chain: '8453' },
  WBTC: { symbol: 'WBTC', chain: '1' },
} as const;
