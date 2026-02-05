'use client';
import { useState } from 'react';

export default function TermsAndConditions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'definitions', title: '1. Definitions' },
    { id: 'acceptance', title: '2. Acceptance of Terms' },
    { id: 'services', title: '3. Services Description' },
    { id: 'registration', title: '4. User Registration' },
    { id: 'privacy', title: '5. Privacy Policy' },
    { id: 'conduct', title: '6. User Conduct' },
    { id: 'intellectual', title: '7. Intellectual Property' },
    { id: 'payment', title: '8. Payment Terms' },
    { id: 'termination', title: '9. Termination' },
    { id: 'warranties', title: '10. Warranties and Disclaimers' },
    { id: 'liability', title: '11. Limitation of Liability' },
    { id: 'indemnification', title: '12. Indemnification' },
    { id: 'governing', title: '13. Governing Law' },
    { id: 'dispute', title: '14. Dispute Resolution' },
    { id: 'changes', title: '15. Changes to Terms' },
    { id: 'contact', title: '16. Contact Information' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Terms & Conditions
              </h1>
              <p className="text-sm text-slate-600 mt-1">Last updated: February 2026</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              Download PDF
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-md p-6 border border-slate-200">
              <h2 className="font-semibold text-slate-900 mb-4 text-lg">Quick Navigation</h2>
              
              {/* Search */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Section Links */}
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
                <h2 className="text-3xl font-bold mb-4">Welcome</h2>
                <p className="text-blue-100 leading-relaxed">
                  Please read these Terms and Conditions carefully before using our services. 
                  By accessing or using our services, you agree to be bound by these terms.
                </p>
              </div>

              <div className="p-8 space-y-12">
                {/* Section 1: Definitions */}
                <section id="definitions" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    1. Definitions
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      In these Terms and Conditions, unless the context otherwise requires:
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li><strong>"Services"</strong> means the products, services, and features we provide through our platform.</li>
                      <li><strong>"User"</strong> means any person who accesses or uses our Services.</li>
                      <li><strong>"Content"</strong> means all data, text, images, videos, or other materials uploaded or transmitted through our Services.</li>
                      <li><strong>"Agreement"</strong> means these Terms and Conditions and any amendments or supplements thereto.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 2: Acceptance of Terms */}
                <section id="acceptance" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    2. Acceptance of Terms
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      By creating an account or using our Services, you acknowledge that you have read, understood, 
                      and agree to be bound by these Terms and Conditions. If you do not agree to these terms, 
                      you must not access or use our Services.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      You represent that you are at least 18 years of age or the age of majority in your jurisdiction, 
                      and that you have the legal capacity to enter into this Agreement.
                    </p>
                  </div>
                </section>

                {/* Section 3: Services Description */}
                <section id="services" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    3. Services Description
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Our Services provide users with access to various features and functionalities as described 
                      on our platform. We reserve the right to modify, suspend, or discontinue any aspect of our 
                      Services at any time without prior notice.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                      <p className="text-sm text-slate-700">
                        <strong>Note:</strong> We strive to maintain uninterrupted service availability but cannot 
                        guarantee that our Services will be available at all times.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 4: User Registration */}
                <section id="registration" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    4. User Registration
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      To access certain features of our Services, you may be required to register for an account. 
                      You agree to:
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li>Provide accurate, current, and complete information during registration</li>
                      <li>Maintain and promptly update your account information</li>
                      <li>Keep your password secure and confidential</li>
                      <li>Notify us immediately of any unauthorized access to your account</li>
                      <li>Accept responsibility for all activities that occur under your account</li>
                    </ul>
                  </div>
                </section>

                {/* Section 5: Privacy Policy */}
                <section id="privacy" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    5. Privacy Policy
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
                      your personal information. By using our Services, you consent to our collection and use of 
                      personal data as described in our Privacy Policy.
                    </p>
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                      Read our full Privacy Policy →
                    </a>
                  </div>
                </section>

                {/* Section 6: User Conduct */}
                <section id="conduct" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    6. User Conduct
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      You agree not to use our Services to:
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe upon the rights of others, including intellectual property rights</li>
                      <li>Upload or transmit viruses, malware, or other malicious code</li>
                      <li>Engage in any fraudulent, deceptive, or manipulative practices</li>
                      <li>Harass, threaten, or harm other users</li>
                      <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                      <li>Use automated systems to access our Services without permission</li>
                    </ul>
                  </div>
                </section>

                {/* Section 7: Intellectual Property */}
                <section id="intellectual" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    7. Intellectual Property Rights
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      All content, features, and functionality of our Services, including but not limited to text, 
                      graphics, logos, icons, images, audio clips, and software, are the exclusive property of our 
                      company or our licensors and are protected by copyright, trademark, and other intellectual 
                      property laws.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      You are granted a limited, non-exclusive, non-transferable license to access and use our 
                      Services for personal, non-commercial purposes only.
                    </p>
                  </div>
                </section>

                {/* Section 8: Payment Terms */}
                <section id="payment" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    8. Payment Terms
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      If you purchase any paid Services, you agree to pay all applicable fees as described at the 
                      time of purchase. All payments are non-refundable unless otherwise stated.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-2">Billing Cycle</h4>
                        <p className="text-sm text-slate-700">Charges are billed on a recurring basis according to your selected plan.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-2">Auto-Renewal</h4>
                        <p className="text-sm text-slate-700">Subscriptions automatically renew unless cancelled before the renewal date.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 9: Termination */}
                <section id="termination" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    9. Termination
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      We reserve the right to suspend or terminate your access to our Services at any time, 
                      with or without cause, and with or without notice. You may also terminate your account 
                      at any time through your account settings.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Upon termination, your right to use our Services will immediately cease, and we may delete 
                      your account and all associated data.
                    </p>
                  </div>
                </section>

                {/* Section 10: Warranties and Disclaimers */}
                <section id="warranties" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    10. Warranties and Disclaimers
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded mb-4">
                      <p className="text-sm text-slate-700 font-medium">
                        OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                        EITHER EXPRESS OR IMPLIED.
                      </p>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      We do not warrant that our Services will be uninterrupted, secure, or error-free, or that 
                      any defects will be corrected. We disclaim all warranties, including but not limited to 
                      implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    </p>
                  </div>
                </section>

                {/* Section 11: Limitation of Liability */}
                <section id="liability" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    11. Limitation of Liability
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, 
                      special, consequential, or punitive damages, or any loss of profits or revenues, whether 
                      incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Our total liability shall not exceed the amount you paid to us in the twelve (12) months 
                      preceding the claim.
                    </p>
                  </div>
                </section>

                {/* Section 12: Indemnification */}
                <section id="indemnification" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    12. Indemnification
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed">
                      You agree to indemnify, defend, and hold harmless our company, its officers, directors, 
                      employees, and agents from and against any claims, liabilities, damages, losses, and expenses, 
                      including reasonable attorneys' fees, arising out of or in any way connected with your access 
                      to or use of our Services, your violation of these Terms, or your violation of any rights of another.
                    </p>
                  </div>
                </section>

                {/* Section 13: Governing Law */}
                <section id="governing" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    13. Governing Law
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed">
                      These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                      in which our company is registered, without regard to its conflict of law provisions. You agree 
                      to submit to the exclusive jurisdiction of the courts located in that jurisdiction.
                    </p>
                  </div>
                </section>

                {/* Section 14: Dispute Resolution */}
                <section id="dispute" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    14. Dispute Resolution
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      In the event of any dispute arising out of or relating to these Terms, the parties agree to 
                      first attempt to resolve the dispute through good faith negotiations. If the dispute cannot 
                      be resolved through negotiations within thirty (30) days, either party may pursue binding arbitration.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Any arbitration shall be conducted in accordance with the rules of a recognized arbitration body, 
                      and judgment on the award may be entered in any court having jurisdiction.
                    </p>
                  </div>
                </section>

                {/* Section 15: Changes to Terms */}
                <section id="changes" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    15. Changes to Terms
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      We reserve the right to modify these Terms at any time. We will notify you of any material 
                      changes by posting the new Terms on our website and updating the "Last Updated" date. Your 
                      continued use of our Services after any such changes constitutes your acceptance of the new Terms.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                      <p className="text-sm text-slate-700">
                        We recommend reviewing these Terms periodically to stay informed of any updates.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 16: Contact Information */}
                <section id="contact" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    16. Contact Information
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-6">
                      If you have any questions about these Terms and Conditions, please contact us:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div className="text-blue-600 mb-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                        <p className="text-sm text-slate-700">legal@company.com</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div className="text-blue-600 mb-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                        <p className="text-sm text-slate-700">+1 (555) 123-4567</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div className="text-blue-600 mb-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                        <p className="text-sm text-slate-700">123 Legal St, Suite 100<br/>City, State 12345</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Footer */}
              <div className="bg-slate-50 border-t border-slate-200 p-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-slate-600">
                    © 2026 Company Name. All rights reserved.
                  </p>
                  <div className="flex gap-4">
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      Print Terms
                    </button>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      Save as PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}