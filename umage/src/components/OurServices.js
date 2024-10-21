import React from 'react';

const OurServices = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-600">Our Services</h2>
        <p className="mt-6 text-center">
          We provide a wide array of SAP digital supply chain services, covering development, integration, migration, and maintenance. Our services enhance your supply chain operations for optimal efficiency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="icon bg-red-100 p-4 rounded-full">
              <span className="text-red-600 text-2xl">🛠</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Integration</h3>
            <p className="mt-2">Seamlessly integrate SAP solutions to streamline your operations.</p>
          </div>
          <div className="text-center">
            <div className="icon bg-red-100 p-4 rounded-full">
              <span className="text-red-600 text-2xl">🌐</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">BTP</h3>
            <p className="mt-2">
              Optimize your business processes with SAP Business Technology Platform.
            </p>
          </div>
          <div className="text-center">
            <div className="icon bg-red-100 p-4 rounded-full">
              <span className="text-red-600 text-2xl">🔧</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">S4 HANA</h3>
            <p className="mt-2">
              Implement SAP S/4HANA for a simplified business model and improved efficiency.
            </p>
          </div>
          <div className="text-center">
            <div className="icon bg-red-100 p-4 rounded-full">
              <span className="text-red-600 text-2xl">💡</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">ABAP</h3>
            <p className="mt-2">Leverage our ABAP development expertise for custom SAP solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
