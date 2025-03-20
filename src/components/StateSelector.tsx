
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { getAllStates } from '../utils/stateData';

const StateSelector: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const statesRef = useRef<HTMLDivElement>(null);
  
  const allStates = getAllStates();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.fade-in-when-visible');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  const filteredStates = searchQuery 
    ? allStates.filter(state => 
        state.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        state.abbreviation.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allStates;

  return (
    <section ref={statesRef} className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-when-visible">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tribal-900">Find Tribal Loans In Your State</h2>
          <p className="text-tribal-600 max-w-2xl mx-auto">
            Select your state to learn about tribal installment loan options and requirements in your area.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-10 fade-in-when-visible">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-tribal-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-12 py-4 border border-tribal-200 rounded-full bg-white focus:ring-2 focus:ring-tribal-500 focus:border-tribal-500 transition-all"
              placeholder="Search by state name or abbreviation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={18} className="text-tribal-400 hover:text-tribal-700" />
              </button>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredStates.map((state, index) => (
            <div 
              key={state.slug}
              className="fade-in-when-visible"
              style={{ animationDelay: `${index % 10 * 50}ms` }}
            >
              <Link 
                to={`/${state.slug}`}
                className="glass-card block rounded-lg py-4 px-3 text-center hover:bg-tribal-50 transition-all h-full"
              >
                <div className="font-bold text-tribal-900 mb-1">{state.fullName}</div>
                <div className="text-sm text-tribal-500">{state.abbreviation}</div>
              </Link>
            </div>
          ))}
        </div>
        
        {filteredStates.length === 0 && (
          <div className="text-center text-tribal-600 mt-8 p-8 border border-dashed border-tribal-200 rounded-lg">
            No states found matching your search criteria. Please try a different search term.
          </div>
        )}
      </div>
    </section>
  );
};

export default StateSelector;
