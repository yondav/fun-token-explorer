import { motion } from 'framer-motion';
import { useCallback } from 'react';
import { IoArrowDown } from 'react-icons/io5';

import { useSwapContext } from '../contexts/swapToken';
import { fadeUpStagger } from '../utils/framerVariants';

/**
 * `TokenSwitchButton` is a button component that allows users to switch between source and target tokens in a swap interface.
 * It uses a rotating arrow icon to indicate the action of switching.
 */
interface TokenSwitchButtonProps {
  reversed?: boolean;
  onToggleLayout: () => void;
}

export default function TokenSwitchButton({
  reversed = false,
  onToggleLayout,
}: TokenSwitchButtonProps) {
  const {
    state: { sourceToken, targetToken },
    actions: { setSourceToken, setTargetToken },
  } = useSwapContext();

  const switchSourceTarget = useCallback(() => {
    onToggleLayout();
    setSourceToken(targetToken);
    setTargetToken(sourceToken);
  }, [
    onToggleLayout,
    setSourceToken,
    setTargetToken,
    sourceToken,
    targetToken,
  ]);

  return (
    <motion.button
      variants={fadeUpStagger}
      initial='initial'
      whileInView='animate'
      animate={{ rotate: reversed ? 180 : 0 }}
      whileHover={{ scale: 1.065 }}
      transition={{ duration: 0.2 }}
      className='btn btn-square btn-lg border-4 border-base-100 shadow-none absolute top-1/2 left-1/2 -translate-1/2!'
      onClick={switchSourceTarget}
      aria-label='Switch tokens'
    >
      <IoArrowDown size={24} />
    </motion.button>
  );
}
