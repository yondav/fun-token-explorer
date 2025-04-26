import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useCallback, type ChangeEvent, type ReactNode } from 'react';

import type { Amount, SwapContextState } from '../contexts/swapToken';
import { SUPPORTED_TOKENS, useSwapContext } from '../contexts/swapToken';
import { parsers, framerVariants } from '../utils';

import TokenSelect from './TokenSelect';

interface TokenAmountCardProps {
  type: 'source' | 'target';
}

interface TokenCardProps extends TokenAmountCardProps {
  children: ReactNode;
}
const TokenCard = ({ type, children }: TokenCardProps) => (
  <motion.div
    variants={framerVariants.fadeUpStagger}
    className={classNames(
      'card p-4 flex flex-row items-center justify-between shadow-none w-xs sm:w-sm md:w-md min-h-40',
      {
        'bg-transparent border border-base-300': type === 'source',
        'bg-base-content/5': type === 'target',
      }
    )}
  >
    {children}
  </motion.div>
);

interface ValueDisplayProps extends Amount, Pick<SwapContextState, 'loading'> {
  size: 'sm' | 'lg';
}

const ValueDisplay = ({ loading, value, display, size }: ValueDisplayProps) => (
  <div
    className={classNames('cursor-default', {
      'skeleton w-1/3': loading,
      'md:tooltip md:tooltip-bottom': !loading,
      'h-4': size === 'sm',
      'h-9 text-3xl': size === 'lg',
    })}
    data-tip={value}
  >
    <span>{!loading ? display : ''}</span>
  </div>
);

function SourceTokenCard() {
  const {
    state: { sourceToken, sourceAmount, usdAmount, loading },
    actions: { setSourceToken, setUsdAmount },
  } = useSwapContext();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const parsed = parsers.parseUsdInput(e.target.value);
      if (parsed !== null) setUsdAmount(parsed);
    },
    [setUsdAmount]
  );

  return (
    <TokenCard type='source'>
      <div>
        <label className='input input-xl bg-transparent text-3xl border-none shadow-none! outline-none!'>
          <span>$</span>
          <input
            type='number'
            min='0.00'
            step='0.01'
            data-type='currency'
            value={usdAmount.toString()}
            aria-label='USD Amount'
            onChange={handleChange}
          />
        </label>
        <ValueDisplay size='sm' loading={loading} {...sourceAmount} />
      </div>
      <TokenSelect
        supportedTokens={SUPPORTED_TOKENS}
        selected={sourceToken.symbol}
        onSelect={symbol => setSourceToken(SUPPORTED_TOKENS[symbol])}
      />
    </TokenCard>
  );
}

function TargetTokenCard() {
  const {
    state: { targetToken, targetAmount, loading },
    actions: { setTargetToken },
  } = useSwapContext();

  return (
    <TokenCard type='target'>
      <ValueDisplay size='lg' loading={loading} {...targetAmount} />
      <TokenSelect
        supportedTokens={SUPPORTED_TOKENS}
        selected={targetToken.symbol}
        onSelect={symbol => setTargetToken(SUPPORTED_TOKENS[symbol])}
      />
    </TokenCard>
  );
}

export default function TokenAmountCard({
  type = 'source',
}: TokenAmountCardProps) {
  if (type === 'target') return <TargetTokenCard />;
  return <SourceTokenCard />;
}
