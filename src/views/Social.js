import React from 'react';

const PortfolioLinks = () => {
  return (
    <div  className="bg-black lg:w-full lg:max-w-3xl lg:mx-auto px-2 py-2 md:flex text-white p-8 rounded-lg border border-lime-500 mt-1 justify-center gap-12 items-center mx-1.5 item-center">
      <div className="flex flex-col items-center text-center mt-6 mb-6">
        <div className="text-3xl ">
          <i className="fab fa-dribbble hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:rounded-full p-2"></i>
        </div>
        <span className="font-medium text-lg mt-2 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:text-gray-900 px-2 "><a href='https://dribbble.com/creativeboysri'>Dribbble</a></span>
        <span className="text-sm text-gray-400"><a href='https://dribbble.com/creativeboysri' target='blank' >See My Work</a></span>
      </div>
      <div className="flex flex-col items-center text-center mt-6 mb-6">
        <div className="text-3xl">
          <i className="fab fa-behance hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:rounded-full p-2"></i>
        </div>
        <span className="font-medium text-lg mt-2 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:text-gray-900 px-2"><a href='https://www.behance.net/creativeboysri'>Behance</a></span>
        <span className="text-sm text-gray-400"><a href='https://www.behance.net/creativeboysri' >See My Work</a></span>
      </div>
      <div className="flex flex-col items-center text-center mt-6 mb-6">
        <div className="text-3xl">
          <i className="fab fa-linkedin w-12 h-12 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:rounded-full p-2"></i>
        </div>
        <span className="font-medium text-lg mt-2 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:text-gray-900 px-2"><a href='https://www.linkedin.com/in/srinivasbiskula/'>LinkedIn</a></span>
        <span className="text-sm text-gray-400"><a href='https://www.linkedin.com/in/srinivasbiskula/'>See My Work</a></span>
      </div>
      <div className="flex flex-col items-center text-center mt-6 mb-6">
        <div className="text-3xl">
          <i className="fab fa-instagram w-12 h-12  hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:rounded-full p-2"></i>
        </div>
        <span className="font-medium text-lg mt-2 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:text-gray-900 px-2"><a href='https://www.instagram.com/creativeboysri/'>Instagram</a></span>
        <span className="text-sm text-gray-400"><a href='https://www.instagram.com/creativeboysri/'>See My Work</a></span>
      </div>
    </div>
  );
};

export default PortfolioLinks;
