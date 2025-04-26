import classNames from 'classnames';
import { useCallback, useMemo, useState } from 'react';
import { RxCaretDown } from 'react-icons/rx';

import type { SUPPORTED_TOKENS } from '../contexts/swapToken';

/** Props for the `TokenSelect` component */
interface TokenSelectProps {
  /** A record of supported tokens, keyed by their symbol (e.g., "ETH", "USDC") */
  supportedTokens: typeof SUPPORTED_TOKENS;
  /** The currently selected token symbol */
  selected: keyof typeof SUPPORTED_TOKENS;
  /**
   * Callback invoked when a new token is selected.
   * @param symbol - The symbol of the selected token.
   */
  onSelect: (symbol: string) => void;
}

/**
 * `TokenSelect` renders a dropdown button for selecting a supported token.
 * It shows the selected token's icon and symbol, and provides a menu for switching tokens.
 *
 * @param supportedTokens - A record of token definitions to populate the dropdown.
 * @param selected - The symbol of the currently selected token.
 * @param onSelect - Callback fired when a new token is selected.
 */
export default function TokenSelect({
  supportedTokens,
  selected,
  onSelect,
}: TokenSelectProps) {
  const [open, setOpen] = useState<boolean>(false);

  const tokens = useMemo(
    () => Object.entries(supportedTokens),
    [supportedTokens]
  );

  const selectedToken = useMemo(
    () => supportedTokens[selected],
    [selected, supportedTokens]
  );

  const selectHandler = useCallback(
    (symbol: string) => {
      onSelect(symbol);
      setOpen(false);
    },
    [onSelect]
  );

  return (
    <div className='relative'>
      <div className='dropdown'>
        <button
          className='btn m-1 flex items-center gap-2'
          aria-expanded={open}
          aria-haspopup='listbox'
          onClick={() => setOpen(prev => !prev)}
        >
          <div className='w-6 h 6 rounded-full overflow-hidden'>
            <img src={selectedToken.logoURI} alt={selectedToken.symbol} />
          </div>
          <span className='hidden md:block'>{selectedToken.symbol}</span>
          <RxCaretDown size={20} />
        </button>
        <ul
          className={classNames(
            'menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow',
            { hidden: !open }
          )}
        >
          {tokens.map(([symbol, { logoURI, chainName }]) => (
            <li key={symbol}>
              <button
                type='button'
                className='flex gap-2 items-center'
                role='option'
                aria-selected={selected === symbol}
                onClick={() => selectHandler(symbol)}
              >
                <div className='w-6 h-6 rounded-full overflow-hidden'>
                  <img src={logoURI} alt={symbol} />
                </div>
                <div className='flex flex-col'>
                  <span>{symbol}</span>
                  <span className='text-sm text-neutral-500'>{chainName}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
