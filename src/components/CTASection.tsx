
import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section ref={ctaRef} className="section-padding bg-tribal-50">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-tribal-700 to-tribal-900 shadow-glass-lg">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-tribal-500/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-tribal-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 py-16 px-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left max-w-2xl fade-in-when-visible">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Ready to Address Your Financial Needs?
              </h2>
              <p className="text-tribal-100/90 text-lg mb-8">
                Apply now to get connected with our network of tribal lenders. The application takes just minutes, and you could receive funds as soon as the next business day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  to="/" 
                  className="button-hover-effect bg-white text-tribal-800 hover:text-tribal-900 px-8 py-3.5 rounded-full font-medium flex items-center justify-center whitespace-nowrap"
                >
                  Apply Now
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                
                <Link 
                  to="/contact" 
                  className="button-hover-effect bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3.5 rounded-full font-medium flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block w-1/3 fade-in-when-visible">
              <div className="glass-card bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 rotate-3 transform hover:rotate-0 transition-transform duration-500">
                <div className="bg-tribal-800/50 rounded-lg px-4 py-2 mb-4">
                  <div className="h-2 w-24 bg-tribal-100/20 rounded-full"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-3 w-3/4 bg-tribal-100/30 rounded-full"></div>
                  <div className="h-3 w-full bg-tribal-100/20 rounded-full"></div>
                  <div className="h-3 w-5/6 bg-tribal-100/20 rounded-full"></div>
                  <div className="h-3 w-4/5 bg-tribal-100/30 rounded-full"></div>
                </div>
                
                <div className="mt-6">
                  <div className="h-8 w-28 bg-tribal-300/30 rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
