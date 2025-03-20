
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getStateData } from '../utils/stateData';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import { ArrowRight, Clock, DollarSign, Shield, Calendar, BadgeCheck, Zap } from 'lucide-react';

const State = () => {
  const { state } = useParams<{ state: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);
  
  if (!state) {
    return <Navigate to="/404" />;
  }
  
  const stateData = getStateData(state);
  
  if (!stateData) {
    return <Navigate to="/404" />;
  }
  
  const iconMap: Record<string, React.ReactNode> = {
    'clock': <Clock size={22} className="text-tribal-500" />,
    'dollar-sign': <DollarSign size={22} className="text-tribal-500" />,
    'calendar': <Calendar size={22} className="text-tribal-500" />,
    'shield': <Shield size={22} className="text-tribal-500" />,
    'trending-up': <BadgeCheck size={22} className="text-tribal-500" />,
    'lock': <Shield size={22} className="text-tribal-500" />,
    'key': <BadgeCheck size={22} className="text-tribal-500" />,
    'smartphone': <Zap size={22} className="text-tribal-500" />,
    'file-text': <Clock size={22} className="text-tribal-500" />,
    'percent': <DollarSign size={22} className="text-tribal-500" />,
    'headphones': <Zap size={22} className="text-tribal-500" />,
    'book-open': <BadgeCheck size={22} className="text-tribal-500" />,
  };

  return (
    <>
      <SEOHead
        title={stateData.metaTitle}
        description={stateData.metaDescription}
        canonicalUrl={`https://tribal-installment-loans.com/${stateData.slug}`}
        keywords={`tribal loans ${stateData.fullName}, tribal installment loans ${stateData.fullName}, ${stateData.fullName} tribal lenders, ${stateData.abbreviation} tribal loans`}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <HeroSection 
            title={stateData.heroTitle} 
            subtitle={stateData.heroSubtitle}
          />
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto animate-fade-up">
                <div 
                  className="prose prose-lg max-w-none text-tribal-700"
                  dangerouslySetInnerHTML={{ __html: stateData.mainContent }}
                />
                
                <div className="mt-8 flex justify-center">
                  <button className="button-hover-effect bg-tribal-500 hover:bg-tribal-600 text-white px-6 py-3 rounded-full font-medium flex items-center">
                    Apply for a Tribal Loan
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-tribal-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 animate-fade-up">
                <h2 className="text-3xl font-bold mb-4 text-tribal-900">Benefits of Tribal Loans in {stateData.fullName}</h2>
                <p className="text-tribal-600 max-w-2xl mx-auto">
                  Discover the advantages of choosing tribal installment loans for your financial needs in {stateData.fullName}.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {stateData.benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="glass-card rounded-xl p-6 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start">
                      <div className="bg-tribal-100 rounded-full p-3 mr-4">
                        {iconMap[benefit.icon]}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-tribal-900">{benefit.title}</h3>
                        <p className="text-tribal-600">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="animate-fade-up">
                  <img 
                    src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt={`Tribal loans in ${stateData.fullName}`}
                    className="rounded-xl shadow-soft w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
                  <h2 className="text-3xl font-bold mb-6 text-tribal-900">Applying for Tribal Loans in {stateData.fullName}</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="glass-card rounded-lg p-5">
                      <div className="flex items-center">
                        <div className="bg-tribal-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          1
                        </div>
                        <p className="text-tribal-700">Complete the secure online application with basic personal and financial information</p>
                      </div>
                    </div>
                    
                    <div className="glass-card rounded-lg p-5">
                      <div className="flex items-center">
                        <div className="bg-tribal-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          2
                        </div>
                        <p className="text-tribal-700">Receive a quick decision, often within minutes of submitting your application</p>
                      </div>
                    </div>
                    
                    <div className="glass-card rounded-lg p-5">
                      <div className="flex items-center">
                        <div className="bg-tribal-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          3
                        </div>
                        <p className="text-tribal-700">Review and accept your personalized loan terms and conditions</p>
                      </div>
                    </div>
                    
                    <div className="glass-card rounded-lg p-5">
                      <div className="flex items-center">
                        <div className="bg-tribal-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          4
                        </div>
                        <p className="text-tribal-700">Get funds deposited directly to your bank account, often by the next business day</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="button-hover-effect bg-tribal-500 hover:bg-tribal-600 text-white px-6 py-3 rounded-full font-medium flex items-center">
                    Apply Now
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-gradient-to-b from-tribal-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 animate-fade-up">
                <h2 className="text-3xl font-bold mb-4 text-tribal-900">
                  Why {stateData.fullName} Residents Choose Tribal Loans
                </h2>
                <p className="text-tribal-600 max-w-2xl mx-auto">
                  Tribal loans provide several advantages for residents of {stateData.fullName} seeking financial assistance.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="glass-card rounded-xl p-6 text-center animate-fade-up">
                  <div className="bg-tribal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap size={28} className="text-tribal-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-tribal-900">Fast Approval</h3>
                  <p className="text-tribal-600">
                    Get quick decisions on your loan application, often within minutes after submission.
                  </p>
                </div>
                
                <div className="glass-card rounded-xl p-6 text-center animate-fade-up" style={{ animationDelay: '100ms' }}>
                  <div className="bg-tribal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BadgeCheck size={28} className="text-tribal-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-tribal-900">Flexible Eligibility</h3>
                  <p className="text-tribal-600">
                    Tribal lenders consider factors beyond credit scores, making funds accessible to more borrowers.
                  </p>
                </div>
                
                <div className="glass-card rounded-xl p-6 text-center animate-fade-up" style={{ animationDelay: '200ms' }}>
                  <div className="bg-tribal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar size={28} className="text-tribal-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-tribal-900">Installment Structure</h3>
                  <p className="text-tribal-600">
                    Repay your loan over time with fixed payments, making budget management more predictable.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <FAQ 
            items={stateData.faqItems}
            title={`Frequently Asked Questions About Tribal Loans in ${stateData.fullName}`}
            subtitle={`Common questions about applying for and managing tribal installment loans in ${stateData.fullName}.`}
          />
          
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default State;
