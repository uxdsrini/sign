import { Link } from 'react-scroll';
import { Instagram, Facebook, Linkedin, Contact, ArrowUp } from 'lucide-react';
import signjoy from '../assets/images/logo512.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white p-12 mx-2 justify-between max-w-7xl lg:mx-auto rounded-3xl relative">
      <div className="mx-auto px-4">
        <div className="flex flex-col items-start md:items-center justify-between gap-8 mx-auto">
          {/* Logo and Company Name */}
          <div className="flex flex-col items-center mx-auto">
            <span className="flex items-center justify-center gap-2 md:gap-2 mb-2">
              <img
                src={signjoy}
                alt="Signjoy Logo"
                className="w-8 h-8 md:mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 text-transparent rounded-full outline outline-offset-0 outline-yellow-600"
              />
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <span className="text-2xl md:text-3xl font-bold font-poppins bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Signjoy
                </span>
              </Link>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center mx-auto">
            <ul className="flex flex-col lg:flex-row items-center text-white font-light space-y-4 lg:space-y-0 lg:space-x-6">
              <li>
                <Link
                  to="howitworks"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:text-gray-900"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  to="benifits"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:text-gray-900"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:text-gray-900"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="pricing"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:text-gray-900"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="faq"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer py-2 px-4 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:rounded-full hover:text-gray-900"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <button className="bg-black text-white px-4 py-2 rounded-full border border-white hover:bg-gradient-to-r from-yellow-500 to-yellow-600">
                  Book a call
                </button>
              </li>
            </ul>
          </nav>

          {/* Social Media Section */}
          <div className="flex flex-col gap-4 mx-auto">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                className="p-2 rounded-full hover:text-yellow-600 "
                target="_blank"
                rel="noopener noreferrer"
              >
                   <Instagram className="w-5 h-5 " />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                className="p-2 rounded-full hover:text-yellow-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 rounded-full hover:text-yellow-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://behance.net"
                className="p-2 rounded-full hover:text-yellow-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Contact className="w-5 h-5" />
                <span className="sr-only">Behance</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Go to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition"
        aria-label="Go to Top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}
