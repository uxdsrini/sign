import React, { useState } from 'react';
import { Link } from 'react-scroll';
import signjoy from '../assets/images/logo512.png';
import { Link as RouterLink } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state for dropdown

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      {/* Main Navbar */}
      <nav id='home' className="bg-black 2xl rounded-full px-6 py-4 flex justify-between items-center shadow-lg mx-2 mt-6 sticky top">
        {/* Logo */}
        <div className="flex rounded-full items-center bg-gradient-to-r from-yellow-500 to-yellow-600">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent rounded-full flex items-center justify-start pl-3 gap-4">
          <img src={signjoy} alt="Signjoy Logo" className="w-6 h-6" />
          <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            ><span className="text-2xl md:text-3xl font-bold font-poppins bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Signjoy
            </span></Link>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 text-white font-light">
          <li>
            <Link
              to="howitServicess"
              smooth={true}
              duration={500}
              className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900"
            >
              How it Servicess
            </Link>
          </li>
          <li>
            <Link
              to="benifits"
              smooth={true}
              duration={500}
              className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900"
            >
              Benefits
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="pricing"
              smooth={true}
              duration={500}
              className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="faq"
              smooth={true}
              duration={500}
              className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900"
            >
              FAQ
            </Link>
          </li>
          <li>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900"
              >
                Works 
                <span className='pt-1'><svg class="-mr-1 size-5 text-black hover:text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg></span>
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <li>
                    <RouterLink to="/Services" className="block py-2 px-4 text-gray-900 hover:text-orange-600">
                      Services
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/Link2" className="block py-2 px-4 text-gray-900 hover:text-orange-600">
                      Blog
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/Link3" className="block py-2 px-4 text-gray-900 hover:text-orange-600">
                      Shop
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/Link3" className="block py-2 px-4 text-gray-900 hover:text-orange-600">
                      Books
                    </RouterLink>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li><a href='https://calendar.app.google/Uxfa6cdV1BJ48J5m6' target="_blank" rel="noreferrer">
          <button className="bg-black text-white px-4 py-2 rounded-full border border-white hover:bg-gradient-to-r from-yellow-500 to-yellow-600">
              Book a call
            </button></a>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
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

        <ul className="flex flex-col items-start gap-6 px-6 text-gray-900 text-lg font-medium">
          <li>
            <Link to="howitServicess" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900">
              How it Servicess
            </Link>
          </li>
          <li>
            <Link to="benifits" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900">
              Features
            </Link>
          </li>
          <li>
            <Link to="pricing" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="faq" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900">
              FAQ
            </Link>
          </li>
      
          <li>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:px-4 hover:py-2 hover:text-gray-900"
              >
                Servicess
                <span className='pt-1'><svg class="-mr-1 size-5 text-gray-900 hover:text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg></span>
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg">
                  <li>
                    <RouterLink to="/services" className="block py-2 px-4 text-gray-900 hover:text-orange-600">
                      Link1
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/Link2" className="block py-2 px-4 text-gray-900 hover:text-orange-600">
                      Link2
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/Link3" className="block py-2 px-4 text-gray-900 hover:text-orange-600">
                      Link3
                    </RouterLink>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
          <a href='https://calendar.app.google/Uxfa6cdV1BJ48J5m6' target="_blank" rel="noreferrer"><button className="className='text-black px-4 py-2 rounded-full hover:bg-gradient-to-r from-yellow-500 to-yellow-600">
          Book a call
            </button></a>
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
