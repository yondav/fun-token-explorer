type ParseResult = { parsed: number } | { error: string };

/**
 * Parse input value based on the given currency.
 *
 * @param value - The value coming from the input
 * @param decimals - The decimal precision for the givrn currency
 * @returns Parsed value given the currency or an error message to render in a toast
 */
export const parseTokenInput = (
  value: string,
  decimals: number
): ParseResult => {
  if (value === '') return { parsed: 0 };

  // allow ".1" → "0.1"
  if (value.startsWith('.')) value = '0' + value;

  // basic valid shape check: digits + optional single dot + digits
  const validFormat = /^\d*\.?\d*$/.test(value);
  if (!validFormat) return { error: 'Input must be a number.' };

  // Don't block incomplete input like "0." or "123."
  const [, fraction = ''] = value.split('.');

  if (fraction.length > decimals)
    return { error: `Cannot exceed ${decimals} decimal places.` };

  return { parsed: Number(value) };
};

export const parseUsdInput = (value: string): ParseResult =>
  parseTokenInput(value, 2);
