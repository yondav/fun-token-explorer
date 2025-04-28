import classNames from 'classnames';
import { motion } from 'framer-motion';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import toast from 'react-hot-toast';

import {
  FALLBACK_DECIMAL_PRECISION,
  SUPPORTED_TOKENS,
  useSwapContext,
  type SwapFocusedToken,
  type SwapInputField,
} from '../contexts/swapToken';
import { framerVariants, parsers } from '../utils';

import SwapInput from './SwapInput';
import TokenSelect from './TokenSelect';
import ValueDisplay from './ValueDisplay';

interface CardProps extends Pick<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  focused: boolean;
  children: ReactNode;
}
/**
 * Card component that serves as a container for the token selector and input fields.
 * It changes its background color based on whether it is focused or not.
 *
 * @param focused - Indicates if the card is currently focused.
 * @param onClick - Function to handle click events.
 * @param children - The content to be displayed inside the card.
 */
const Card = ({ focused, onClick, children }: CardProps) => (
  <motion.div
    variants={framerVariants.fadeUpStagger}
    className={classNames('card card-token', { 'card-token-focused': focused })}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

interface TokenCardProps {
  type: SwapFocusedToken;
}

/**
 * TokenCard component that displays a token selector, amount input, and calculated value.
 * Manages the input field (USD, source token, or target token) and handles token swapping logic.
 *
 * @param type - Whether this card is the 'source' or 'target' token card.
 */
export default function TokenCard({ type }: TokenCardProps) {
  const [currentInput, setCurrentInput] = useState<SwapInputField>(type);

  const {
    state: {
      loading,
      focusedToken,
      inputType,
      sourceAmount,
      targetAmount,
      sourceToken,
      targetToken,
      sourceData,
      targetData,
      usdAmount,
    },
    actions: {
      setFocusedToken,
      setInputType,
      setUsdAmount,
      setSourceAmount,
      setTargetAmount,
      setSourceToken,
      setTargetToken,
    },
  } = useSwapContext();

  const handleFocusChange = useCallback(() => {
    if (focusedToken !== type) setFocusedToken(type);
  }, [focusedToken, setFocusedToken, type]);

  const readOnlyValue = useMemo(() => {
    const typeAmount = type === 'source' ? sourceAmount : targetAmount;

    if (currentInput === 'usd') return typeAmount;
    return usdAmount;
  }, [currentInput, sourceAmount, targetAmount, type, usdAmount]);

  const { currentToken, currentData, currentAmount } = useMemo(
    () => ({
      currentToken: type === 'source' ? sourceToken : targetToken,
      currentData: type === 'source' ? sourceData : targetData,
      currentAmount: type === 'source' ? sourceAmount : targetAmount,
    }),
    [
      sourceAmount,
      sourceData,
      sourceToken,
      targetAmount,
      targetData,
      targetToken,
      type,
    ]
  );

  const [focusedInputValue, setFocusedInputValue] = useState('0');

  useEffect(() => {
    const value =
      (inputType === type ? currentAmount.value : usdAmount.value) ?? 0;
    setFocusedInputValue(value.toString());
  }, [currentAmount.value, inputType, type, usdAmount.value]);

  const inputProps = useMemo(() => {
    const isUsd = currentInput === 'usd';

    const currentValue = isUsd ? usdAmount.value : currentAmount.value;
    const currentSymbol = isUsd ? '$' : currentToken.symbol;

    const parseFn = isUsd
      ? parsers.parseUsdInput
      : (value: string) =>
          parsers.parseTokenInput(
            value,
            currentData?.decimals ?? FALLBACK_DECIMAL_PRECISION
          );

    const setterFn = isUsd
      ? setUsdAmount
      : type === 'source'
        ? setSourceAmount
        : setTargetAmount;

    return {
      symbol: currentSymbol,
      value:
        inputType === (isUsd ? 'usd' : type)
          ? focusedInputValue
          : (currentValue ?? 0).toString(),
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        const result = parseFn(raw);

        if ('parsed' in result) {
          setFocusedInputValue(raw); // only set local input if valid
          setterFn(result.parsed);
          setInputType(isUsd ? 'usd' : type);
        } else toast.error(result.error, { id: 'tokenDecimal' });
      },
    };
  }, [
    currentInput,
    usdAmount.value,
    currentToken.symbol,
    inputType,
    type,
    focusedInputValue,
    currentAmount.value,
    setUsdAmount,
    setInputType,
    currentData?.decimals,
    setSourceAmount,
    setTargetAmount,
  ]);

  return (
    <Card focused={focusedToken === type} onClick={handleFocusChange}>
      <div className='w-full flex justify-between items-center'>
        <h6 className='text-sm font-medium text-neutral-500'>
          {type === 'source' ? 'Sell' : 'Buy'}
        </h6>
        <TokenSelect
          supportedTokens={SUPPORTED_TOKENS}
          selected={currentToken.symbol}
          onSelect={symbol => {
            setFocusedInputValue('0'); // reset input when changing token
            return type === 'source'
              ? setSourceToken(SUPPORTED_TOKENS[symbol])
              : setTargetToken(SUPPORTED_TOKENS[symbol]);
          }}
        />
      </div>
      <div className='w-full'>
        <SwapInput type={currentInput} {...inputProps} />
        <div className='divider mb-2 mt-0 opacity-25' />
        <div
          className='cursor-pointer!'
          onClick={() => {
            if (focusedToken === type)
              setCurrentInput(prev => (prev === 'usd' ? type : 'usd'));
          }}
        >
          <ValueDisplay loading={loading} {...readOnlyValue} />
        </div>
      </div>
    </Card>
  );
}
