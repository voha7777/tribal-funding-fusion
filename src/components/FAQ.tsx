
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

const FAQ: React.FC<FAQProps> = ({ 
  items, 
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about tribal installment loans."
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  
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
  
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={faqRef} className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-when-visible">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tribal-900">{title}</h2>
          <p className="text-tribal-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`mb-4 fade-in-when-visible ${
                openIndex === index ? 'border-l-4 border-tribal-500' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                className={`w-full text-left p-6 flex justify-between items-center transition-all ${
                  openIndex === index 
                    ? 'bg-tribal-50 rounded-t-lg' 
                    : 'bg-white hover:bg-tribal-50/50 rounded-lg shadow-sm border border-tribal-100/50'
                }`}
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-lg text-tribal-900">{item.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-tribal-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out bg-white border-x border-b border-tribal-100/50 rounded-b-lg ${
                  openIndex === index 
                    ? 'max-h-[500px] opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="p-6 text-tribal-700">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
