
import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';

const Apply: React.FC = () => {
  useEffect(() => {
    // Load external scripts needed for the form
    const jsonScript = document.createElement('script');
    jsonScript.src = 'https://www.rndframe.com/server/web/js/json.min.js';
    jsonScript.type = 'text/javascript';
    document.body.appendChild(jsonScript);

    jsonScript.onload = () => {
      const formScript = document.createElement('script');
      formScript.type = 'text/javascript';
      formScript.innerHTML = `
        var srcURL= 'https://www.rndframe.com/server'; 
        var inputOptions = { 
          UserID: 'ZT4LlEwwo9MoHR4Sd6sYVDeevacfDDdSagmRZFWx_98.', 
          Style: 'STYLE1', 
          FormID: 'INSTALLMENT_STEP', 
          SubID: '', 
          SubID2: '', 
          SubID3: '', 
          Domain: '', 
          Height: 'AUTO', 
          StepAmountSelect: 'buttons'
        }; 
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = srcURL + '/init.php?vn=' + encodeURIComponent(JSON.stringify(inputOptions));
        document.getElementById('formContainer').appendChild(script);
      `;
      document.body.appendChild(formScript);
    };

    return () => {
      // Cleanup scripts when component unmounts
      document.body.removeChild(jsonScript);
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Apply for Tribal Installment Loans | Quick Online Application"
        description="Apply now for tribal installment loans with our simple online application. Get quick decisions and funds as soon as the next business day."
        canonicalUrl="https://tribal-installment-loans.com/apply"
        keywords="apply tribal loans, tribal loan application, apply for installment loans, tribal loan online form"
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <HeroSection 
            title="Apply for a Tribal Installment Loan" 
            subtitle="Complete our simple application to get the funds you need quickly and securely."
          />
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="prose prose-lg max-w-none text-tribal-700 mb-8">
                  <h2 className="text-2xl font-bold text-tribal-900 mb-4">Apply Online in Minutes</h2>
                  <p>
                    Our straightforward application process makes it easy to apply for the funds you need. 
                    Fill out the form below with your information, and you could receive a decision quickly.
                  </p>
                  <p>
                    Before you apply, please ensure you have:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>A valid government-issued ID</li>
                    <li>Proof of regular income</li>
                    <li>An active checking account</li>
                    <li>A valid email address and phone number</li>
                  </ul>
                  <p>
                    Once approved, funds could be deposited directly to your bank account as soon as the next business day.
                  </p>
                </div>
                
                <div className="bg-tribal-50 rounded-xl p-8 shadow-sm mb-8">
                  <div id="formContainer" className="w-full">
                    <div id="rsForm"></div>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none text-tribal-700 mt-12">
                  <h2 className="text-2xl font-bold text-tribal-900 mb-4">What Happens After You Apply</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="glass-card rounded-lg p-6">
                      <div className="bg-tribal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <span className="text-tribal-500 font-bold text-xl">1</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-tribal-900">Application Review</h3>
                      <p className="text-tribal-600">Your application will be reviewed promptly, often within minutes of submission.</p>
                    </div>
                    
                    <div className="glass-card rounded-lg p-6">
                      <div className="bg-tribal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <span className="text-tribal-500 font-bold text-xl">2</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-tribal-900">Loan Approval</h3>
                      <p className="text-tribal-600">If approved, you'll receive your personalized loan terms to review and accept.</p>
                    </div>
                    
                    <div className="glass-card rounded-lg p-6">
                      <div className="bg-tribal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <span className="text-tribal-500 font-bold text-xl">3</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-tribal-900">Fund Disbursement</h3>
                      <p className="text-tribal-600">After acceptance, funds are typically deposited to your bank account by the next business day.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Apply;
