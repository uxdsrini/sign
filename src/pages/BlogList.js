import React from 'react';
import { BlogCard } from '../pages/BlogCard';
import { blogs } from '../pages/data/blogs';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ServicesNav from '../views/ServicesNav.js';
import Footer from '../views/Footer';


export const BlogList = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <ServicesNav />
        <div className='inline-block align-middle py-4 px-2'>
      <Link
          to="/"
          className="text-orange-600 inline-block 
         align-middle cursor-pointer py-2 px-4 hover:text-orange-800"
        >
          <ArrowLeft className="inline-block 
         align-middle w-4 h-4 mr-2 " />Back to Home
        </Link>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights, tutorials, and the latest updates from our team
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Footer />
      {/* Rest of the sections remain unchanged */}
      <footer className="py-6 md:py-0">
            <div className="container flex flex-col mx-auto items-center justify-center gap-4 md:h-24 md:flex-row text-gray-900">
              <p className="text-sm text-gray-400 font-light">
                All rights reserved. © {new Date().getFullYear()} SignJoy By using this site, you agree to our{' '}
                <span
                
                  className="text-blue-600 underline cursor-pointer text-sm"
                >
                  <Link to="/termsconditions">Terms & Conditions</Link>

                  
                </span>
                
              </p>
            </div>
          </footer>
    </div>
  );
};
