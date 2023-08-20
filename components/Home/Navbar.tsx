import React from 'react';
import Image from 'next/image';
import Logo from 'public/Logo.png';

const Navbar = () => {
  return (
    <nav className='flex mx-10 justify-center'>
      <div className='max-w-screen-xl bg-[#171717] flex mt-5 flex-wrap items-center justify-between mx-auto p-4 w-[75%] rounded-3xl outline outline-[#aaaaaa] dark:outline-[#222222] outline-1 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-30'>
        <a className='flex items-center'>
          <Image src={Logo} alt='' height={32} width={32} className=' mr-3' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            WaveCode
          </span>
        </a>
        <div className='flex md:order-2'>
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Menu</span>
            <svg
              className='w-5 h-5 mx-8'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div className='hidden lg:flex navbar-center z-10 text-lg text-black dark:text-white'>
          <a
            className='poppins-normal mx-8 hover:bg-gradient-to-r hover:text-sky-400 hover:bg-clip-text duration-500 hover:scale-110'
            href='#home'
          >
            Strona Główna
          </a>
          <a
            className='poppins-normal mx-8 hover:bg-gradient-to-r hover:text-sky-400 hover:bg-clip-text duration-300 hover:scale-110'
            href='#projects'
          >
            Usługi
          </a>
          <a
            className='poppins-normal mx-8 hover:bg-gradient-to-r hover:text-sky-400 hover:bg-clip-text duration-300 hover:scale-110'
            href='#contact'
          >
            Realizacje
          </a>
          <a
            className='poppins-normal mx-8 hover:bg-gradient-to-r hover:text-sky-400 hover:bg-clip-text duration-300 hover:scale-110'
            href='#contact'
          >
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
