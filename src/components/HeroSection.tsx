
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  isHomepage?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle,
  isHomepage = false 
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollY = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '5';
        const yPos = -(scrollY * parseInt(speed) / 100);
        element.setAttribute('style', `transform: translateY(${yPos}px)`);
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={heroRef}
      className={`relative ${isHomepage ? 'h-screen min-h-[700px]' : 'h-[500px]'} flex items-center justify-center overflow-hidden`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-tribal-800 to-tribal-950 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div 
          className="parallax absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-tribal-500/10 blur-3xl" 
          data-speed="2"
        ></div>
        <div 
          className="parallax absolute top-[30%] -right-[5%] w-[30%] h-[30%] rounded-full bg-tribal-600/10 blur-3xl" 
          data-speed="4"
        ></div>
        <div 
          className="parallax absolute -bottom-[5%] left-[20%] w-[30%] h-[30%] rounded-full bg-tribal-400/10 blur-3xl" 
          data-speed="3"
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-t from-tribal-900/40 via-transparent to-transparent"
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
        >
          {title}
        </h1>
        
        <p className="text-lg md:text-xl text-tribal-100/90 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link 
            to="/" 
            className="button-hover-effect bg-tribal-500 hover:bg-tribal-600 text-white px-8 py-3.5 rounded-full font-medium flex items-center justify-center"
          >
            Apply Now
            <ArrowRight size={18} className="ml-2" />
          </Link>
          
          <Link 
            to="/" 
            className="button-hover-effect bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-medium flex items-center justify-center"
          >
            How It Works
          </Link>
        </div>
        
        {isHomepage && (
          <div className="mt-12 glass-card inline-block px-6 py-3 animate-fade-up">
            <p className="text-tribal-800 font-medium">
              Quick approvals • Funds as soon as next business day
            </p>
          </div>
        )}
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path 
            fill="#fff" 
            fillOpacity="1" 
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
