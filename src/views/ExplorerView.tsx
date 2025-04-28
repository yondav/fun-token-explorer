import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { TokenCard, TokenSwitchButton } from '../components';
import { fadeUpStagger, staggerContainer } from '../utils/framerVariants';

/**
 * Explorer view for swapping tokens.
 * Includes header, two token cards, a swap button, and a tagline.
 */
export default function ExplorerView() {
  const [reversed, setReversed] = useState<boolean>(false);

  return (
    <motion.div
      variants={staggerContainer}
      initial='initial'
      whileInView='animate'
      className='flex flex-col gap-12 justify-center items-center'
    >
      <motion.header
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true, amount: 0.6 }}
        className='flex flex-col gap-4'
      >
        <motion.h1 variants={fadeUpStagger} className='text-center'>
          Token Explorer
        </motion.h1>
        <motion.p
          variants={fadeUpStagger}
          className='italic text-neutral-500 text-center'
        >
          Compare, calculate, and convert between tokens instantly.
        </motion.p>
      </motion.header>

      <motion.section
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true, amount: 0.6 }}
        className={classNames(
          'card shadow-sm p-2 bg-base-100 flex gap-2 relative',
          { 'flex-col': !reversed, 'flex-col-reverse': reversed }
        )}
      >
        <TokenCard type='source' />
        <TokenCard type='target' />
        <TokenSwitchButton
          reversed={reversed}
          onToggleLayout={() => setReversed(prev => !prev)}
        />
      </motion.section>
      <motion.div variants={fadeUpStagger}>
        <p className='subtitle'>
          One tool to swap them all. Simple. Instant. Reliable.
        </p>
      </motion.div>
    </motion.div>
  );
}
