
import React, { useRef, useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
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
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "The application process was incredibly simple, and I received my funds the next day. The installment structure made it much easier to manage my repayments than a traditional payday loan.",
      name: "Michael J.",
      location: "Texas"
    },
    {
      quote: "When my car broke down unexpectedly, I needed funds fast. The tribal loan option was a lifesaver - quick approval and straightforward terms that helped me get back on the road without financial stress.",
      name: "Sarah T.",
      location: "Florida"
    },
    {
      quote: "I was worried about applying due to my less-than-perfect credit, but I was approved quickly. The customer service team was helpful in explaining all the terms and answering my questions.",
      name: "David L.",
      location: "Arizona"
    }
  ];

  return (
    <section ref={testimonialsRef} className="section-padding bg-tribal-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-tribal-700/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-tribal-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-when-visible">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Customers Say</h2>
          <p className="text-tribal-100/80 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from borrowers who have successfully used tribal installment loans to address their financial needs.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`absolute top-0 left-0 right-0 transition-all duration-700 ease-in-out ${
                index === activeIndex 
                  ? 'opacity-100 translate-x-0 z-20' 
                  : index === ((activeIndex - 1 + testimonials.length) % testimonials.length)
                    ? 'opacity-0 -translate-x-16 z-10' 
                    : 'opacity-0 translate-x-16 z-10'
              }`}
            >
              <div className="glass-card bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/20">
                <div className="mb-6 text-tribal-300">
                  <Quote size={40} />
                </div>
                <blockquote className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-tribal-700 flex items-center justify-center text-tribal-100 text-lg font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-tribal-300">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Controls */}
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-tribal-100' 
                    : 'bg-tribal-100/30 hover:bg-tribal-100/50'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
