import React from 'react';
import signjoy from '../assets/images/logo512.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-[#facc15] text-center py-10 px-4 md:px-8 my-2 mx-2 rounded-3xl">
      {/* Top Logo and Brand */}
      <div className="flex items-center justify-center gap-2 md:gap-2 mb-2">
        <img src={signjoy} alt="Signjoy Logo" className="w-12 h-12" />
       </div>

      {/* Hero Section */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
        A design agency with  <br />
          <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">a fresh perspective</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Design subscriptions for everyone. Pause or cancel anytime.
        </p>
        <Link
              to="pricing"
              smooth={true}
              duration={500}
              className="cursor-pointer py-2 px-4"
            >
              <button className="mt-4 bg-black text-white px-6 py-2 rounded-md text-lg hover:bg-gray-800 transition">
          <a href=''></a>See plans
        </button>
            </Link>
        
        <div className="flex items-center justify-center gap-2 text-sm text-gray-700 mt-4">
          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
          <span>Available now</span>
        </div>
      </div>
     
    </header>
  );
};

export default Header;
