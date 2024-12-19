import React, { useState } from 'react';
import signjoy from '../assets/images/logo512.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-black rounded-full  px-6 py-4 flex justify-between items-center shadow-lg max-w-screen-2xl  mx-2  mt-6">
        {/* Logo */}
        <div className="flex rounded-full items-center bg-gradient-to-r from-yellow-500 to-yellow-600">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent rounded-full flex items-center justify-start pl-3 gap-4">
            <img src={signjoy} alt="Signjoy Logo" className="w-6 h-6" />
            <span className="text-2xl md:text-3xl font-bold font-poppins bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Signjoy
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 text-white font-light">
          <li className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900">How it works</li>
          <li className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900">Benifits</li>
          <li className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900">Services</li>
          <li className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900">Pricing</li>
          <li className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900">FAQ</li>
          <li>
            <button className="bg-black text-white px-4 py-2 rounded-full border border-white hover:bg-gradient-to-r from-yellow-500 to-yellow-600">
              Book a call
            </button>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {/* Hamburger Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
  className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-gray-700">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-start gap-6 px-6 text-gray-900 text-lg font-medium">
          <li className="cursor-pointer">How it works</li>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">FAQ</li>
          <li>
            <button className="bg-black text-white px-6 py-2 rounded-full">
              Book a call
            </button>
          </li>
        </ul>
      </div>

      {/* Backdrop for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
