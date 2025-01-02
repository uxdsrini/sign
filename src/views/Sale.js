import React from 'react';
import SaleImage from '../assets/images/001.webp';

// Import any required components or icons
const Sale = () => {
  return (
    <section className="px-4 py-12 md:py-24 bg-black-200 text-primary-foreground">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-center md:text-center md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to Start 2025 in Style?
          </h2>
          <p className="max-w-[600px] text-primary-foreground/80">
            Order now and get your premium calendar delivered to your doorstep.
          </p>
          <div className="pt-4">
            <button
              className="md:mx-0 bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-secondary-dark transition"
            >
              Buy Now
            </button>
          </div>
          <span className='text-gray-400 text-sm font-light'>not included shipping charges</span>

        </div>
        <div className="md:w-1/2">
          <img src={SaleImage} alt="Premium Calendar" className="rounded-[24px] w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Sale;
