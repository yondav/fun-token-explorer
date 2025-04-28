import toast from 'react-hot-toast';
import { parseUnits, formatUnits } from 'viem';

/**
 * Formats a raw amount into a standardized token Amount object.
 *
 * @param rawAmount - The raw number you want to format (could be token units, USD units, etc.)
 * @param decimals - How many decimal places the token uses (e.g., 18 for ETH, 6 for USDC)
 * @param symbol - Optional token symbol to append for display ("ETH", "USDC", etc.)
 * @returns An object containing:
 *   - `value`: the precise numeric value
 *   - `display`: a nicely formatted, human-readable string
 */
export function formatAmount(
  rawAmount: number,
  decimals: number,
  symbol?: string
): { value: number; display: string } {
  try {
    const parsed = parseUnits(rawAmount.toString(), decimals);
    const value = Number(formatUnits(parsed, decimals));

    const display = value.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: Math.min(decimals, 6),
    });

    return {
      value,
      display: symbol
        ? symbol === '$'
          ? `${symbol}${display}`
          : `${display} ${symbol}`
        : display,
    };
  } catch (err) {
    const error = err as Error;
    toast.error(`Failed to format ${symbol} amount.`, {
      id: error?.name,
    });
    return {
      value: 0,
      display: symbol === '$' ? `${symbol}0` : `0 ${symbol}`,
    };
  }
}
