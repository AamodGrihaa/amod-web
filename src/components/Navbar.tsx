import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-gradient-to-r from-white/80 to-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold flex items-center space-x-2 group">
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1 rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300">
              AMOD
            </span>
            <span className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
              GRIHA
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home" isScrolled={isScrolled}>Home</NavLink>
            <NavLink href="#about" isScrolled={isScrolled}>About Us</NavLink>
            <NavLink href="#features" isScrolled={isScrolled}>Features</NavLink>
            <NavLink href="#why" isScrolled={isScrolled}>Why Us</NavLink>
            <NavLink href="#faq" isScrolled={isScrolled}>FAQ</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white/95 backdrop-blur-md border-t transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-5 pt-3 pb-5 space-y-2">
            <MobileNavLink href="#home">Home</MobileNavLink>
            <MobileNavLink href="#about">About Us</MobileNavLink>
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#why">Why Us</MobileNavLink>
            <MobileNavLink href="#faq">FAQ</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
          </div>
          <div className="px-5 py-4 border-t flex flex-col space-y-2">
            <Button variant="outline" className="w-full">
              Login
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, isScrolled }) => (
  <a
    href={href}
    className={`relative transition-all duration-300 group ${isScrolled ? 'text-black' : 'text-white'}`}
  >
    <span>{children}</span>
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="block px-4 py-2 text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
  >
    {children}
  </a>
);

export default Navbar;
