import classNames from 'classnames';
import { motion } from 'framer-motion';

import { useUiSettings, type ColorTheme } from '../contexts/uiSettings';

interface ThemeOptionProps {
  option: ColorTheme;
}

/**
 * A selectable theme option rendered as a clickable image.
 */
function ThemeOption({ option }: ThemeOptionProps) {
  const { theme, toggleTheme } = useUiSettings();

  const isSelected = theme === option;

  return (
    <motion.button
      whileHover={{ scale: 1.065 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      aria-label={`Select theme: ${option}`}
      aria-pressed={isSelected}
      onClick={() => toggleTheme(option)}
      className={classNames(
        'col-span-1 rounded-md overflow-hidden cursor-pointer border border-base-300',
        { 'ring-2 ring-base-content': isSelected }
      )}
    >
      <img
        src={`/${option}.png`}
        alt={`${option} theme preview`}
        className='w-full h-full object-cover'
      />
    </motion.button>
  );
}

/**
 * ThemeToggle renders a selection of available themes ("light", "dark", "system").
 */
export default function ThemeToggle() {
  return (
    <div className='grid grid-cols-3 gap-4 md:gap-2'>
      <ThemeOption option='light' />
      <ThemeOption option='dark' />
      <ThemeOption option='system' />
    </div>
  );
}
