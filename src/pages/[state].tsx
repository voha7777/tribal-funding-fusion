
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getStateData } from '../utils/stateData';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import { ArrowRight, Clock, DollarSign, Shield, Calendar, BadgeCheck, Zap, Star } from 'lucide-react';

// Testimonial data
interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael R.",
    location: "Dallas",
    quote: "The application process was incredibly simple, and I received my funds the next day. The installment structure made it much easier to manage my repayments than a traditional payday loan.",
    rating: 5
  },
  {
    name: "Sarah T.",
    location: "Orlando",
    quote: "When my car broke down unexpectedly, I needed funds fast. The tribal loan option was a lifesaver - quick approval and straightforward terms that helped me get back on the road without financial stress.",
    rating: 5
  },
  {
    name: "David L.",
    location: "Phoenix",
    quote: "I was worried about applying due to my less-than-perfect credit, but I was approved quickly. The customer service team was helpful in explaining all the terms and answering my questions.",
    rating: 4
  },
  {
    name: "Jennifer M.",
    location: "Seattle",
    quote: "After comparing multiple loan options, I chose a tribal installment loan and couldn't be happier with my decision. The transparent terms and flexible payment schedule worked perfectly for my situation.",
    rating: 5
  },
  {
    name: "Robert K.",
    location: "Chicago",
    quote: "The online application saved me so much time compared to visiting a storefront lender. I applied in the evening and had funds in my account the very next day. Impressive service!",
    rating: 5
  },
  {
    name: "Lisa J.",
    location: "Atlanta",
    quote: "As a single mom, unexpected expenses can be really stressful. This tribal loan helped me cover emergency medical bills without adding more stress to an already difficult situation. The customer service was compassionate and efficient.",
    rating: 4
  },
  {
    name: "Thomas B.",
    location: "Denver",
    quote: "I appreciated how clearly the loan terms were explained. No hidden fees or confusing language. Just straightforward information that helped me make an informed decision about my finances.",
    rating: 5
  },
  {
    name: "Amanda C.",
    location: "Nashville",
    quote: "The installment structure of the loan made all the difference. Being able to pay over time instead of all at once on my next payday gave me the breathing room I needed to get caught up without falling behind again.",
    rating: 4
  },
  {
    name: "Kevin P.",
    location: "Las Vegas",
    quote: "Unlike other lenders that made me feel judged for my financial situation, the tribal loan process was respectful and professional. They focused on my ability to repay rather than past credit mistakes.",
    rating: 5
  },
  {
    name: "Michelle S.",
    location: "Miami",
    quote: "I've used several short-term loans over the years, but this was by far the most positive experience. The application was quick, approval was fast, and the repayment terms were reasonable for my budget.",
    rating: 4
  },
  {
    name: "Brian W.",
    location: "San Diego",
    quote: "The consistent communication throughout the process was impressive. I always knew exactly where my application stood and when to expect funds. It's rare to find such transparency in financial services.",
    rating: 5
  },
  {
    name: "Kimberly D.",
    location: "Boston",
    quote: "When I needed to make home repairs before winter, this tribal installment loan provided the funds quickly with terms I could manage. The online account management makes tracking payments simple.",
    rating: 4
  },
  {
    name: "Daniel F.",
    location: "Austin",
    quote: "The fact that I could apply online after work hours and still get quick service was exactly what I needed. Traditional banks would have made me wait days just for an appointment.",
    rating: 5
  },
  {
    name: "Rebecca H.",
    location: "Portland",
    quote: "I was hesitant about online loans, but the security measures and professional customer service put my mind at ease. The entire process was secure and my information was handled with care.",
    rating: 4
  },
  {
    name: "Gregory M.",
    location: "Minneapolis",
    quote: "What stood out to me was how the loan representatives took time to make sure I understood all aspects of the loan. They seemed genuinely concerned that I was making the right financial choice for my situation.",
    rating: 5
  }
];

