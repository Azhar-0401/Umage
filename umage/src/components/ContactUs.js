import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel risus nec ipsum venenatis malesuada.</p>
                <p className="mb-2"><strong>Email:</strong> info@nlmitsolutions.in</p>
                <p className="mb-2"><strong>Phone:</strong> +91 84451-79615</p>
                <p className="mb-2"><strong>Address:</strong> 6th Floor, Dream Heights, Cyb, 5 Riico Cyber Park, Jodhpur, Rajasthan</p>
              </div>
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>
                <form className="bg-white p-8 shadow-lg rounded-lg">
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="Your Name" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="Your Email" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="Your Message"></textarea>
                  </div>
                  <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded-lg">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
