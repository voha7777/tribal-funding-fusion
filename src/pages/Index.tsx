
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import ProcessSteps from '../components/ProcessSteps';
import Testimonials from '../components/Testimonials';
import StateSelector from '../components/StateSelector';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "What is a tribal installment loan?",
      answer: "A tribal installment loan is a type of personal loan offered by lenders who operate under Native American tribal jurisdiction. These loans provide borrowers with a lump sum that is repaid over a fixed schedule with regular payments, unlike payday loans which require full repayment on your next payday. Tribal lenders may offer different terms than those available from state-licensed lenders, and they operate under tribal sovereignty."
    },
    {
      question: "How much can I borrow with a tribal installment loan?",
      answer: "Tribal installment loan amounts typically range from $500 to $5,000, depending on the lender and factors such as your income, credit history, and state of residence. First-time borrowers often qualify for lower amounts initially, with the opportunity to apply for larger loans after establishing a positive repayment history."
    },
    {
      question: "Do I need good credit to get approved?",
      answer: "One advantage of tribal installment loans is that lenders often consider factors beyond traditional credit scores. While having good credit can help you qualify for better rates, many tribal lenders work with borrowers who have less-than-perfect credit, including those with poor or limited credit histories. They typically evaluate your current income, employment stability, and ability to repay."
    },
    {
      question: "How quickly can I receive funds?",
      answer: "The application process for tribal installment loans is designed to be fast and efficient. In many cases, you can receive a decision on your application within minutes of submission. If approved, funds are typically deposited directly into your bank account as soon as the next business day, though some lenders may offer same-day funding options for an additional fee."
    },
    {
      question: "Are tribal loans more expensive than traditional bank loans?",
      answer: "Tribal installment loans generally have higher interest rates compared to traditional bank loans or credit union products. This reflects the increased risk lenders take by offering loans to borrowers who may not qualify for conventional financing options. However, they can be less expensive than payday loans or title loans when repaid according to schedule, and they provide the benefit of spreading repayment over multiple installments."
    },
    {
      question: "Can I pay off my tribal loan early?",
      answer: "Yes, most tribal lenders allow borrowers to pay off their loans early without prepayment penalties. Early repayment can save you money on interest charges that would have accrued over the remaining loan term. However, loan terms vary by lender, so it's important to review the specific prepayment policies in your loan agreement."
    }
  ];

  return (
    <>
      <SEOHead
        title="Tribal Installment Loans | Fast Funding Solutions"
        description="Access tribal installment loans with competitive rates. Find the financial support you need with our trusted tribal lending options across all US states."
        canonicalUrl="https://tribal-installment-loans.com"
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <HeroSection 
            title="Access Tribal Installment Loans For Your Financial Needs" 
            subtitle="Get connected with tribal lenders offering flexible payment options and competitive rates. Apply online for fast decisions and funding."
            isHomepage={true}
          />
          
          <Features />
          
          <ProcessSteps />
          
          <section className="section-padding bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 fade-in-when-visible">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tribal-900">Benefits of Tribal Installment Loans</h2>
                <p className="text-tribal-600 max-w-2xl mx-auto">
                  Discover how tribal installment loans differ from other short-term financing options.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="fade-in-when-visible">
                  <img 
                    src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Person reviewing financial documents" 
                    className="rounded-xl shadow-soft w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="space-y-6 fade-in-when-visible">
                  <div className="glass-card rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-tribal-900">Structured Repayment Plans</h3>
                    <p className="text-tribal-700">
                      Unlike payday loans that require full repayment on your next payday, tribal installment loans allow you to repay the borrowed amount over multiple scheduled payments, making budget management more predictable.
                    </p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-tribal-900">Larger Loan Amounts</h3>
                    <p className="text-tribal-700">
                      Tribal installment loans typically offer higher borrowing limits compared to payday loans, providing access to the funds you need for significant expenses or financial emergencies.
                    </p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-tribal-900">Alternative Credit Considerations</h3>
                    <p className="text-tribal-700">
                      Many tribal lenders look beyond traditional credit scores when evaluating loan applications, considering factors like income and employment stability. This can be beneficial for borrowers with less-than-perfect credit.
                    </p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-tribal-900">Convenient Online Process</h3>
                    <p className="text-tribal-700">
                      Apply from anywhere with an internet connection, receive quick decisions, and if approved, get funds deposited directly to your bank account—all without visiting a physical location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <StateSelector />
          
          <Testimonials />
          
          <FAQ items={faqItems} />
          
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
