import { motion } from 'framer-motion';
import { useCallback, useMemo, type ReactNode } from 'react';
import {
  TbAlignBoxCenterMiddle,
  TbAlignBoxCenterMiddleFilled,
  TbInfoCircle,
  TbLayoutSidebarRight,
  TbLayoutSidebarRightFilled,
  TbSettings,
} from 'react-icons/tb';

import { useUiSettings } from '../contexts/uiSettings';

import KnowledgeBase from './KnowledgeBase';
import ThemeToggle from './ThemeToggle';
import YondavLogo from './YondavLogo';
import YondavWink from './YondavWink';

interface SideDrawerToggleProps {
  open: boolean;
}

const SideDrawerToggle = ({ open }: SideDrawerToggleProps) => {
  const Icon = useCallback(
    () =>
      !open ? (
        <>
          <TbLayoutSidebarRight size={18} className='hidden md:block' />
          <TbAlignBoxCenterMiddle size={18} className='md:hidden' />
        </>
      ) : (
        <>
          <TbLayoutSidebarRightFilled size={18} className='hidden md:block' />
          <TbAlignBoxCenterMiddleFilled size={18} className='md:hidden' />
        </>
      ),
    [open]
  );

  return (
    <motion.label
      htmlFor='drawer'
      className='drawer-button px-2 py-2 swap swap-rotate rounded-full z-50 cursor-pointer'
      whileHover={{ scale: 1.065 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Icon />
    </motion.label>
  );
};

interface SideDrawerItemProps {
  name: string;
  icon: ReactNode;
  label: string;
  children: ReactNode;
}

const SideDrawerItem = ({
  name,
  icon,
  label,
  children,
}: SideDrawerItemProps) => (
  <div className='collapse bg-base-200 border border-base-300'>
    <input type='checkbox' name={name} />
    <div className='collapse-title font-bold flex items-center gap-4'>
      {icon}
      <h2>{label}</h2>
    </div>
    <div className='collapse-content'>{children}</div>
  </div>
);

export default function SideDrawer() {
  const { sideDrawer, toggleSideDrawer } = useUiSettings();

  return (
    <div className='drawer drawer-end'>
      <input
        id='drawer'
        type='checkbox'
        className='drawer-toggle'
        checked={sideDrawer}
        onChange={toggleSideDrawer}
      />

      <div className='drawer-content flex justify-end'>
        <motion.label
          htmlFor='drawer'
          className='drawer-button px-2 py-2 swap swap-rotate rounded-full z-50 cursor-pointer'
          whileHover={{ scale: 1.065 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <SideDrawerToggle open={sideDrawer} />
        </motion.label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='drawer'
          aria-label='close sidebar'
          className='drawer-overlay lg:hidden'
        ></label>
        <div className='menu gap-4 bg-base-200 border-l border-base-300 text-base-content min-h-full w-full md:w-80 p-4 pt-20 overflow-y-auto'>
          <SideDrawerItem
            name='settings'
            icon={<TbSettings />}
            label='Settings'
          >
            <h2 className='font-semibold text-sm mb-2'>Theme</h2>
            <ThemeToggle />
          </SideDrawerItem>

          <SideDrawerItem
            name='knowledge-base'
            icon={<TbInfoCircle />}
            label='Knowledge Base'
          >
            <KnowledgeBase />
          </SideDrawerItem>

          <SideDrawerItem
            name='author'
            icon={<YondavLogo width={14} />}
            label='Author'
          >
            <div className='flex flex-col items-center gap-4'>
              <YondavWink width='33%' />
              <div className='text-center'>
                <p>Thanks for coming!</p>
                <a
                  href='http://yondav.us'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  yondav.us
                </a>
              </div>
            </div>
          </SideDrawerItem>
        </div>
      </div>
    </div>
  );
}
