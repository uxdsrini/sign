import React from 'react';
import ReactModal from 'react-modal';

const TermsConditionsModal = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Terms & Conditions"
      ariaHideApp={false}
      className="relative max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-lg p-8 focus:outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start"
    >
      <div className="max-h-screen overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
        <p className="text-sm text-gray-600 mb-4">Last updated: 9/16/2020</p>

        {/* Dynamic Terms Content */}
        {[
          { title: "1. Intellectual Property Rights", content: "Content for section 1..." },
          { title: "2. Ownership of Materials", content: "Content for section 2..." },
          { title: "3. Third-Party Fonts", content: "Content for section 3..." },
          { title: "4. User Representations", content: "Content for section 4..." },
          // Add other sections here...
          { title: "20. Miscellaneous", content: "Content for section 20..." }
        ].map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h2>
            <p className="text-gray-700">{section.content}</p>
          </section>
        ))}

        <button
          onClick={onClose}
          className="block w-full mt-4 py-2 bg-blue-600 text-white text-center font-semibold rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </ReactModal>
  );
};

export default TermsConditionsModal;
