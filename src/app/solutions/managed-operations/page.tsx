import Link from 'next/link';

export const metadata = {
  title: 'Managed Digital Operations | KhulaNode',
  description: 'We build it. We manage it. You focus on business. 24/7 monitoring, updates, security, and support.',
};

export default function ManagedOperations() {
  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-brand-darkblue/10 rounded-full text-brand-darkblue text-sm font-medium mb-4">
              Included in All Packages
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">
              Managed Digital Operations
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We don't just build systems—we operate them. Your digital infrastructure runs smoothly, 
              stays secure, and scales as you grow. No technical work required from you.
            </p>
            <Link
              href="/pricing"
              className="inline-block px-8 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              See What's Included
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-gray mb-4 text-center">
              What We Manage
            </h2>
            <p className="text-gray-600 mb-12 text-center">
              Ongoing operations, monitoring, security, and support—all handled by KhulaNode.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl border border-brand-cyan/30">
                <div className="w-12 h-12 bg-brand-cyan rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-darkblue mb-3">24/7 System Monitoring</h3>
                <p className="text-gray-600">
                  We watch your systems around the clock. If something breaks, we fix it before you notice.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-brand-blue/30">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-darkblue mb-3">Security Updates</h3>
                <p className="text-gray-600">
                  Regular security patches, vulnerability scans, and proactive threat protection.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl border border-brand-cyan/30">
                <div className="w-12 h-12 bg-brand-cyan rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-darkblue mb-3">Performance Optimization</h3>
                <p className="text-gray-600">
                  Ongoing speed improvements, caching configuration, and load optimization.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-brand-blue/30">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-darkblue mb-3">Data Backups</h3>
                <p className="text-gray-600">
                  Regular automated backups with tested recovery procedures.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl border border-brand-cyan/30">
                <div className="w-12 h-12 bg-brand-cyan rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-darkblue mb-3">Customer Support</h3>
                <p className="text-gray-600">
                  Email and chat support for both you and your customers when needed.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-brand-blue/30">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-darkblue mb-3">Feature Updates</h3>
                <p className="text-gray-600">
                  We add improvements and new capabilities as technology evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-gray mb-6 text-center">
              What You Don't Have To Do
            </h2>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start space-x-4">
                <div className="text-2xl">❌</div>
                <div>
                  <h4 className="font-semibold text-brand-darkblue mb-1">No Hiring Developers</h4>
                  <p className="text-sm text-gray-600">We handle all technical work—no tech team needed</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start space-x-4">
                <div className="text-2xl">❌</div>
                <div>
                  <h4 className="font-semibold text-brand-darkblue mb-1">No Server Management</h4>
                  <p className="text-sm text-gray-600">We manage hosting, scaling, and infrastructure</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start space-x-4">
                <div className="text-2xl">❌</div>
                <div>
                  <h4 className="font-semibold text-brand-darkblue mb-1">No Security Worries</h4>
                  <p className="text-sm text-gray-600">We handle updates, patches, and threat monitoring</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start space-x-4">
                <div className="text-2xl">❌</div>
                <div>
                  <h4 className="font-semibold text-brand-darkblue mb-1">No Downtime Panic</h4>
                  <p className="text-sm text-gray-600">24/7 monitoring means issues get fixed immediately</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-darkblue via-brand-blue to-brand-cyan text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Managed operations are included in every package
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            From R500/month for Standard Business Package. No hidden fees. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-block px-8 py-3 bg-white text-brand-darkblue rounded-lg font-semibold hover:bg-gray-100 hover:shadow-xl transition-all"
            >
              View All Packages
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
