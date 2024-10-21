import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';  // For navigation
import { Link as ScrollLink, scroller } from 'react-scroll'; // For scrolling within the same page

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to navigate to home and scroll to the section
  const handleScrollToSection = (section) => {
    if (location.pathname === '/') {
      // If we are already on the home page, just scroll to the section
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -70,  // Adjust offset for the navbar height
      });
    } else {
      // Navigate to home first, then scroll after navigation
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 100);  // Delay to ensure navigation to Home page completes
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="logo text-2xl font-bold">NLM Solutions</div>
        <ul className="flex space-x-4">
          <li>
            {/* Clicking on Home should scroll to the top */}
            <ScrollLink to="top" smooth={true} duration={500} offset={-70} className="hover:text-blue-400 cursor-pointer">
              Home
            </ScrollLink>
          </li>
          <li>
            {/* Clicking on Products */}
            <button onClick={() => handleScrollToSection('product-section')} className="hover:text-blue-400">
              Products
            </button>
          </li>
          <li>
            {/* Clicking on Services */}
            <button onClick={() => handleScrollToSection('services-section')} className="hover:text-blue-400">
              Services
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/about')} className="hover:text-blue-400">
              About Us
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/contact')} className="hover:text-blue-400">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
