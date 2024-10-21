import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-900 to-transparent h-full"></div>
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold">Expert Consultancy</h1>
        <p className="mt-4 max-w-xl mx-auto">
          SAP professional consulting services offering flexible solutions, providing quick answers to long-term support. Connect with consultants for your SAP projects, with tools to monitor past and ongoing work.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
