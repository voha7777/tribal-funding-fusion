
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-tribal-100 z-30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-tribal-900">Tribal<span className="text-tribal-500">Loans</span></span>
          </Link>
          
          {!isMobile ? (
            <nav className="flex space-x-6">
              <Link to="/" className="text-tribal-900 hover:text-tribal-500 font-medium">Home</Link>
              <Link to="/how-it-works" className="text-tribal-900 hover:text-tribal-500 font-medium">How It Works</Link>
              <Link to="/about-us" className="text-tribal-900 hover:text-tribal-500 font-medium">About Us</Link>
              <Link to="/contact" className="text-tribal-900 hover:text-tribal-500 font-medium">Contact</Link>
              <Link to="/apply" className="text-white bg-tribal-500 hover:bg-tribal-600 px-4 py-2 rounded-full font-medium">Apply Now</Link>
            </nav>
          ) : (
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-tribal-900 p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>
      
      {isMobile && (
        <div 
          className={`fixed inset-0 bg-white z-20 transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '5rem' }}
        >
          <nav className="flex flex-col space-y-4 p-6">
            <Link to="/" className="text-tribal-900 hover:text-tribal-500 font-medium py-2">Home</Link>
            <Link to="/how-it-works" className="text-tribal-900 hover:text-tribal-500 font-medium py-2">How It Works</Link>
            <Link to="/about-us" className="text-tribal-900 hover:text-tribal-500 font-medium py-2">About Us</Link>
            <Link to="/contact" className="text-tribal-900 hover:text-tribal-500 font-medium py-2">Contact</Link>
            <Link to="/privacy-policy" className="text-tribal-900 hover:text-tribal-500 font-medium py-2">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-tribal-900 hover:text-tribal-500 font-medium py-2">Terms & Conditions</Link>
            <Link 
              to="/apply" 
              className="text-white bg-tribal-500 hover:bg-tribal-600 px-6 py-3 rounded-full font-medium text-center mt-4"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