// Generate unique content based on state
const generateStateSpecificContent = (stateName: string): string => {
  const contentVariations = [
    `<p>For residents of ${stateName} facing unexpected financial challenges, tribal installment loans provide a reliable funding option with more flexibility than traditional short-term loans. These loans are structured to be repaid over multiple scheduled payments, making budget management more straightforward.</p>
    <p>Unlike conventional banks that may have stringent credit requirements, tribal lenders often consider factors beyond just credit scores when evaluating applications from ${stateName} residents. This can make funding accessible to more borrowers, including those with less-than-perfect credit histories.</p>
    <p>The application process is designed to be straightforward and efficient, allowing ${stateName} residents to apply from the comfort of their homes at any time of day. Many applicants receive decisions within minutes and, if approved, can see funds deposited directly to their bank accounts as soon as the next business day.</p>
    <p>It's important to understand that tribal lenders operate under the sovereignty of Native American tribes, which can affect certain aspects of the loan terms. However, reputable tribal lenders are committed to transparent practices, clearly disclosing all fees and terms before borrowers commit to the loan agreement.</p>`,
    
    `<p>${stateName} residents looking for financial solutions with more flexibility than payday loans often turn to tribal installment loans. These loans allow borrowers to repay the principal and interest over time through a series of scheduled payments, rather than requiring full repayment in a single lump sum.</p>
    <p>The convenience of online applications makes tribal loans particularly accessible for busy ${stateName} residents. The entire process can be completed from home or even on a mobile device, with no need to visit a physical location or fax documents. This streamlined approach helps borrowers get the funds they need without unnecessary delays.</p>
    <p>Many tribal lenders offer competitive rates compared to other alternative lending options available in ${stateName}. While interest rates may be higher than traditional bank loans, they often provide better terms than payday loans and may be more accessible to those with credit challenges.</p>
    <p>Before applying, it's recommended that ${stateName} residents review the full terms and conditions to ensure they understand the repayment schedule, interest rates, and any applicable fees. Responsible tribal lenders welcome questions and provide clear information to help borrowers make informed decisions.</p>`,
    
    `<p>Tribal installment loans offer ${stateName} residents a funding alternative that combines the accessibility of short-term loans with a more manageable repayment structure. By spreading payments over time, these loans can help borrowers address immediate financial needs without creating additional stress on their next payday.</p>
    <p>The eligibility requirements for tribal loans in ${stateName} are typically straightforward. Most lenders require applicants to be at least 18 years old, have a regular source of income, maintain an active checking account, and provide contact information including a valid email address and phone number.</p>
    <p>One notable advantage for ${stateName} borrowers is the speed of the process. From application to funding, tribal loans are designed to provide quick financial solutions when traditional lending options might be unavailable or too slow to meet urgent needs.</p>
    <p>Many tribal lenders also offer resources to help ${stateName} residents make informed financial decisions. This may include access to financial education materials, flexible payment options, and responsive customer service representatives who can address questions or concerns throughout the loan term.</p>`,
    
    `<p>${stateName} consumers seeking financial assistance have increasingly turned to tribal installment loans as an alternative to traditional short-term lending products. These loans provide the benefit of multiple payments over time, which can make managing repayment more feasible for many borrowers.</p>
    <p>The application criteria for tribal loans are designed to be accessible to a wide range of ${stateName} residents. While lenders will evaluate your ability to repay, they often consider various factors beyond just credit scores, making these loans an option for those with limited or imperfect credit histories.</p>
    <p>Security and privacy are priorities in the online application process. Reputable tribal lenders serving ${stateName} use advanced encryption and data protection measures to safeguard personal and financial information submitted through their platforms.</p>
    <p>For ${stateName} residents who have been approved, loan funds are typically deposited directly into their bank accounts, allowing for quick access to the money when it's needed most. This efficiency makes tribal installment loans a practical solution for addressing unexpected expenses or financial emergencies.</p>`
  ];
  
  // Use a hash of the state name to consistently select the same content for each state
  const hash = stateName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = hash % contentVariations.length;
  
  return contentVariations[index];
};

const State = () => {
  const { state } = useParams<{ state: string }>();
  const [stateTestimonials, setStateTestimonials] = useState<Testimonial[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Generate a random subset of testimonials
    if (state) {
      const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
      const count = Math.floor(Math.random() * 8) + 3; // Random number between 3 and 10
      setStateTestimonials(shuffled.slice(0, count));
    }
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
                  dangerouslySetInnerHTML={{ __html: generateStateSpecificContent(stateData.fullName) }}
                />
                
                <div className="mt-8 flex justify-center">
                  <a href="/apply" className="button-hover-effect bg-tribal-500 hover:bg-tribal-600 text-white px-6 py-3 rounded-full font-medium flex items-center">
                    Apply for a Tribal Loan
                    <ArrowRight size={18} className="ml-2" />
                  </a>
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
          
          {/* Customer Testimonials Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 animate-fade-up">
                <h2 className="text-3xl font-bold mb-4 text-tribal-900">{stateData.fullName} Customer Reviews</h2>
                <p className="text-tribal-600 max-w-2xl mx-auto">
                  Read what customers from {stateData.fullName} and nearby areas have to say about their tribal loan experience.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {stateTestimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="glass-card rounded-xl p-6 animate-fade-up bg-tribal-50 border border-tribal-100"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-tribal-600 flex items-center justify-center text-white text-lg font-medium mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-tribal-900">{testimonial.name}</div>
                        <div className="text-tribal-600">{testimonial.location}</div>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={16} 
                          className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-tribal-700 italic">
                      "{testimonial.quote}"
                    </blockquote>
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
                  
                  <a href="/apply" className="button-hover-effect bg-tribal-500 hover:bg-tribal-600 text-white px-6 py-3 rounded-full font-medium flex items-center inline-block">
                    Apply Now
                    <ArrowRight size={18} className="ml-2" />
                  </a>
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
