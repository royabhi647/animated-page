import React from 'react';
import topGif from "../assets/top-gif.webp";

function Header() {
  return (
    <div className='h-16 bg-white flex items-center px-4 sm:px-10 md:px-20'>
      <img src={topGif} className='h-10 w-10 rounded-lg' alt="Top Gif" />

      <div className='flex items-center justify-between w-full ml-4'>
        <div className='flex items-center flex-1 justify-center'>
          <ul className='flex space-x-2 sm:space-x-4 md:space-x-8'>
            <li className='text-black cursor-pointer font-serif'>
              <a href="#emotions" className="hover:text-gray-700">Emotions</a>
            </li>
            <li className='text-black cursor-pointer font-serif'>
              <a href='#manifesto' className="hover:text-gray-700">Manifesto</a>
            </li>
            <li className='text-black cursor-pointer font-serif'>
              <a href='#self-awareness-test' className="hover:text-gray-700">Self-awareness test</a>
            </li>
            <li className='text-black cursor-pointer font-serif'>
              <a href='#feedback' className="hover:text-gray-700">Work With Us</a>
            </li>
          </ul>
        </div>
        <div>
          <button className='bg-black text-white py-2 px-3 sm:px-4 rounded-full hover:bg-gray-800'>
            Download app
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;