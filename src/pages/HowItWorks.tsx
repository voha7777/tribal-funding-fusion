
import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, HelpCircle, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="How Tribal Installment Loans Work | Application Process & Approval"
        description="Learn how tribal installment loans work, from application to funding. Understand the approval process, requirements, and repayment terms for tribal loans."
        canonicalUrl="https://tribal-installment-loans.com/how-it-works"
        keywords="how tribal loans work, tribal loan process, apply for tribal loans, tribal loan requirements, tribal loan approval"
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-24">
          <section className="py-16 md:py-24 bg-gradient-to-b from-tribal-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center animate-fade-up">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-tribal-900">How Tribal Installment Loans Work</h1>
                <p className="text-lg text-tribal-600 mb-8">
                  Understanding the process from application to funding can help you make informed decisions about your financial needs.
                </p>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                  <div className="animate-fade-up">
                    <h2 className="text-3xl font-bold mb-6 text-tribal-900">What Are Tribal Installment Loans?</h2>
                    <p className="text-tribal-700 mb-4">
                      Tribal installment loans are offered by lenders who operate under the sovereignty of Native American tribes. These financial products provide borrowers with a lump sum that is repaid over time through a series of scheduled payments.
                    </p>
                    <p className="text-tribal-700 mb-4">
                      Unlike payday loans that typically require full repayment on your next payday, tribal installment loans offer longer repayment periods, making them potentially more manageable for your budget.
                    </p>
                    <p className="text-tribal-700 mb-6">
                      These loans are often accessible to borrowers with less-than-perfect credit, as tribal lenders may consider factors beyond traditional credit scores when evaluating applications.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="glass-card rounded-lg p-4 flex items-center flex-1">
                        <DollarSign size={22} className="text-tribal-500 mr-3 flex-shrink-0" />
                        <span className="text-tribal-700 font-medium">Loan amounts from $500 to $5,000</span>
                      </div>
                      <div className="glass-card rounded-lg p-4 flex items-center flex-1">
                        <CheckCircle size={22} className="text-tribal-500 mr-3 flex-shrink-0" />
                        <span className="text-tribal-700 font-medium">Terms from 3 to 36 months</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Person reviewing financial documents" 
                      className="rounded-xl shadow-soft w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <div className="text-center mb-16 animate-fade-up">
                  <h2 className="text-3xl font-bold mb-6 text-tribal-900">The Application Process</h2>
                  <p className="text-lg text-tribal-600 max-w-3xl mx-auto mb-12">
                    Getting started with a tribal installment loan is straightforward. Follow these steps to complete your application.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                  <div className="glass-card rounded-xl p-8 text-center animate-fade-up">
                    <div className="w-16 h-16 bg-tribal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-tribal-500">1</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-tribal-900">Complete Online Application</h3>
                    <p className="text-tribal-700">
                      Fill out our secure online form with your personal and financial information. The application typically takes less than 10 minutes to complete.
                    </p>
                  </div>
                  
                  <div className="glass-card rounded-xl p-8 text-center animate-fade-up" style={{ animationDelay: '100ms' }}>
                    <div className="w-16 h-16 bg-tribal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-tribal-500">2</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-tribal-900">Receive a Decision</h3>
                    <p className="text-tribal-700">
                      After submitting your application, you'll typically receive a decision within minutes. Our lending partners review your information quickly.
                    </p>
                  </div>
                  
                  <div className="glass-card rounded-xl p-8 text-center animate-fade-up" style={{ animationDelay: '200ms' }}>
                    <div className="w-16 h-16 bg-tribal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-tribal-500">3</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-tribal-900">Get Funded</h3>
                    <p className="text-tribal-700">
                      If approved, review and accept your loan terms. Funds are typically deposited directly into your bank account as soon as the next business day.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                  <div className="order-2 lg:order-1 animate-fade-up">
                    <img 
                      src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Person checking financial approval online" 
                      className="rounded-xl shadow-soft w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
                    <h2 className="text-3xl font-bold mb-6 text-tribal-900">Application Requirements</h2>
                    <p className="text-tribal-700 mb-6">
                      To qualify for a tribal installment loan, you'll generally need to meet these basic requirements:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle size={22} className="text-tribal-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-tribal-900">Be at least 18 years old</h3>
                          <p className="text-tribal-700">You must be of legal age to enter into a financial contract.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle size={22} className="text-tribal-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-tribal-900">Have a valid checking account</h3>
                          <p className="text-tribal-700">An active checking account is required for fund deposits and payments.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle size={22} className="text-tribal-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-tribal-900">Provide proof of regular income</h3>
                          <p className="text-tribal-700">Demonstrate your ability to repay through employment or other consistent income sources.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle size={22} className="text-tribal-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-tribal-900">Have a valid email and phone number</h3>
                          <p className="text-tribal-700">Required for account verification and communication regarding your loan.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle size={22} className="text-tribal-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-tribal-900">Be a US resident with valid ID</h3>
                          <p className="text-tribal-700">You must reside in a state where tribal lending is available.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-20">
                  <div className="text-center mb-12 animate-fade-up">
                    <h2 className="text-3xl font-bold mb-6 text-tribal-900">Repayment Process</h2>
                    <p className="text-lg text-tribal-600 max-w-3xl mx-auto">
                      Understanding how repayment works can help you manage your loan responsibly.
                    </p>
                  </div>
                  
                  <div className="glass-card rounded-xl p-8 mb-8 animate-fade-up">
                    <h3 className="text-xl font-bold mb-4 text-tribal-900">Installment Structure</h3>
                    <p className="text-tribal-700 mb-6">
                      Tribal installment loans are repaid through a series of scheduled payments, typically aligned with your pay schedule. Each payment includes a portion of the principal amount borrowed plus interest and any applicable fees.
                    </p>
                    <div className="bg-tribal-50 rounded-lg p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 pb-4 border-b border-tribal-100">
                        <span className="font-medium text-tribal-800 mb-2 sm:mb-0">Payment Method</span>
                        <span className="text-tribal-700">Automatic withdrawals from your checking account</span>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 pb-4 border-b border-tribal-100">
                        <span className="font-medium text-tribal-800 mb-2 sm:mb-0">Payment Frequency</span>
                        <span className="text-tribal-700">Usually biweekly or monthly, aligned with your pay schedule</span>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <span className="font-medium text-tribal-800 mb-2 sm:mb-0">Early Repayment</span>
                        <span className="text-tribal-700">Most lenders allow early repayment without penalties</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-tribal-50 rounded-xl p-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
                    <div className="flex items-start">
                      <AlertCircle size={24} className="text-tribal-500 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-tribal-900">Important Repayment Considerations</h3>
                        <p className="text-tribal-700 mb-4">
                          Before accepting a tribal installment loan, carefully review the following aspects of the repayment terms:
                        </p>
                        <ul className="space-y-3 text-tribal-700">
                          <li className="flex items-start">
                            <span className="text-tribal-500 mr-2">•</span>
                            <span>Total cost of the loan, including all interest and fees</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-tribal-500 mr-2">•</span>
                            <span>Exact payment dates and amounts</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-tribal-500 mr-2">•</span>
                            <span>Consequences of missed or late payments</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-tribal-500 mr-2">•</span>
                            <span>Options for adjusting payment dates if needed</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-tribal-500 mr-2">•</span>
                            <span>Procedures for paying off the loan early</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mb-12 animate-fade-up">
                  <h2 className="text-3xl font-bold mb-6 text-tribal-900">Ready to Apply?</h2>
                  <p className="text-lg text-tribal-600 max-w-3xl mx-auto mb-8">
                    Start your application today to see if you qualify for a tribal installment loan.
                  </p>
                  <Link 
                    to="/" 
                    className="button-hover-effect bg-tribal-500 hover:bg-tribal-600 text-white px-8 py-3 rounded-full font-medium inline-flex items-center"
                  >
                    Apply Now
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
                
                <div className="glass-card rounded-xl p-8 bg-gradient-to-r from-tribal-50 to-white animate-fade-up" style={{ animationDelay: '100ms' }}>
                  <div className="flex items-start">
                    <HelpCircle size={24} className="text-tribal-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-tribal-900">Still Have Questions?</h3>
                      <p className="text-tribal-700 mb-4">
                        If you need more information about tribal installment loans or have specific questions about the application process, our customer support team is here to help.
                      </p>
                      <Link 
                        to="/contact" 
                        className="text-tribal-500 hover:text-tribal-600 font-medium inline-flex items-center"
                      >
                        Contact Us
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
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

export default HowItWorks;
