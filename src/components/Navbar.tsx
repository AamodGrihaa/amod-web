
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
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="text-2xl font-bold text-amodDark-800 flex items-center space-x-2 group"
            >
              <span className="bg-amodBlue-600 text-white px-3 py-1 rounded transform group-hover:scale-105 transition-transform duration-300">
                AMOD
              </span>
              <span className="text-amodBlue-600 group-hover:text-amodBlue-700 transition-colors duration-300">
                GRIHA
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#why">Why Us</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="hover:bg-amodBlue-50 transform hover:scale-105 transition-all duration-300"
            >
              Login
            </Button>
            <Button 
              className="bg-amodBlue-600 hover:bg-amodBlue-700 transform hover:scale-105 transition-all duration-300"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-amodDark-800 hover:text-amodBlue-600 transition-colors p-2 rounded-lg hover:bg-amodBlue-50"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#home">Home</MobileNavLink>
              <MobileNavLink href="#about">About Us</MobileNavLink>
              <MobileNavLink href="#features">Features</MobileNavLink>
              <MobileNavLink href="#why">Why Us</MobileNavLink>
              <MobileNavLink href="#faq">FAQ</MobileNavLink>
              <MobileNavLink href="#contact">Contact</MobileNavLink>
            </div>
            <div className="px-2 py-3 border-t border-gray-200 flex flex-col space-y-2">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full bg-amodBlue-600 hover:bg-amodBlue-700">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-amodDark-800 hover:text-amodBlue-600 transition-all duration-300 relative group py-2"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amodBlue-600 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 text-base font-medium text-amodDark-800 hover:text-amodBlue-600 hover:bg-amodBlue-50 rounded-md transition-all duration-300"
  >
    {children}
  </a>
);

export default Navbar;
