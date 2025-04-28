import classNames from 'classnames';
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type HTMLAttributes,
  type FocusEvent,
} from 'react';

import type { SwapInputField } from '../contexts/swapToken';

interface SwapInputProps
  extends Pick<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  type: SwapInputField;
  symbol: string;
  value: string;
}

/**
 * `SwapInput` is a controlled input component for USD or Token amounts.
 * Dynamically adjusts font size based on input length, prevents scroll input changes,
 * and provides accessible labeling.
 *
 * @param type - The input type: 'usd', 'source', or 'target'
 * @param symbol - The currency symbol displayed beside the input
 * @param value - The string value controlled externally
 * @param onChange - Handler for input value changes
 */
export default function SwapInput({ type, symbol, ...props }: SwapInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Track the cursor position across renders
  const cursorPosRef = useRef<number | null>(null);

  const dynamicFontClass = useMemo(() => {
    const length = props.value.length;

    if (length <= 10) return 'text-3xl';
    if (length <= 15) return 'text-2xl';
    if (length <= 20) return 'text-xl';
    return 'text-lg';
  }, [props.value.length]);

  useEffect(() => {
    const input = inputRef.current;
    if (!input || cursorPosRef.current === null) return;

    const pos = Math.min(cursorPosRef.current, input.value.length);
    input.setSelectionRange(pos, pos);

    // After restoring, reset the ref
    cursorPosRef.current = null;
  }, [props.value]);

  const handleBeforeInput = () => {
    const input = inputRef.current;
    if (!input) return;

    cursorPosRef.current = input.selectionStart;
  };

  const handleWheel = useCallback((e: FocusEvent<HTMLInputElement>) => {
    e.target.addEventListener(
      'wheel',
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );
  }, []);

  return (
    <label
      className={classNames(
        'input input-xl input-card-token',
        dynamicFontClass
      )}
    >
      {type === 'usd' && <span>{symbol}</span>}
      <input
        ref={inputRef}
        type='text'
        inputMode='decimal'
        min='0.00'
        step='any'
        data-type='currency'
        aria-label={`Enter amount in ${type === 'usd' ? 'USD' : symbol}`}
        onInput={handleBeforeInput} // catch cursor before value update
        onFocus={handleWheel}
        placeholder='0'
        {...props}
      />
    </label>
  );
}
