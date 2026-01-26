import Link from 'next/link';

export const metadata = {
  title: 'Subscriptions & Memberships | KhulaNode',
  description: 'Recurring revenue systems with automated billing, member management, and tiered access control.',
};

export default function Subscriptions() {
  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-brand-cyan/10 rounded-full text-brand-cyan text-sm font-medium mb-4">
              Add-on Feature
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">
              Subscriptions & Memberships
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Predictable recurring revenue. Automate billing, manage members, control access, 
              and handle renewals and cancellations without manual work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-block px-8 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                Configure Your System
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 border-2 border-brand-blue text-brand-darkblue rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-all"
              >
                Discuss Your Needs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-gray mb-4 text-center">
              What You Get
            </h2>
            <p className="text-gray-600 mb-12 text-center">
              Complete subscription and membership management.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Multiple Subscription Tiers</h3>
                  <p className="text-sm text-gray-600">Basic, Pro, Premium—whatever structure fits your business</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Automated Recurring Billing</h3>
                  <p className="text-sm text-gray-600">Monthly or annual billing handled automatically</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Member Access Control</h3>
                  <p className="text-sm text-gray-600">Control what content each tier can access</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Renewal Management</h3>
                  <p className="text-sm text-gray-600">Automatic renewal reminders and processing</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Cancellation Handling</h3>
                  <p className="text-sm text-gray-600">Clean offboarding and access removal</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Member Dashboard</h3>
                  <p className="text-sm text-gray-600">Members manage their own subscriptions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-gray mb-6">
              Pricing Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border-2 border-brand-cyan">
                <h3 className="font-semibold text-brand-darkblue mb-2">System Setup</h3>
                <div className="text-3xl font-bold text-brand-cyan mb-2">R1000</div>
                <p className="text-sm text-gray-600">One-time setup for subscription system</p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-brand-blue">
                <h3 className="font-semibold text-brand-darkblue mb-2">Recurring Billing</h3>
                <div className="text-3xl font-bold text-brand-blue mb-2">R100/mo</div>
                <p className="text-sm text-gray-600">Monthly fee for billing automation</p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Add to any base package (Standard or E-commerce)
            </p>

            <Link
              href="/pricing"
              className="inline-block px-8 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              Build Your Complete System
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-darkblue via-brand-blue to-brand-cyan text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Perfect for gyms, courses, and membership sites
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            If you need recurring revenue without the complexity, we'll build it for you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-brand-darkblue rounded-lg font-semibold hover:bg-gray-100 hover:shadow-xl transition-all"
          >
            Discuss Your Subscription Needs
          </Link>
        </div>
      </section>
    </>
  );
}
