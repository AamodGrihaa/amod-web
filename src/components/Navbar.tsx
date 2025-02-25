import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRegistrationPage = location.pathname === "/register-society" || location.pathname==="/login"|| location.pathname==="/contact";
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Name */}
          <a href="/" className="flex items-center space-x-3 group">
            <img 
              src="/images/Amodgriha.png" 
              alt="Amod Griha Logo" 
              className="h-10 w-10 object-cover transition-transform duration-300 transform group-hover:scale-110" 
            />
            <span className="text-2xl font-bold flex items-center space-x-2">
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1 rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300">
                AMOD
              </span>
              <span className={`transition-colors duration-300 ${isScrolled || isRegistrationPage ? 'text-blue-700' : 'text-white'}`}>

                GRIHA
              </span>
            </span>
          </a>
          {!isRegistrationPage && 
          <>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home" isScrolled={isScrolled}>Home</NavLink>
            <NavLink href="#about" isScrolled={isScrolled}>About Us</NavLink>
            <NavLink href="#features" isScrolled={isScrolled}>Features</NavLink>
            {/* <NavLink href="#why" isScrolled={isScrolled}>Why Us</NavLink> */}
            <NavLink href="#faq" isScrolled={isScrolled}>FAQ</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>
          </>
          }

          

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!(location.pathname==='/login') && 
            <>
            <Button 
            onClick={() => navigate("/login", { replace: (location.pathname==='/register-society') ? true : false })}

            variant="outline" className="hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
              Login
            </Button>
            </>
            }

            {!(location.pathname==='/register-society') && 
            <>
              <Button 
            onClick={() => navigate("/register-society",{ replace: (location.pathname==='/login') ? true : false })} // Navigate to the registration page
            className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
            Enroll for Society
            </Button>
            </>
            }
            
            
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
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md border-t flex flex-col items-center justify-center transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <button
            onClick={closeMobileMenu}
            className="absolute top-5 right-5 text-gray-800 hover:text-blue-600"
          >
            <X size={28} />
          </button>
          <div className="space-y-6 text-center">
            <MobileNavLink href="#home" closeMenu={closeMobileMenu}>Home</MobileNavLink>
            <MobileNavLink href="#about" closeMenu={closeMobileMenu}>About Us</MobileNavLink>
            <MobileNavLink href="#features" closeMenu={closeMobileMenu}>Features</MobileNavLink>
            <MobileNavLink href="#why" closeMenu={closeMobileMenu}>Why Us</MobileNavLink>
            <MobileNavLink href="#faq" closeMenu={closeMobileMenu}>FAQ</MobileNavLink>
            <MobileNavLink href="#contact" closeMenu={closeMobileMenu}>Contact</MobileNavLink>
          </div>
          <div className="mt-6 space-y-3 w-4/5">
            <Button variant="outline" className="w-full">Login</Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign Up</Button>
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

const MobileNavLink = ({ href, children, closeMenu }) => (
  <a
    href={href}
    className="block px-4 py-2 text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
    onClick={closeMenu}
  >
    {children}
  </a>
);

export default Navbar;
