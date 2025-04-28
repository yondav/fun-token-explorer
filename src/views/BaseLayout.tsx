import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { TbAlertSquareRounded, TbBrandGithubFilled } from 'react-icons/tb';
import { Link, Outlet } from 'react-router-dom';

import { FunLogo, SideDrawer, YondavLogo } from '../components';
import { useUiSettings } from '../contexts/uiSettings';

/**
 * `BaseLayout` serves as the root layout for all routes.
 *
 * It handles:
 * - Global navigation with a logo link and a side drawer toggle.
 * - Responsive layout adjustments based on the side drawer state.
 * - Global toast notifications via `react-hot-toast`.
 *
 * Children routes are rendered inside the `<Outlet />`.
 */
export default function BaseLayout() {
  const { sideDrawer } = useUiSettings();

  return (
    <div className='relative'>
      <Toaster
        position='bottom-right'
        toastOptions={{
          className: 'alert!',
          duration: 3000,
          removeDelay: 500,

          error: {
            className: 'alert! alert-error!',
            icon: <TbAlertSquareRounded className='text-error' size={24} />,
          },
        }}
      />
      <div className='wrapper'>
        <nav aria-label='Primary navigation'>
          <Link to='/'>
            <FunLogo />
          </Link>
          <SideDrawer />
        </nav>

        <motion.main
          layout
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={classNames({ 'lg:-left-44 2xl:left-auto': sideDrawer })}
        >
          <Outlet />
        </motion.main>
        <footer>
          <span className='copyright'>
            &#169; yondav {new Date().getFullYear()}
          </span>
          <div className='socials'>
            <a
              href='https://www.yondav.us/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <YondavLogo width={18} />
            </a>
            <a
              href='https://github.com/yondav/fun-token-explorer'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TbBrandGithubFilled size={20} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
