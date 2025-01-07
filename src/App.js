// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Header from './views/Header';
import Navbar from './views/Navbar';
import Services from './views/Services';
import HowItWorks from './views/Howitworks';
import ScrollBar from './views/ScrollBar';
import FAQSection from './views/FAQSection';
import SocialProfile from './views/Social';
import Benifits from './views/FeatureGrid';
import CtaSection from './views/CtaSection';
import PricingSection from './views/PricingSection';
import Link1 from './pages/Services.js';
import Footer from './views/Footer.js';

// Navigation Component
const Navigation = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const shouldShowNav = !['/link1'].includes(location.pathname.toLowerCase());

  if (!shouldShowNav) return null;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="relative flex items-center">
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/servicespage"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Link 1
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Terms & Conditions Modal Component
const TermsConditionsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 max-h-[80vh] overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-sm text-gray-600 mb-4">Last updated: 12/31/2024</p>

          {[{ title: "1. Intellectual Property Rights", content: "All content remains the property of signjoy..." },
            { title: "2. Ownership of Materials", content: "All design and original source files belong to Client..." }]
            .map((section, index) => (
              <section key={index} className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h2>
                <p className="text-gray-700">{section.content}</p>
              </section>
            ))}
          <button
            onClick={onClose}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <div className="overflow-x-hidden bg-gradient-to-r mx-auto from-blue-500 to-purple-600 bg-clip-text text-transparent">
        <Router>
       
          <Navigation />
          <Routes>
            <Route path="/link1" element={<Link1 />} />
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Header />
                  <ScrollBar />
                  <SocialProfile />
                  <HowItWorks />
                  <Benifits />
                  <PricingSection />
                  <Services />
                  <CtaSection />
                  <FAQSection />
                  <Footer />
                  <footer className="py-6 md:py-0">
            <div className="container flex flex-col mx-auto items-center justify-center gap-4 md:h-24 md:flex-row text-gray-900">
              <p className="text-sm text-gray-400 font-light">
                All rights reserved. © {new Date().getFullYear()} SignJoy By using this site, you agree to our{' '}
                <span
                  onClick={() => setIsModalOpen(true)}
                  className="text-blue-600 underline cursor-pointer text-sm"
                >
                  Terms & Conditions
                </span>
              </p>
            </div>
          </footer>
                </>
              }
            />
          </Routes>

       

          <TermsConditionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Router>
      </div>
    </div>
  );
}

export default App;
