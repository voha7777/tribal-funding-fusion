
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-when-visible">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tribal-900">{title}</h2>
          <p className="text-tribal-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-tribal-100 shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-tribal-50/50 text-tribal-900 font-semibold text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-tribal-50/30 text-tribal-700 border-t border-tribal-100">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
