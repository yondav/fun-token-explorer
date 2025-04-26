import classNames from 'classnames';
import { motion } from 'framer-motion';

import { useUiSettings, type ColorTheme } from '../contexts/uiSettings';

interface ThemeOptionProps {
  option: ColorTheme;
}

function ThemeOption({ option }: ThemeOptionProps) {
  const { theme, toggleTheme } = useUiSettings();

  return (
    <motion.div
      whileHover={{ scale: 1.065 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={classNames(
        'col-span-1 rounded-md overflow-hidden cursor-pointer border border-base-300',
        {
          'ring-2 ring-base-content': theme === option,
        }
      )}
      onClick={() => toggleTheme(option)}
    >
      <img src={`/${option}.png`} alt='Light Theme' />
    </motion.div>
  );
}

export default function ThemeToggle() {
  return (
    <div className='grid grid-cols-3 gap-4 md:gap-2'>
      <ThemeOption option='light' />
      <ThemeOption option='dark' />
      <ThemeOption option='system' />
    </div>
  );
}
