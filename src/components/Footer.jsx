import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const reviews = [
    {
      name: 'Priya S.',
      review: 'Amazing food and lightning-fast delivery. Highly recommended!',
    },
    {
      name: 'Rahul M.',
      review: 'The app is super user-friendly and the variety is great.',
    },
    {
      name: 'Anita K.',
      review: 'Delicious meals, and excellent customer service!',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-12 pt-8 pb-6 px-6">
      {/* Footer Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* About / Branding */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-orange-500">Food</span>Buddy
          </h3>
          <p className="text-gray-300">
            Delivering happiness to your doorstep. Your go-to app for food delivery from your favorite restaurants!
          </p>
        </div>

        {/* Customer Reviews */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Customer Reviews</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            {reviews.map((r, index) => (
              <li key={index} className="border-l-4 border-orange-500 pl-3">
                <p className="italic">"{r.review}"</p>
                <p className="text-orange-400 mt-1">- {r.name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t pt-4">
        © {new Date().getFullYear()} FoodBuddy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
