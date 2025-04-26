import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';

import { FunLogo, SideDrawer } from '../components';
import { useUiSettings } from '../contexts/uiSettings';

export default function BaseLayout() {
  const { sideDrawer } = useUiSettings();

  return (
    <div className='relative'>
      <div className='min-h-screen flex flex-col justify-between bg-base-200 pt-4 px-4 2xl:px-0'>
        <nav className='w-full flex justify-between items-center z-50'>
          <Link to='/'>
            <FunLogo />
          </Link>
          <SideDrawer />
        </nav>

        <motion.main
          layout='position'
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={classNames(
            'max-w-7xl h-full my-auto flex flex-col justify-center items-center gap-16 mx-auto lg:z-50',
            {
              'lg:-translate-x-40 xl:translate-x-0': sideDrawer,
              'mx-auto': !sideDrawer,
            }
          )}
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}
