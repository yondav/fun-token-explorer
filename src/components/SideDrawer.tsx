import { motion } from 'framer-motion';
import { useCallback, type ReactNode } from 'react';
import {
  TbAlignBoxCenterMiddle,
  TbAlignBoxCenterMiddleFilled,
  TbInfoCircle,
  TbLayoutSidebarRight,
  TbLayoutSidebarRightFilled,
  TbSettings,
} from 'react-icons/tb';

import { useSwapContext } from '../contexts/swapToken';
import { useUiSettings } from '../contexts/uiSettings';

import KnowledgeBase from './KnowledgeBase';
import ThemeToggle from './ThemeToggle';
import YondavLogo from './YondavLogo';
import YondavWink from './YondavWink';

interface SideDrawerToggleProps {
  open: boolean;
}

/**
 * Button to toggle the drawer open/closed.
 * Adjusts icons based on screen size and open state.
 */
const SideDrawerToggle = ({ open }: SideDrawerToggleProps) => {
  const RenderIcon = useCallback(() => {
    return open ? (
      <>
        <TbLayoutSidebarRightFilled size={18} className='hidden md:block' />
        <TbAlignBoxCenterMiddleFilled size={18} className='md:hidden' />
      </>
    ) : (
      <>
        <TbLayoutSidebarRight size={18} className='hidden md:block' />
        <TbAlignBoxCenterMiddle size={18} className='md:hidden' />
      </>
    );
  }, [open]);

  return (
    <motion.label
      htmlFor='drawer'
      aria-label='Toggle sidebar'
      aria-expanded={open}
      className='drawer-button btn-drawer'
      whileHover={{ scale: 1.065 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <RenderIcon />
    </motion.label>
  );
};

interface SideDrawerItemProps {
  name: string;
  icon: ReactNode;
  label: string;
  children: ReactNode;
}

/**
 * Collapsible section inside the drawer.
 * Used for menu items.
 */
const SideDrawerItem = ({
  name,
  icon,
  label,
  children,
}: SideDrawerItemProps) => (
  <div className='collapse'>
    <input
      type='checkbox'
      name={name}
      id={`${name}-collapse`}
      aria-controls={`${name}-content`}
    />
    <div className='collapse-title' id={`${name}-label`}>
      {icon}
      <h6>{label}</h6>
    </div>
    <div className='collapse-content' id={`${name}-content`}>
      {children}
    </div>
  </div>
);

/**
 * The main SideDrawer component.
 */
export default function SideDrawer() {
  const { sideDrawer, toggleSideDrawer } = useUiSettings();
  const {
    state: { realTime },
    actions: { setRealTime },
  } = useSwapContext();

  return (
    <div className='drawer drawer-end side-drawer'>
      <input
        id='drawer'
        type='checkbox'
        className='drawer-toggle'
        checked={sideDrawer}
        onChange={toggleSideDrawer}
        aria-label='Toggle sidebar drawer'
        aria-expanded={sideDrawer}
      />

      <div className='drawer-content'>
        <SideDrawerToggle open={sideDrawer} />
      </div>

      <div className='drawer-side'>
        <label
          htmlFor='drawer'
          aria-label='Close sidebar'
          className='drawer-overlay'
        ></label>

        <div className='menu'>
          <SideDrawerItem
            name='settings'
            icon={<TbSettings />}
            label='Settings'
          >
            <div>
              <h6>Theme</h6>
              <ThemeToggle />
            </div>
            <div className='divider' />
            <div>
              <h6>Real-time updates</h6>
              <label
                className='label cursor-pointer gap-2'
                htmlFor='realtime-toggle'
              >
                <input
                  id='realtime-toggle'
                  type='checkbox'
                  checked={realTime}
                  onChange={e => setRealTime(e.currentTarget.checked)}
                  className='toggle'
                  aria-checked={realTime}
                />
                <span className='text-xs text-neutral-500'>
                  Rate limits may apply
                </span>
              </label>
            </div>
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
                  href='https://yondav.us'
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
