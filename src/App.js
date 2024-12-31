import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';
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
import Footer from './views/Footer.js';

// Modal Component
const TermsConditionsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 max-h-[80vh] overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-sm text-gray-600 mb-4">Last updated: 12/31/2024</p>

          <section className="mb-8">
            <p className="text-gray-700 mb-4">
              THIS TERMS OF USE AGREEMENT (the “Agreement”) constitutes a legally binding agreement by and between
              signjoy, LLC, a limited liability company organized under the laws of the state of Maryland (“signjoy”)
              and the client, whether personally or on behalf of an entity (“Client”), with regard to access and use of
              signjoy’s website: <a href="https://www.signjoy.in/" className="text-blue-600 underline">https://www.signjoy.in/</a>
            </p>
          </section>

          {/* Sections for Terms and Conditions */}
          {[
{ title: "1. Intellectual Property Rights", content: "Unless otherwise indicated, the Website is the property of signjoy and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics..." },
{ title: "2. Ownership of Materials", content: "Notwithstanding signjoy’s ownership of Submissions, as described in Paragraph 4 (“Client Feedback”), all design and original source files created on Client’s behalf (“Projects”) belong to Client..." },
{ title: "3. Third-Party Fonts", content: "In the event that any Project incorporates fonts that are not owned by signjoy and require a commercial license in order for Client to legally reproduce, distribute, or publicly display the Project..." },
{ title: "4. User Representations", content: "By using the Website, Client represents and warrants that: Client has the legal capacity and agrees to comply with these Terms of Use; Client is not a minor in the jurisdiction of their domicile..." },
{ title: "5. Prohibited Activities", content: "Client shall not access or use the Website for any purpose other than that for which the Website is made available to the Client. The Website may not be used in connection with any commercial endeavors..." },
{ title: "6. Client Feedback", content: "Client acknowledges and agrees that any questions, comments, suggestions or other feedback or submission (each a “Submission”) shall be the sole property of signjoy..." },
{ title: "7. Management and Oversite", content: "signjoy reserves the right to monitor the Website for violations of these Terms of Use and to take appropriate legal action in response to a violation of the Terms of Use or any applicable law, statute or regulation..." },
{ title: "8. Privacy Policy", content: "By using the Website, Client agrees to be bound and abide by the Privacy Policy and the terms more particularly set forth therein and adopted and incorporated herein..." },
{ title: "9. Returns and Refunds", content: "signjoy reserves the right to deny refunds based on its own self discretion and without notice or liability to Client. Refund requests are assessed on a case-by-case basis..." },
{ title: "10. Modification", content: "signjoy reserves the right to change, alter, modify, amend or remove anything or any content on the Website for any reason at its sole discretion..." },
{ title: "11. Connection Interruptions", content: "signjoy does not guaranty or warrant the Website will be available and accessible at all times. Issues with hardware, software, or other items may result in interruption delays or errors..." },
{ title: "12. Governing Law", content: "These Terms of Use shall be governed by and construed in accordance with the laws of the State of Maryland without regard to conflict of law principals..." },
{ title: "13. Litigation", content: "Any legal action of whatever nature shall be brought in the state courts of Washington County, Maryland, or in the United States District Court for the District of Maryland..." },
{ title: "14. Disclaimer", content: "The Website is provided on an as-is, as-available basis. Client agrees that its use of the Website and Services are at Client’s sole risk..." },
{ title: "15. Limitations of Liability and Indemnification", content: "signjoy and its directors, employees, members, independent contractors, or agents shall not be liable to Client or any third party for any direct, indirect, consequential, incidental, special, or punitive damages..." },
{ title: "16. User Data", content: "Client is solely responsible for all data transmitted to or that relates to any activity Client has undertaken using the Website. signjoy shall have no liability to Client for any loss or corruption of any such data..." },
{ title: "17. Electronic communications, transactions and signatures", content: "Client hereby consents to receive electronic communications from signjoy and Client agrees that all agreements, notices, disclosures, and other communications sent via email or through the Website..." },
{ title: "18. Showcasing Design Work", content: "signjoy reserves the right to share design work on digital channels including social media, website, etc. unless otherwise agreed upon..." },
{ title: "19. Referrals", content: "Referral tracking and payouts are handled through our third-party partner, Rewardful.com..." },
{ title: "20. Miscellaneous", content: "These Terms of Use and any policies posted on the Website or regarding the Website constitute the entire agreement and understanding between the Client and signjoy..." }            // Add more sections as needed
          ].map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h2>
              <p className="text-gray-700">{section.content}</p>
            </section>
          ))}

          <section className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              For any questions or complaints regarding the Website, please contact signjoy at: 
              <a href="mailto:signjoy.design@gmail.com" className="text-blue-600 underline"> signjoy.design@gmail.com</a>.
            </p>
          </section>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

function App() {
  // State for Modal Visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to Open and Close Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <div className="overflow-x-hidden bg-gradient-to-r mx-auto from-blue-500 to-purple-600 bg-clip-text text-transparent">
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

        {/* Footer Section */}
        <footer className="py-6 md:py-0">
          <div className="container flex flex-col mx-auto items-center justify-center gap-4 md:h-24 md:flex-row text-gray-900">
            <p className="text-sm text-gray-400 font-light">
              All rights reserved. © {new Date().getFullYear()} SignJoy By using this site, you agree to our{' '}
              <span
                onClick={openModal}
                className="text-blue-600 underline cursor-pointer text-sm"
              >
                Terms & Conditions
              </span>.
            </p>
          </div>
        </footer>
        {/* Modal Component */}
        <TermsConditionsModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default App;
