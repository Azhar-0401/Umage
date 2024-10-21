import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            {/* <p className="text-red-600 font-bold mb-4">Get connected with us on social networks:</p> */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook"></i> {/* Replace with icons */}
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Information */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <img src="/path-to-logo" alt="NLM Logo" className="h-12 mb-4 mx-auto md:mx-0" />
            <p className="text-gray-300">
              NLM IT Solutions Private Limited is a leading consulting and outsourcing company that specializes in procurement outsourcing and project implementation services.
            </p>
          </div>

          {/* Products */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h4 className="font-bold mb-4">PRODUCTS</h4>
            <ul className="text-gray-300">
              <li>SAP</li>
              <li>NON-SAP</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h4 className="font-bold mb-4">USEFUL LINKS</h4>
            <ul className="text-gray-300">
              <li>Home</li>
              <li>SAP Services</li>
              <li>Digital Automation</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-4">CONTACT</h4>
            <ul className="text-gray-300 space-y-2">
              <li><i className="fas fa-map-marker-alt"></i> 6th Floor, Dream Heights, Cyb, 5 Riico Cyber Park, Heavy Industrial Area, Jodhpur, Rajasthan, 342003</li>
              <li><i className="fas fa-envelope"></i> info@nlmitsolutions.in</li>
              <li><i className="fas fa-envelope"></i> nlmitsolutionss@gmail.com</li>
              <li><i className="fas fa-phone"></i> +91 84451-79615</li>
              <li><i className="fas fa-fax"></i> +91 84451-79615</li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400">
          © 2020 Copyright: nlmitsolutions.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
