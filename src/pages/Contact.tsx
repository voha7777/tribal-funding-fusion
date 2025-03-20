
import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Contact Us | Tribal Installment Loans"
        description="Contact our team for information about tribal installment loans. Get answers to your questions about loan options, application process, and more."
        canonicalUrl="https://tribal-installment-loans.com/contact"
        keywords="contact tribal loans, tribal loan customer service, tribal loan support, loan questions"
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-24">
          <section className="py-16 md:py-24 bg-gradient-to-b from-tribal-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fade-up">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-tribal-900">Contact Us</h1>
                  <p className="text-lg text-tribal-600 max-w-2xl mx-auto">
                    Have questions about tribal loans? We're here to help. Reach out to our team for information and support.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
                    <h2 className="text-2xl font-bold mb-6 text-tribal-900">Get In Touch</h2>
                    <p className="text-tribal-600 mb-8">
                      Our customer support team is available to assist you with any questions about tribal installment loans, the application process, or your existing loan. Fill out the form, and we'll get back to you as soon as possible.
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      <div className="flex items-start space-x-4">
                        <div className="bg-tribal-50 rounded-full p-3">
                          <Phone size={20} className="text-tribal-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-tribal-900">Phone Number</h3>
                          <p className="text-tribal-600">+39 3791398291</p>
                          <p className="text-sm text-tribal-500 mt-1">Monday to Friday, 9am to 6pm EST</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-tribal-50 rounded-full p-3">
                          <Mail size={20} className="text-tribal-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-tribal-900">Email Address</h3>
                          <p className="text-tribal-600">contact@tribal-installment-loans.com</p>
                          <p className="text-sm text-tribal-500 mt-1">We aim to respond within 24 hours</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-tribal-50 rounded-full p-3">
                          <Clock size={20} className="text-tribal-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-tribal-900">Business Hours</h3>
                          <p className="text-tribal-600">Monday to Friday: 9am - 6pm EST</p>
                          <p className="text-tribal-600">Saturday: 10am - 2pm EST</p>
                          <p className="text-tribal-600">Sunday: Closed</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-tribal-50 rounded-full p-3">
                          <MapPin size={20} className="text-tribal-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-tribal-900">Service Areas</h3>
                          <p className="text-tribal-600">We connect borrowers with tribal lenders serving all 50 US states.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-tribal-900">Frequently Asked Support Questions</h2>
                
                <div className="glass-card rounded-xl p-6 md:p-8 text-left mb-6">
                  <h3 className="font-bold text-xl text-tribal-900 mb-3">How can I check the status of my loan application?</h3>
                  <p className="text-tribal-700">
                    Once you've submitted an application, you'll receive an email with instructions on how to check your application status. You can also contact our customer support team with your application reference number for an update.
                  </p>
                </div>
                
                <div className="glass-card rounded-xl p-6 md:p-8 text-left mb-6">
                  <h3 className="font-bold text-xl text-tribal-900 mb-3">What if I have trouble making a payment?</h3>
                  <p className="text-tribal-700">
                    If you anticipate difficulty making a scheduled payment, contact your lender as soon as possible. Many lenders offer hardship programs or payment extensions that may help you avoid late fees or negative credit reporting.
                  </p>
                </div>
                
                <div className="glass-card rounded-xl p-6 md:p-8 text-left">
                  <h3 className="font-bold text-xl text-tribal-900 mb-3">How can I get information about my specific state's regulations?</h3>
                  <p className="text-tribal-700">
                    Our website provides state-specific information about tribal loan availability and terms. Visit your state's page from our locations menu, or contact our support team for personalized guidance regarding regulations in your area.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
