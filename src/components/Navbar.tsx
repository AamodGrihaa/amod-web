
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-amodDark-800">
              Amod <span className="text-amodBlue-600">Griha</span>
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
            <Button variant="outline" className="hover:bg-amodBlue-50">
              Login
            </Button>
            <Button className="bg-amodBlue-600 hover:bg-amodBlue-700">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-amodDark-800 hover:text-amodBlue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
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
    className="text-amodDark-800 hover:text-amodBlue-600 transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-amodBlue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 text-base font-medium text-amodDark-800 hover:text-amodBlue-600 hover:bg-amodBlue-50 rounded-md transition-colors duration-200"
  >
    {children}
  </a>
);

export default Navbar;
