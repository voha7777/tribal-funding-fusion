
import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Terms & Conditions | Tribal Installment Loans"
        description="Read the terms and conditions governing the use of our tribal installment loan services and website."
        canonicalUrl="https://tribal-installment-loans.com/terms-conditions"
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <HeroSection 
            title="Terms & Conditions" 
            subtitle="Please read these terms carefully before using our services."
            isHomepage={false}
          />
          
          <section className="section-padding bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="prose prose-lg prose-tribal mx-auto">
                <h2>Terms and Conditions</h2>
                <p className="text-tribal-700">Last Updated: {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                
                <p className="text-tribal-700">
                  These Terms and Conditions ("Terms") govern your access to and use of the Tribal Installment Loans website 
                  and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree 
                  to these Terms, please do not use our website or services.
                </p>
                
                <h3>Our Service</h3>
                <p className="text-tribal-700">
                  Tribal Installment Loans is not a lender. We are a service that connects potential borrowers with a network 
                  of tribal lenders. We do not make credit decisions or influence the lending terms offered by any lender in our network.
                </p>
                
                <h3>Eligibility Requirements</h3>
                <p className="text-tribal-700">
                  To use our services, you must:
                </p>
                
                <ul className="list-disc pl-6 text-tribal-700">
                  <li>Be at least 18 years of age</li>
                  <li>Be a legal resident of the United States</li>
                  <li>Have a valid bank account</li>
                  <li>Have a regular source of income</li>
                  <li>Provide accurate and truthful information</li>
                </ul>
                
                <h3>User Responsibilities</h3>
                <p className="text-tribal-700">
                  When using our services, you agree to:
                </p>
                
                <ul className="list-disc pl-6 text-tribal-700">
                  <li>Provide accurate and complete information</li>
                  <li>Update your information as necessary to maintain its accuracy</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not use our services for fraudulent purposes</li>
                  <li>Not attempt to bypass or manipulate our systems</li>
                </ul>
                
                <h3>Disclaimer of Warranties</h3>
                <p className="text-tribal-700">
                  Our website and services are provided "as is" and "as available" without any warranties of any kind, 
                  either express or implied, including but not limited to the implied warranties of merchantability, 
                  fitness for a particular purpose, or non-infringement.
                </p>
                
                <h3>Limitation of Liability</h3>
                <p className="text-tribal-700">
                  To the maximum extent permitted by law, Tribal Installment Loans shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to, damages for loss 
                  of profits, goodwill, use, data, or other intangible losses, resulting from your access to or use of, 
                  or inability to access or use, our services.
                </p>
                
                <h3>Third-Party Links</h3>
                <p className="text-tribal-700">
                  Our website may contain links to third-party websites. These links are provided solely for your convenience. 
                  We have no control over, and assume no responsibility for, the content, privacy policies, or practices of 
                  any third-party websites.
                </p>
                
                <h3>Modification of Terms</h3>
                <p className="text-tribal-700">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
                  to our website. Your continued use of our services after any changes constitutes your acceptance of the revised Terms.
                </p>
                
                <h3>Governing Law</h3>
                <p className="text-tribal-700">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, 
                  without regard to its conflict of law provisions.
                </p>
                
                <h3>Contact Information</h3>
                <p className="text-tribal-700">
                  If you have any questions about these Terms, please contact us at:
                </p>
                
                <p className="text-tribal-700">
                  Email: contact@tribal-installment-loans.com<br />
                  Phone: +39 3791398291
                </p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsConditions;
