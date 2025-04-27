import type { TokenWithPrice } from '../contexts/swapToken';
import type { Nullable } from '../types';

import { formatAmount } from './formatters';

/**
 * Calculates the token amount based on a USD input and token metadata.
 *
 * @param usdAmount - The USD amount input
 * @param tokenData - The token metadata, including unit price and decimals
 * @returns Formatted token amount, or a fallback if token data is missing
 */
export function fromUsd(
  usdAmount: number,
  tokenData: Nullable<TokenWithPrice>
) {
  if (!tokenData || usdAmount <= 0) {
    return { value: null, display: '0' };
  }
  const amount = usdAmount / tokenData.unitPrice;
  return formatAmount(amount, tokenData.decimals, tokenData.symbol);
}

/**
 * Calculates the USD value from a token amount and token metadata.
 *
 * @param tokenAmount - Amount of token
 * @param tokenData - The token metadata, including unit price and decimals
 * @returns Numeric USD value
 */
export function usdFromToken(
  tokenAmount: number,
  tokenData: Nullable<TokenWithPrice>
) {
  if (!tokenData || tokenAmount <= 0) return 0;
  return tokenAmount * tokenData.unitPrice;
}

/**
 * Calculates a target token amount based on a source token amount.
 *
 * @param sourceAmount - Amount of source token
 * @param sourceData - Metadata for source token
 * @param targetData - Metadata for target token
 * @returns Formatted target token amount
 */
export function targetFromSource(
  sourceAmount: number,
  sourceData: Nullable<TokenWithPrice>,
  targetData: Nullable<TokenWithPrice>
) {
  if (!sourceData || !targetData || sourceAmount <= 0) {
    return { value: null, display: '0' };
  }
  const usdValue = sourceAmount * sourceData.unitPrice;
  const targetAmount = usdValue / targetData.unitPrice;
  return formatAmount(targetAmount, targetData.decimals, targetData.symbol);
}

/**
 * Calculates a source token amount based on a target token amount.
 *
 * @param targetAmount - Amount of target token
 * @param sourceData - Metadata for source token
 * @param targetData - Metadata for target token
 * @returns Formatted source token amount
 */
export function sourceFromTarget(
  targetAmount: number,
  sourceData: Nullable<TokenWithPrice>,
  targetData: Nullable<TokenWithPrice>
) {
  if (!sourceData || !targetData || targetAmount <= 0) {
    return { value: null, display: '0' };
  }
  const usdValue = targetAmount * targetData.unitPrice;
  const sourceAmount = usdValue / sourceData.unitPrice;
  return formatAmount(sourceAmount, sourceData.decimals, sourceData.symbol);
}
