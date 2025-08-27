import { useState } from 'react';
import './output.css';

function App() {
  return (
    <>
      {/* HERO */}
      <section
        id='hero'
        className='md:max-w-[1440px] md:h-[1000px] max-w-[576px] w-full h-[750px]'
      >
        <div className='container mx-auto px-6 py-12 md:px-24'>
          <nav className='flex items-center justify-between text-white'>
            <img src='./FurniShop.svg' alt='' />
            {/* DESKTOP MENU */}
            <ul className='desktop-menu hidden md:flex md:gap-16 text-sm font-thin '>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Features</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </nav>

          <div className='hero-text text-white flex flex-col items-center justify-center md:h-[720px] gap-4 font-saira p-8'>
            <h1 className='md:text-[64px] text-2xl mt-4 text-center tracking-tight leading-none'>
              Creative Home Simplify Your Furniture
            </h1>
            <p className='font-thin mb-4'>
              Buying the best furniture can not be easier. Pick the furniture
              and we will help design your room.
            </p>
            <button className='cta-button bg-[rgb(226,226,226, 0.4)] backdrop-blur-sm px-12 py-2'>
              Shop now
            </button>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 bg-[#286f6c] text-white w-full rounded-lg px-16 py-4'>
            <div className='banner-grid divider'>
              <span className='figure'>7 </span>
              <span>Year</span>
              <span>Experience</span>
            </div>

            <div className='banner-grid divider'>
              <span className='figure'>2</span>
              <span>Opened in </span>
              <span>the country</span>
            </div>

            <div className='banner-grid divider'>
              <span className='figure'>2</span>
              <span>Opened in </span>
              <span>the country</span>
            </div>

            <div className='banner-grid'>
              <span className='figure'>260+</span>
              <span>Variant </span>
              <span>Furnitue</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
