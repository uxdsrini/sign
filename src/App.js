// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Header from './views/Header';
import Navbar from './views/Navbar';
import Services from './views/ServicesSection';
import HowItWorks from './views/Howitworks';
import ScrollBar from './views/ScrollBar';
import FAQSection from './views/FAQSection';
import SocialProfile from './views/Social';
import Benifits from './views/FeatureGrid';
import CtaSection from './views/CtaSection';
import PricingSection from './views/PricingSection';
import Footer from './views/Footer.js';
import TermsAndConditions from './pages/TermsConditions.js';
import {BlogList}   from './pages/BlogList';
import { BlogDetail } from './pages/BlogDetails';
import ServicePage from './pages/ServicesPage';

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
                    to="/ServicesList"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    to="/termsconditions"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    TermsAndConditions
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


// Main App Component
function App() {

  return (
    <div className="App">
      <div className="overflow-x-hidden bg-gradient-to-r mx-auto from-blue-500 to-purple-600 bg-clip-text text-transparent">
        <Router>
       
          <Navigation />
          <Routes>
            <Route path="/servicespage" element={<ServicePage />} />
            <Route path="/termsconditions" element={<TermsAndConditions />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
                        <Route path="/BlogList" element={<BlogList />} />
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
                
                  className="text-blue-600 underline cursor-pointer text-sm"
                >
                  <Link to="/termsconditions">Terms & Conditions</Link>

                  
                </span>
                
              </p>
            </div>
          </footer>
                </>
              }
            />
          </Routes>

       

  
        </Router>
      </div>
    </div>
  );
}

export default App;
