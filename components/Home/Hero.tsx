import React from 'react';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative pb-10 pt-20 mx-auto w-full md:pt-32 lg:h-[70vh]'
    >
      <div className='container h-full mx-auto'>
        <div className='grid h-full items-center gap-4 md:grid-cols-2'>
          <div className='animate__animated animate__slideInUp flex h-full flex-col items-center justify-center py-10 poppins-bold md:col-span-1 md:items-start md:py-0 '>
            <p className='mx-2 text-center font-mono italic text-gray-700 dark:text-slate-400 md:text-left text-2xl'>
              Witaj w
            </p>
            <h1 className='mb-6 mx-2 text-center text-4xl poppins-bold text-sky-400 md:text-left lg:text-6xl xl:text-7xl'>
              Wave
              <span className='text-white'>Code</span>
              <span className='text-sky-400'>!</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
