import {
  IoArrowBack,
  IoArrowDown,
  IoArrowForward,
  IoArrowUp,
} from 'react-icons/io5';

export default function ExplorerView() {
  return (
    <div className='flex flex-col gap-8 lg:gap-16 justify-center items-center'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl'>Token Explorer</h1>
      <div className='flex flex-col gap-8 lg:flex-row'>
        <div className='card bg-base-100 w-xs sm:w-sm md:w-md min-h-60 shadow-sm'></div>
        <div className='divider lg:divider-horizontal'>
          <span className='flex lg:hidden'>
            <IoArrowDown />
            <IoArrowUp />
          </span>
          <span className='hidden lg:flex flex-col'>
            <IoArrowBack />
            <IoArrowForward />
          </span>
        </div>

        <div className='card bg-base-100 w-xs sm:w-sm md:w-md min-h-60 shadow-sm'></div>
      </div>
    </div>
  );
}
