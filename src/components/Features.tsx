
import React, { useRef, useEffect } from 'react';
import { 
  Zap, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Smartphone, 
  BadgeDollarSign
} from 'lucide-react';

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
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

  const features = [
    {
      icon: <Zap size={28} className="text-tribal-500" />,
      title: "Fast Application",
      description: "Complete our simple online application in just minutes, with minimal documentation required."
    },
    {
      icon: <Clock size={28} className="text-tribal-500" />,
      title: "Quick Decisions",
      description: "Receive a decision on your loan application quickly, often within minutes after submission."
    },
    {
      icon: <CheckCircle2 size={28} className="text-tribal-500" />,
      title: "Flexible Eligibility",
      description: "Tribal lenders consider factors beyond credit scores, making funds accessible to more borrowers."
    },
    {
      icon: <ShieldCheck size={28} className="text-tribal-500" />,
      title: "Secure Process",
      description: "Your personal and financial information is protected with bank-level encryption technology."
    },
    {
      icon: <BadgeDollarSign size={28} className="text-tribal-500" />,
      title: "Competitive Rates",
      description: "Access tribal installment loans with clear terms and competitive rates compared to other options."
    },
    {
      icon: <Smartphone size={28} className="text-tribal-500" />,
      title: "Easy Management",
      description: "Manage your loan online with 24/7 access to your account through our secure portal."
    }
  ];

  return (
    <section ref={featuresRef} className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-when-visible">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tribal-900">Why Choose Tribal Loans?</h2>
          <p className="text-tribal-600 max-w-2xl mx-auto">
            Our tribal lending partners offer convenient, accessible installment loans designed to help you address your financial needs quickly and efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 fade-in-when-visible"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 bg-tribal-50 w-14 h-14 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-tribal-900">{feature.title}</h3>
              <p className="text-tribal-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
