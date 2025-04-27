import type { TokenDefinition } from './swapToken.types';

/**
 * API key required for authenticating requests to the @funkit/api-base package.
 * Pulled from the environment at build time via Vite.
 */
export const API_KEY = import.meta.env.VITE_API_KEY;

/**
 * Tokens supported by the swap interface.
 */
export const SUPPORTED_TOKENS: Record<string, TokenDefinition> = {
  /** USD Coin on Ethereum Mainnet */
  USDC: {
    symbol: 'USDC',
    chain: '1',
    chainName: 'Ethereum Mainnet',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },

  /** Tether (USDT) on Polygon PoS */
  USDT: {
    symbol: 'USDT',
    chain: '137',
    chainName: 'Polygon PoS',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },

  /** Ethereum (ETH) on Base Mainnet */
  ETH: {
    symbol: 'ETH',
    chain: '8453',
    chainName: 'Base Mainnet',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
  },

  /** Wrapped Bitcoin (WBTC) on Ethereum Mainnet */
  WBTC: {
    symbol: 'WBTC',
    chain: '1',
    chainName: 'Ethereum Mainnet',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  },
} as const;
