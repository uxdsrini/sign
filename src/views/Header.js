import React from 'react';
import signjoy from '../assets/images/logo512.png';
import { Link } from 'react-scroll';
import AnimatedSection from '../../components/AnimatedSection'; // Corrected path

const Header = () => {
  return (
    <AnimatedSection animationType="fadeInUp">
      <header className="bg-[#facc15] dark:bg-gray-800 text-center py-10 px-4 md:px-8 my-2 mx-2 rounded-3xl">
        {/* Top Logo and Brand */}
        <div className="flex items-center justify-center gap-2 md:gap-2 mb-2">
          <img src={signjoy} alt="Signjoy Logo" className="w-12 h-12" />
        </div>

        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white leading-tight">
            A design agency with <br />
            <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">a fresh perspective</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Design subscriptions for everyone. Pause or cancel anytime.
          </p>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="cursor-pointer py-2 px-4"
          >
            <button className="mt-4 bg-black dark:bg-gray-700 text-white px-6 py-2 rounded-md text-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition">
              See plans
            </button>
          </Link>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-700 dark:text-gray-400 mt-4">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            <span>Available now</span>
          </div>
        </div>
      </header>
    </AnimatedSection>
  );
};

export default Header;
