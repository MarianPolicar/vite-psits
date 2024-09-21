import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">PSITS</h3>
            <p className="text-gray-400">Empowering IT students for a brighter future.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400 transition-colors duration-200">About Us</a></li>
              <li><a href="/events" className="hover:text-blue-400 transition-colors duration-200">Events</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ndkcpsits?mibextid=ZbWKwL" className="text-white hover:text-blue-400 transition-colors duration-200">
                <Facebook />
              </a>
        
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; 2024 PSITS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
