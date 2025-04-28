import classNames from 'classnames';

import type { Amount, SwapContextState } from '../contexts/swapToken';

/** Props for displaying a token value with loading or tooltip behavior */
type ValueDisplayProps = Amount & Pick<SwapContextState, 'loading'>;

/**
 * Renders a token value display.
 * - Shows a loading skeleton if loading.
 * - Otherwise shows the formatted display value with a tooltip showing the full parsed value.
 */
export default function ValueDisplay({
  loading,
  value,
  display,
}: ValueDisplayProps) {
  return (
    <div
      className={classNames('cursor-pointer h-6', {
        'skeleton w-1/3': loading,
        'md:tooltip md:tooltip-bottom': !loading,
      })}
      data-tip={value}
      role={!loading ? 'tooltip' : undefined}
    >
      <span>{!loading ? display : '\u00A0'}</span>
    </div>
  );
}
