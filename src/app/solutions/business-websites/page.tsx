import Link from 'next/link';

export const metadata = {
  title: 'Business Websites | KhulaNode Solutions',
  description: 'Professional business websites that work. Mobile-responsive, fast, and managed for you.',
};

export default function BusinessWebsites() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-brand-cyan/10 rounded-full text-brand-cyan text-sm font-medium mb-4">
              Standard Business Package
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">
              Professional Business Websites
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              A reliable online presence. Your customers find you, know what you offer, 
              and can easily get in touch. No complexity. Just a website that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-block px-8 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                Get Started - R800 Setup
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 border-2 border-brand-blue text-brand-darkblue rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-all"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-blue mb-2">R800</div>
              <div className="text-sm text-gray-600">One-time Setup</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-cyan mb-2">R500/mo</div>
              <div className="text-sm text-gray-600">Monthly Management</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-darkblue mb-2">10</div>
              <div className="text-sm text-gray-600">Change Requests/Month</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-gray mb-4 text-center">
              What's Included
            </h2>
            <p className="text-gray-600 mb-12 text-center">
              Everything you need for a professional online presence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Business Website (4-7 Pages)</h3>
                  <p className="text-sm text-gray-600">Home, About, Services, Contact, and more as needed</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Mobile-Responsive Design</h3>
                  <p className="text-sm text-gray-600">Looks perfect on phones, tablets, and desktops</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Basic SEO</h3>
                  <p className="text-sm text-gray-600">Optimized for search engines so customers can find you</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Domain & DNS Setup</h3>
                  <p className="text-sm text-gray-600">Your domain configured and working correctly</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">SSL Certificates</h3>
                  <p className="text-sm text-gray-600">Secure HTTPS connection for trust and safety</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Hosting & Uptime Management</h3>
                  <p className="text-sm text-gray-600">Fast, reliable hosting monitored 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Privacy Policy & Terms Pages</h3>
                  <p className="text-sm text-gray-600">Legal compliance pages included</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">POPIA-Aligned Handling</h3>
                  <p className="text-sm text-gray-600">South African data protection compliance</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Google Maps Integration</h3>
                  <p className="text-sm text-gray-600">Help customers find your physical location</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Basic Contact Form</h3>
                  <p className="text-sm text-gray-600">Let customers reach you easily</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">10 Change Requests Per Month</h3>
                  <p className="text-sm text-gray-600">Update content, fix issues, make improvements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Add-ons */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-gray mb-4 text-center">
              Optional Add-ons
            </h2>
            <p className="text-gray-600 mb-12 text-center">
              Extend your website with additional capabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-brand-darkblue mb-2">CMS Access</h4>
                <p className="text-sm text-gray-600 mb-3">Edit your own content without technical help</p>
                <div className="text-xs text-gray-500">R200 setup</div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-brand-darkblue mb-2">Analytics & Tracking</h4>
                <p className="text-sm text-gray-600 mb-3">Monitor visitors and track conversions</p>
                <div className="text-xs text-gray-500">R150/month</div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-brand-darkblue mb-2">Daily Backups</h4>
                <p className="text-sm text-gray-600 mb-3">Automated backups with quick recovery</p>
                <div className="text-xs text-gray-500">R300/month</div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-brand-darkblue mb-2">WhatsApp Integration</h4>
                <p className="text-sm text-gray-600 mb-3">Let customers contact you via WhatsApp</p>
                <div className="text-xs text-gray-500">R300 setup</div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/pricing"
                className="inline-block px-6 py-3 border-2 border-brand-blue text-brand-darkblue rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-all"
              >
                View All Add-ons in Pricing Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-darkblue via-brand-blue to-brand-cyan text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get your business online?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Start with our Standard Business Package or build a custom solution in our pricing calculator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-block px-8 py-3 bg-white text-brand-darkblue rounded-lg font-semibold hover:bg-gray-100 hover:shadow-xl transition-all"
            >
              Build Your Package
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
