
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found | Tribal Installment Loans"
        description="The page you are looking for doesn't exist. Return to our homepage to learn about tribal installment loans."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-lg mx-auto text-center">
              <div className="mb-8 animate-fade-up">
                <div className="text-9xl font-bold text-tribal-300">404</div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-tribal-900 animate-fade-up" style={{ animationDelay: '100ms' }}>
                Page Not Found
              </h1>
              
              <p className="text-lg text-tribal-600 mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
                The page you are looking for doesn't exist or has been moved.
              </p>
              
              <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
                <Link 
                  to="/" 
                  className="button-hover-effect inline-flex items-center bg-tribal-500 hover:bg-tribal-600 text-white px-6 py-3 rounded-full font-medium"
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
