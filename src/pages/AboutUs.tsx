
import React, { useEffect } from 'react';
import { ArrowRight, Users, Shield, Trophy, Scale, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="About Tribal Installment Loans | Our Mission & Values"
        description="Learn about our mission to connect borrowers with tribal lenders across the US. Discover our values, commitment to responsible lending, and dedication to customer service."
        canonicalUrl="https://tribal-installment-loans.com/about-us"
        keywords="about tribal loans, tribal lending mission, responsible tribal lending, tribal loan values, tribal loan customer service"
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-24">
          <section className="py-16 md:py-24 bg-gradient-to-b from-tribal-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center animate-fade-up">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-tribal-900">About Us</h1>
                <p className="text-lg text-tribal-600 mb-8">
                  Connecting borrowers with tribal lenders to provide flexible funding solutions when you need them most.
                </p>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                  <div className="animate-fade-up">
                    <h2 className="text-3xl font-bold mb-6 text-tribal-900">Our Story</h2>
                    <p className="text-tribal-700 mb-4">
                      Tribal Installment Loans was founded with a clear mission: to bridge the gap between borrowers seeking financial assistance and tribal lenders offering flexible funding solutions. We recognized that many Americans face situations where traditional banking options may not be accessible or suitable for their needs.
                    </p>
                    <p className="text-tribal-700 mb-4">
                      Our platform serves as a connection point, helping borrowers across all 50 states access tribal installment loans through our network of tribal lending partners. These sovereign lenders operate under tribal jurisdiction, offering an alternative to conventional lending options.
                    </p>
                    <p className="text-tribal-700">
                      Since our inception, we've helped thousands of customers find the financial support they need through our streamlined application process and commitment to responsible lending practices.
                    </p>
                  </div>
                  
                  <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1573497491765-55a64cc0169c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Diverse team working together" 
                      className="rounded-xl shadow-soft w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <div className="mb-20">
                  <div className="text-center mb-12 animate-fade-up">
                    <h2 className="text-3xl font-bold mb-6 text-tribal-900">Our Mission & Values</h2>
                    <p className="text-lg text-tribal-600 max-w-3xl mx-auto">
                      The principles that guide our service and commitment to our customers.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
                    <div className="glass-card rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-tribal-50 rounded-full p-3 mr-4">
                          <HeartHandshake size={24} className="text-tribal-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-tribal-900">Mission</h3>
                          <p className="text-tribal-700">
                            Our mission is to provide a seamless connection between borrowers and tribal lenders, offering access to installment loans with transparent terms and flexible repayment options, especially for those who may have limited alternatives in the traditional financial system.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-tribal-50 rounded-full p-3 mr-4">
                          <Shield size={24} className="text-tribal-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-tribal-900">Integrity</h3>
                          <p className="text-tribal-700">
                            We prioritize honesty and transparency in all our operations. We believe that borrowers deserve clear information about loan terms, costs, and repayment expectations before making financial commitments.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-tribal-50 rounded-full p-3 mr-4">
                          <Users size={24} className="text-tribal-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-tribal-900">Accessibility</h3>
                          <p className="text-tribal-700">
                            We believe in financial inclusion and work to connect borrowers from diverse backgrounds and credit histories with lending options that consider factors beyond traditional credit scores.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-tribal-50 rounded-full p-3 mr-4">
                          <Trophy size={24} className="text-tribal-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-tribal-900">Excellence</h3>
                          <p className="text-tribal-700">
                            We strive for excellence in our service, constantly improving our platform to provide a smooth, efficient experience for users seeking tribal installment loans.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                  <div className="order-2 lg:order-1 animate-fade-up">
                    <img 
                      src="https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Customer service representative helping client" 
                      className="rounded-xl shadow-soft w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
                    <h2 className="text-3xl font-bold mb-6 text-tribal-900">Our Commitment</h2>
                    <p className="text-tribal-700 mb-4">
                      We are committed to promoting responsible lending practices. While we are not a direct lender, we carefully select our tribal lending partners and advocate for transparent loan terms, clear disclosures, and fair treatment of borrowers.
                    </p>
                    <p className="text-tribal-700 mb-4">
                      Our platform is designed to provide educational resources that help borrowers make informed decisions about their financial options. We believe that understanding the terms, costs, and responsibilities associated with tribal installment loans is essential for financial wellbeing.
                    </p>
                    <p className="text-tribal-700 mb-6">
                      We prioritize data security and privacy protection, implementing advanced encryption and security measures to safeguard your personal and financial information throughout the application process.
                    </p>
                    
                    <div className="flex items-start">
                      <div className="bg-tribal-50 rounded-full p-3 mr-4">
                        <Scale size={24} className="text-tribal-500" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-tribal-900">Responsible Lending Advocacy</h3>
                        <p className="text-tribal-700">
                          We encourage borrowers to carefully consider their financial needs and repayment ability before taking out a loan, and to use tribal installment loans as a short-term financial solution rather than a long-term financial strategy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-20">
                  <div className="text-center mb-12 animate-fade-up">
                    <h2 className="text-3xl font-bold mb-6 text-tribal-900">Serving All 50 States</h2>
                    <p className="text-lg text-tribal-600 max-w-3xl mx-auto">
                      Our tribal lending partners offer installment loans to residents across the United States, with state-specific information available to help you understand options in your area.
                    </p>
                  </div>
                  
                  <div className="bg-tribal-50 rounded-xl p-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-bold mb-3 text-tribal-900">Find Tribal Loan Information For Your State</h3>
                      <p className="text-tribal-700">
                        Select your state to learn about tribal installment loan options, terms, and requirements specific to your location.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <Link 
                        to="/"
                        className="bg-tribal-500 hover:bg-tribal-600 text-white px-6 py-3 rounded-full font-medium inline-flex items-center"
                      >
                        Browse State Pages
                        <ArrowRight size={18} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-8 mb-12 animate-fade-up">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-4 text-tribal-900">Have Questions?</h2>
                    <p className="text-tribal-700 mb-8">
                      Our customer support team is available to answer any questions you may have about tribal installment loans or our services.
                    </p>
                    <Link 
                      to="/contact" 
                      className="button-hover-effect bg-tribal-500 hover:bg-tribal-600 text-white px-6 py-3 rounded-full font-medium inline-flex items-center"
                    >
                      Contact Us
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
