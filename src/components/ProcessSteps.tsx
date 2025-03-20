
import React, { useRef, useEffect } from 'react';

const ProcessSteps: React.FC = () => {
  const processRef = useRef<HTMLDivElement>(null);
  
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

  const steps = [
    {
      number: "01",
      title: "Complete Application",
      description: "Fill out our secure online application form with your personal and financial details. The form is designed to be straightforward and takes just minutes to complete."
    },
    {
      number: "02",
      title: "Get Quick Decision",
      description: "Our lending partners review your application and provide a quick decision, often within minutes. Pre-qualified applicants will receive loan terms to review."
    },
    {
      number: "03",
      title: "Review Loan Terms",
      description: "Carefully review the loan amount, interest rate, fees, and repayment schedule. Make sure you understand all terms before proceeding with the loan."
    },
    {
      number: "04",
      title: "Receive Funds",
      description: "After accepting the loan terms, the funds will be deposited directly into your bank account, often as soon as the next business day."
    }
  ];

  return (
    <section ref={processRef} className="section-padding bg-gradient-to-b from-white to-tribal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-when-visible">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tribal-900">Simple Application Process</h2>
          <p className="text-tribal-600 max-w-2xl mx-auto">
            Getting the financial assistance you need is quick and straightforward with our streamlined application process.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-tribal-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="fade-in-when-visible"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-xl p-6 border border-tribal-100 shadow-soft h-full flex flex-col relative">
                  <div className="bg-tribal-500 text-white text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto md:mx-0">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-tribal-900 text-center md:text-left">{step.title}</h3>
                  <p className="text-tribal-600 text-center md:text-left">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
