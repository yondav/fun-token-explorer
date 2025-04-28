type ParseResult = { parsed: number } | { error: string };

export const parseTokenInput = (
  value: string,
  decimals: number
): ParseResult => {
  if (value.trim() === '') return { parsed: 0 };

  if (value.startsWith('.')) value = '0' + value;

  const validFormat = /^\d*\.?\d*$/.test(value);
  if (!validFormat) return { error: 'Input must be a number.' };

  const [integerPart, fractionPart = ''] = value.split('.');

  if (integerPart.length > 18) return { error: 'Input too large to process.' };

  if (fractionPart.length > decimals)
    return { error: `Cannot exceed ${decimals} decimal places.` };

  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return { error: 'Invalid number.' };

  // Only very huge numbers should be rejected
  if (parsed > 1e15) return { error: 'Input exceeds allowed value range.' };

  return { parsed };
};

export const parseUsdInput = (value: string): ParseResult =>
  parseTokenInput(value, 2);
