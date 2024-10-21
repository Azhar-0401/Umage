import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import LicensedSale from './LicensedSale';
import SAPRollout from './SAPRollout';
import SAPUpgrade from './SAPUpgrade';
import Footer from './Footer';
import Product from './Product';
import OurServices from './OurServices';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="top" className="pt-16"> {/* This ensures scrolling to top */}
        <HeroSection />
        <LicensedSale />
        <SAPRollout />
        <SAPUpgrade />
        
        {/* Product Section */}
        <div id="product-section">
          <Product />
        </div>

        {/* Services Section */}
        <div id="services-section">
          <OurServices />
        </div>

        {/* About Us Section */}
        <div id="about-section">
          <AboutUs />
        </div>

        {/* Contact Us Section */}
        <div id="contact-section">
          <ContactUs />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
