
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { getAllStates } from '../utils/stateData';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStatesOpen, setIsStatesOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visibleStates, setVisibleStates] = useState<Array<{ fullName: string, slug: string }>>([]);
  
  const states = getAllStates();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Show only a selection of states initially
    setVisibleStates(states.slice(0, 8));
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isStatesOpen) setIsStatesOpen(false);
  };
  
  const toggleStates = () => {
    setIsStatesOpen(!isStatesOpen);
  };
  
  const showAllStates = () => {
    setVisibleStates(states);
  };
  
  const isScrolled = scrollPosition > 20;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl shadow-soft py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={() => {
              setIsMenuOpen(false);
              setIsStatesOpen(false);
            }}
          >
            <div className="w-10 h-10 rounded-full bg-tribal-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className={cn(
              "font-display font-bold text-xl tracking-tight transition-colors",
              isScrolled ? "text-tribal-900" : "text-tribal-50"
            )}>
              Tribal Loans
            </span>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button 
                onClick={toggleStates}
                className={cn(
                  "flex items-center space-x-1 font-medium transition-colors", 
                  isScrolled ? "text-tribal-800 hover:text-tribal-600" : "text-white/90 hover:text-white"
                )}
              >
                <span>Locations</span>
                <ChevronDown size={16} className={cn(
                  "transition-transform", 
                  isStatesOpen ? "rotate-180" : ""
                )} />
              </button>
              
              {isStatesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-glass-lg p-4 w-[500px] animate-fade-up">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {states.map((state) => (
                      <Link 
                        key={state.slug}
                        to={`/${state.slug}`}
                        className="text-tribal-800 hover:text-tribal-500 transition-colors py-1 px-2 hover:bg-tribal-50 rounded"
                        onClick={() => setIsStatesOpen(false)}
                      >
                        {state.fullName}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/how-it-works" 
              className={cn(
                "font-medium transition-colors", 
                isScrolled ? "text-tribal-800 hover:text-tribal-600" : "text-white/90 hover:text-white"
              )}
            >
              How It Works
            </Link>
            
            <Link 
              to="/about-us" 
              className={cn(
                "font-medium transition-colors", 
                isScrolled ? "text-tribal-800 hover:text-tribal-600" : "text-white/90 hover:text-white"
              )}
            >
              About Us
            </Link>
            
            <Link 
              to="/contact" 
              className={cn(
                "font-medium transition-colors", 
                isScrolled ? "text-tribal-800 hover:text-tribal-600" : "text-white/90 hover:text-white"
              )}
            >
              Contact
            </Link>
          </nav>
          
          <div className="hidden lg:block">
            <Link 
              to="/" 
              className="button-hover-effect bg-tribal-500 hover:bg-tribal-600 text-white px-6 py-2.5 rounded-full font-medium"
            >
              Apply Now
            </Link>
          </div>
          
          <button 
            className="lg:hidden text-tribal-900"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white animate-slide-in-right absolute top-full left-0 right-0 border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={toggleStates}
              className="flex items-center justify-between w-full px-4 py-2 text-left text-tribal-800 font-medium"
            >
              <span>Locations</span>
              <ChevronDown size={16} className={isStatesOpen ? "rotate-180" : ""} />
            </button>
            
            {isStatesOpen && (
              <div className="bg-tribal-50/50 px-4 py-3 rounded-lg animate-fade-up">
                <div className="grid grid-cols-2 gap-2">
                  {visibleStates.map((state) => (
                    <Link 
                      key={state.slug}
                      to={`/${state.slug}`}
                      className="text-tribal-700 hover:text-tribal-500 transition-colors py-1"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsStatesOpen(false);
                      }}
                    >
                      {state.fullName}
                    </Link>
                  ))}
                </div>
                
                {visibleStates.length < states.length && (
                  <button 
                    className="mt-2 text-tribal-500 hover:text-tribal-700 font-medium text-sm"
                    onClick={showAllStates}
                  >
                    Show all states
                  </button>
                )}
              </div>
            )}
            
            <Link 
              to="/how-it-works" 
              className="block px-4 py-2 text-tribal-800 hover:text-tribal-600 font-medium"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            
            <Link 
              to="/about-us" 
              className="block px-4 py-2 text-tribal-800 hover:text-tribal-600 font-medium"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            
            <Link 
              to="/contact" 
              className="block px-4 py-2 text-tribal-800 hover:text-tribal-600 font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            
            <div className="pt-2">
              <Link 
                to="/" 
                className="block w-full text-center bg-tribal-500 hover:bg-tribal-600 text-white px-6 py-3 rounded-lg font-medium"
                onClick={toggleMenu}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
