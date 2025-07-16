import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">About FoodBuddy</h1>

      <p className="text-lg mb-4">
        <strong>FoodBuddy</strong> is your digital foodie friend—helping you discover amazing food, track your cravings, and connect with local flavors across India.
      </p>

      <p className="mb-4">
        Our mission is simple: <span className="font-medium">Make food discovery easy, personal, and fun</span>. Whether you’re searching for the best pizza in town, exploring new cuisines, or managing your orders, FoodBuddy is with you at every bite.
      </p>

      <p className="mb-4">
        From Mumbai’s bustling food streets to hidden gems in Jaipur, we bring India's culinary diversity to your fingertips.
      </p>

      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Let’s Get Social 🍕</h2>
        <p className="mb-4">Follow us for food inspiration, updates, and more:</p>
        <div className="flex space-x-4 text-orange-500 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-sm text-gray-500">
        Built with ❤️ by the FoodBuddy team | © {new Date().getFullYear()} FoodBuddy
      </div>
    </div>
  );
}

export default About;
