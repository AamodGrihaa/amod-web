
import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin, Link2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amodDark-800 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col space-y-4">
              <div>
                <span className="bg-amodBlue-600 text-white px-2 py-1 text-sm rounded">
                  AMOD GRIHA
                </span>
                <div className="mt-2 text-sm text-gray-400">By Amod Solutions</div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Amod Griha is designed to make life in your residential society easy and secure. 
                This app helps manage visitor access, domestic help and services, and much more with just a tap.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-white mb-4 font-semibold">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm hover:text-amodBlue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-amodBlue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-amodBlue-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-sm hover:text-amodBlue-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-amodBlue-500 transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white mb-4 font-semibold">CONTACT US</h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <a href="mailto:hello@amodgriha.com" className="hover:text-amodBlue-500 transition-colors">
                  hello@amodgriha.com
                </a>
              </li>
              <li className="text-sm">
                <a href="tel:+919876543210" className="hover:text-amodBlue-500 transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile App Section */}
          <div className="col-span-1">
            <h3 className="text-white mb-4 font-semibold">GET THE MOBILE APP</h3>
            <div className="space-y-4">
              <a href="#" className="block w-36">
                <img 
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" 
                  alt="Get it on Google Play"
                  className="w-full"
                />
              </a>
              <a href="#" className="block w-32">
                <img 
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png" 
                  alt="Download on the App Store"
                  className="w-full"
                />
              </a>
              <div className="flex space-x-4 mt-6">
                <SocialLink href="#" icon={<Facebook size={20} />} />
                <SocialLink href="#" icon={<Twitter size={20} />} />
                <SocialLink href="#" icon={<Youtube size={20} />} />
                <SocialLink href="#" icon={<Linkedin size={20} />} />
                <SocialLink href="#" icon={<Link2 size={20} />} />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2024 Amod Solutions Pvt. Ltd. – All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-amodBlue-600 transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
