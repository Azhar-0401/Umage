import React from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll'; // For smooth scrolling

const Navbar = () => {
  const handleScrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
      offset: -70,  // Adjust offset for the fixed navbar height
    });
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="logo text-2xl font-bold">NLM Solutions</div>
        <ul className="flex space-x-4">
          <li>
            <ScrollLink to="top" smooth={true} duration={500} offset={-70} className="hover:text-blue-400 cursor-pointer">
              Home
            </ScrollLink>
          </li>
          <li>
            <button onClick={() => handleScrollToSection('product-section')} className="hover:text-blue-400">
              Products
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection('services-section')} className="hover:text-blue-400">
              Services
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection('about-section')} className="hover:text-blue-400">
              About Us
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection('contact-section')} className="hover:text-blue-400">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
