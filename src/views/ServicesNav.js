import React from 'react';
import signjoy from '../assets/images/logo512.png';


const Navbar = () => {
  return (
    <>
      {/* Main Navbar */}
      <nav id='home' className="bg-black 2xl rounded-full px-6 py-4 flex justify-between items-center shadow-lg mx-2 mt-6 sticky top">
        {/* Logo */}
        <div className="flex rounded-full items-center bg-gradient-to-r from-yellow-500 to-yellow-600">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent rounded-full flex items-center justify-start pl-3 gap-4">
          <img src={signjoy} alt="Signjoy Logo" className="w-6 h-6" />
          <span className="text-2xl md:text-3xl font-bold font-poppins bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">

            </span>
          </div>
          
        </div>
        <ul>
          <li><a href='https://calendar.app.google/Uxfa6cdV1BJ48J5m6' target="_blank" rel="noreferrer">
          <button className="bg-black text-white px-4 py-2 rounded-full border border-white hover:bg-gradient-to-r from-yellow-500 to-yellow-600">
              Book a call
            </button></a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
