
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { getAllStates } from '../utils/stateData';

const Footer: React.FC = () => {
  const states = getAllStates();
  const popularStates = states.slice(0, 10); // First 10 states
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tribal-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-tribal-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Tribal Loans
              </span>
            </div>
            
            <p className="text-tribal-100/80 mb-6">
              Connecting borrowers with tribal lending solutions across the United States. Access installment loans designed to help you meet your financial needs.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-tribal-300 mt-1" />
                <span className="text-tribal-100">+39 3791398291</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-tribal-300 mt-1" />
                <span className="text-tribal-100">contact@tribal-installment-loans.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-tribal-300 mt-1" />
                <span className="text-tribal-100">Serving all 50 states across the USA</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-tribal-100/80 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-2" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-tribal-100/80 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-2" />
                  <span>How It Works</span>
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-tribal-100/80 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-2" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-tribal-100/80 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-2" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-tribal-100/80 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-2" />
                  <span>Apply Now</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-tribal-100/80 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-2" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-tribal-100/80 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-2" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-6">Popular Locations</h3>
            <ul className="space-y-3">
              {popularStates.map((state) => (
                <li key={state.slug}>
                  <Link 
                    to={`/${state.slug}`} 
                    className="text-tribal-100/80 hover:text-white flex items-center"
                  >
                    <ChevronRight size={14} className="mr-2" />
                    <span>Tribal Loans {state.fullName}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/" className="text-tribal-300 hover:text-white text-sm flex items-center">
                  <span>View all locations</span>
                  <ChevronRight size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-6">Disclaimer</h3>
            <p className="text-tribal-100/80 text-sm">
              This website does not constitute an offer or solicitation to lend. The operator of this website is not a lender, does not make credit decisions, and does not broker loans. The information you provide will be shared with a network of tribal lenders.
            </p>
            <p className="text-tribal-100/80 text-sm mt-4">
              APRs range from competitive to higher rates, depending on your credit background and loan terms. Loan amounts range from $500 to $5,000 with repayment terms from 3 to 36 months.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-tribal-800/50 text-center">
          <p className="text-tribal-100/60 text-sm">
            &copy; {currentYear} Tribal Installment Loans. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
