
import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Privacy Policy | Tribal Installment Loans"
        description="Learn about how we collect, use, and protect your personal information when you use our tribal installment loan services."
        canonicalUrl="https://tribal-installment-loans.com/privacy-policy"
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <HeroSection 
            title="Privacy Policy" 
            subtitle="Your privacy matters to us. Learn about how we collect and protect your information."
            isHomepage={false}
          />
          
          <section className="section-padding bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="prose prose-lg prose-tribal mx-auto">
                <h2>Privacy Policy</h2>
                <p className="text-tribal-700">Last Updated: {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                
                <p className="text-tribal-700">
                  At Tribal Installment Loans, we respect your privacy and are committed to protecting your personal information. 
                  This Privacy Policy describes how we collect, use, and disclose information about you when you visit our website, 
                  interact with us, and use our services.
                </p>
                
                <h3>Information We Collect</h3>
                <p className="text-tribal-700">
                  We collect information that you provide directly to us, such as when you apply for a loan, 
                  create an account, contact customer support, or otherwise communicate with us. This information may include:
                </p>
                
                <ul className="list-disc pl-6 text-tribal-700">
                  <li>Personal identifiers (name, email address, phone number, postal address)</li>
                  <li>Financial information (income, employment details, bank account information)</li>
                  <li>Government-issued identification numbers (social security number, driver's license)</li>
                  <li>Demographic information (date of birth, gender)</li>
                  <li>Any other information you choose to provide</li>
                </ul>
                
                <h3>How We Use Your Information</h3>
                <p className="text-tribal-700">
                  We use the information we collect for various purposes, including to:
                </p>
                
                <ul className="list-disc pl-6 text-tribal-700">
                  <li>Process your loan application and connect you with tribal lenders</li>
                  <li>Verify your identity and prevent fraud</li>
                  <li>Communicate with you about your account and provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Send you marketing communications (subject to your preferences)</li>
                </ul>
                
                <h3>Information Sharing</h3>
                <p className="text-tribal-700">
                  We may share your information with:
                </p>
                
                <ul className="list-disc pl-6 text-tribal-700">
                  <li>Tribal lenders and other financial service providers in our network</li>
                  <li>Service providers that perform services on our behalf</li>
                  <li>Legal and regulatory authorities, as required by law</li>
                  <li>Business partners, with your consent</li>
                </ul>
                
                <h3>Your Choices</h3>
                <p className="text-tribal-700">
                  You have certain choices about how we use your information:
                </p>
                
                <ul className="list-disc pl-6 text-tribal-700">
                  <li>You can opt out of receiving marketing communications</li>
                  <li>You can request access to, correction, or deletion of your personal information</li>
                  <li>You can choose not to provide certain information, though this may limit your ability to use some features</li>
                </ul>
                
                <h3>Security</h3>
                <p className="text-tribal-700">
                  We implement appropriate technical and organizational measures to protect your personal information. 
                  However, no method of transmission over the Internet or electronic storage is 100% secure, 
                  so we cannot guarantee absolute security.
                </p>
                
                <h3>Changes to This Policy</h3>
                <p className="text-tribal-700">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                
                <h3>Contact Us</h3>
                <p className="text-tribal-700">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
