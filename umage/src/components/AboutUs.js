import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-red-600 mb-8">About Us</h2>
            <p className="text-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula et odio vehicula feugiat.</p>
            
            {/* Company Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc at ultrices dapibus, sapien lorem egestas turpis, nec lobortis est nulla vel justo. Mauris eget ipsum a odio facilisis tincidunt.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a tortor vel eros feugiat euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
              </div>
            </div>

            {/* Company Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lectus non libero consectetur.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Integrity</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lectus non libero consectetur.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lectus non libero consectetur.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
