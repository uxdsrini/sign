import React from 'react';

const PortfolioLinks = () => {
  return (
    <div  className="bg-black mx-auto lg:w-full lg:max-w-3xl lg:mx-auto px-2 py-2 md:flex text-white p-8 rounded-lg border border-yellow-500 mt-1 justify-center gap-12 items-center mx-1.5 item-center">
      <div className="flex flex-col items-center text-center mt-6 mb-6">
        <div className="text-3xl ">
        <a href='https://dribbble.com/' target='blank' rel="noreferrer"><i className="fab fa-dribbble hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:rounded-full p-2"></i></a>
        </div>
        <span className="font-medium text-lg mt-2 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:text-gray-900 px-2 "><a href='https://dribbble.com/' target="_blank" rel="noreferrer">Dribbble</a></span>
        <span className="text-sm text-gray-400"><a href='https://dribbble.com/' target='blank' rel="noreferrer">See My Work</a></span>
      </div>
      <div className="flex flex-col items-center text-center mt-6 mb-6">
        <div className="text-3xl">
        <a href='https://www.behance.net/' target="_blank" rel="noreferrer"><i className="fab fa-behance hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:rounded-full p-2"></i></a>
        </div>
        <span className="font-medium text-lg mt-2 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:text-gray-900 px-2"><a href='https://www.behance.net/' target="_blank" rel="noreferrer">Behance</a></span>
        <span className="text-sm text-gray-400"><a href='https://www.behance.net/' target="_blank" rel="noreferrer" >See My Work</a></span>
      </div>
      <div className="flex flex-col items-center text-center mt-6 mb-6">
        <div className="text-3xl">
        <a href='https://www.linkedin.com/in/signjoy/' target="_blank" rel="noreferrer"><i className="fab fa-linkedin w-12 h-12 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:rounded-full p-2"></i></a>
        </div>
        <span className="font-medium text-lg mt-2 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:text-gray-900 px-2"><a href='https://www.linkedin.com/in/signjoy/' target="_blank" rel="noreferrer">LinkedIn</a></span>
        <span className="text-sm text-gray-400"><a href='https://www.linkedin.com/in/signjoy/' target="_blank" rel="noreferrer">See My Work</a></span>
      </div>
      <div className="flex flex-col items-center text-center mt-6 mb-6">
        <div className="text-3xl">
        <a href='https://www.instagram.com/' target="_blank" rel="noreferrer"><i className="fab fa-instagram w-12 h-12  hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:rounded-full p-2"></i></a>
        </div>
        <span className="font-medium text-lg mt-2 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:text-gray-900 px-2"><a href='https://www.instagram.com/' target="_blank" rel="noreferrer">Instagram</a></span>
        <span className="text-sm text-gray-400"><a href='https://www.instagram.com/' target="_blank" rel="noreferrer">See My Work</a></span>
      </div>
    </div>
  );
};

export default PortfolioLinks;
