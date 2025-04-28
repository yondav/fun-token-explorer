import { useCallback, useId, useMemo } from 'react';
import { RxCaretDown } from 'react-icons/rx';

import type { SUPPORTED_TOKENS } from '../contexts/swapToken';

interface TokenSelectProps {
  supportedTokens: typeof SUPPORTED_TOKENS;
  selected: keyof typeof SUPPORTED_TOKENS;
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
  const id = useId();

  const tokens = useMemo(
    () => Object.entries(supportedTokens),
    [supportedTokens]
  );

  const selectedToken = useMemo(
    () => supportedTokens[selected],
    [selected, supportedTokens]
  );

  const openModal = useCallback(() => {
    (document.getElementById(id) as HTMLDialogElement).showModal();
  }, [id]);

  const closeModal = useCallback(() => {
    (document.getElementById(id) as HTMLDialogElement).close();
  }, [id]);

  const selectHandler = useCallback(
    (symbol: string) => {
      onSelect(symbol);
      closeModal();
    },
    [closeModal, onSelect]
  );

  return (
    <>
      <button
        onClick={openModal}
        className='btn p-1 max-h-9 flex items-center gap-2'
      >
        <div className='relative w-7 h-7'>
          <div className='w-full h-full rounded-full overflow-hidden'>
            <img src={selectedToken.logoURI} alt={selectedToken.symbol} />
          </div>
          {selectedToken.badge && (
            <img
              className='absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full'
              src={selectedToken.badge}
              alt={selectedToken.chainName}
            />
          )}
        </div>
        <span className='hidden md:block'>{selectedToken.symbol}</span>
        <RxCaretDown size={20} />
      </button>

      <dialog id={id} className='modal'>
        <div className='modal-box'>
          <h1 className='text-lg font-bold'>Select a token</h1>
          <ul className='list bg-base-100 rounded-box shadow-md'>
            {tokens.map(([symbol, { logoURI, chainName, badge }]) => (
              <li
                key={symbol}
                role='option'
                aria-selected={selected === symbol}
                onClick={() => selectHandler(symbol)}
              >
                <div className='list-row cursor-pointer hover:bg-base-300/50 transition-colors duration-300 ease-in-out'>
                  <div className='relative w-10 h-10'>
                    <div className='w-full h-full rounded-full overflow-hidden'>
                      <img src={logoURI} alt={symbol} />
                    </div>
                    {badge && (
                      <img
                        className='absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full'
                        src={badge}
                        alt={chainName}
                      />
                    )}
                  </div>
                  <div className='list-col-grow'>
                    <div>{symbol}</div>
                    <div className='text-xs uppercase font-semibold opacity-60'>
                      {chainName}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
