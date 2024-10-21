import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import LicensedSale from './LicensedSale';
import SAPRollout from './SAPRollout';
import SAPUpgrade from './SAPUpgrade';
import Footer from './Footer';
import Product from './Product';
import OurServices from './OurServices';

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="top" className="pt-16"> {/* Add id="top" here */}
        <HeroSection />
        <LicensedSale />
        <SAPRollout />
        <SAPUpgrade />

        {/* Add id="product-section" to enable scrolling */}
        <div id="product-section">
          <Product />
        </div>

        {/* Add id="services-section" to enable scrolling */}
        <div id="services-section">
          <OurServices />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
