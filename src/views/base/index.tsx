import { Link, Outlet } from 'react-router-dom';

import { FunLogo, ToolBar } from '../../components';

export default function BaseLayout() {
  return (
    <>
      <div className='bg-base-200 px-4 2xl:px-0'>
        <nav className='fixed top-10 left-1/2 -translate-x-1/2 max-w-7xl w-full flex justify-between items-center px-10 z-50'>
          <Link
            to='/'
            className='hover:brightness-150 dark:hover:brightness-50 hover:opacity-40 transition-all duration-300'
          >
            <FunLogo />
          </Link>
          <ToolBar />
        </nav>

        <main className='max-w-7xl min-h-screen h-full flex flex-col justify-center items-center gap-16 mx-auto 2xl:mx-auto'>
          <Outlet />
        </main>
      </div>
    </>
  );
}
