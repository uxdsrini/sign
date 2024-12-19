import React from 'react';
import './App.css';
import Header from './views/Header';
import Navbar from './views/Navbar';
import Services from './views/Services'
import HowItWorks from './views/Howitworks';
import ScrollBar from './views/ScrollBar';
import FAQSection from './views/FAQSection';
import SocialProfile from './views/Social';

function App() {
  return (
    <div className="App">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
      <Navbar />
      <Header />
      <ScrollBar />
      <SocialProfile />
      <HowItWorks />
      <Services />
      <FAQSection />
      <footer className="py-6 md:py-0">
        <div className="container flex flex-col max-w-screen-2xl items-center justify-center gap-4 md:h-24 md:flex-row text-gray-900">
          <p className="text-sm text-gray-400 font-light">
           All rights reserved. © {new Date().getFullYear()} SignJoy
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
