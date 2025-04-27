import type { Variants } from 'framer-motion';

export const fadeUpStagger: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easIn',
      delayChildren: 0.15,
      staggerChildren: 0.15,
    },
  },
};
