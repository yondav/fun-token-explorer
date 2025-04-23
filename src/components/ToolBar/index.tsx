import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

import { useColorTheme } from '../../contexts/colorTheme';

export default function ToolBar() {
  const { theme, toggleTheme } = useColorTheme();

  return (
    <label className='px-3 py-2 swap swap-rotate bg-base-300! rounded-full'>
      <input
        type='checkbox'
        defaultChecked={theme === 'light'}
        onChange={toggleTheme}
      />
      <IoSunnyOutline className='swap-on' />
      <IoMoonOutline className='swap-off' />
    </label>
  );
}
