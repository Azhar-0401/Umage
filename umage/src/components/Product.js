import React from 'react';

const Products = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600">Products</h2>
        <p className="mt-4 mb-12">Explore SAP range of products.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-100 p-8 shadow-lg rounded-lg">
            <img src="/path-to-image" alt="SAP" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold">SAP</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non lorem risus.</p>
          </div>
          <div className="bg-gray-100 p-8 shadow-lg rounded-lg">
            <img src="/path-to-image" alt="Non-SAP" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold">Non-SAP</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non lorem risus.</p>
          </div>
          <div className="bg-gray-100 p-8 shadow-lg rounded-lg">
            <img src="/path-to-image" alt="Other Product" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold">Other Product</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non lorem risus.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
