import Link from 'next/link';

export const metadata = {
  title: 'Solutions | KhulaNode',
  description: 'Digital business systems built for your specific needs. From websites to e-commerce, subscriptions to managed operations.',
};

export default function Solutions() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">
              Digital Systems That Work For Your Business
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We build and operate complete digital systems—not just software. 
              Choose what you need, and we'll handle the rest.
            </p>
            <Link
              href="/pricing"
              className="inline-block px-8 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              View Pricing & Build Your Package
            </Link>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-brand-gray mb-12 text-center">
            Core Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Business Websites */}
            <Link href="/solutions/business-websites" className="group">
              <div className="border-2 border-brand-cyan/30 bg-white p-8 rounded-xl hover:shadow-xl transition-all hover:border-brand-cyan h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-brand-darkblue mb-3 group-hover:text-brand-blue transition-colors">
                  Business Websites
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional online presence. Mobile-responsive, fast, and SEO-optimized.
                  Your customers find you and know what you offer.
                </p>
                <div className="text-sm text-brand-blue font-medium">
                  Starting at R800 setup, R500/month →
                </div>
              </div>
            </Link>

            {/* E-commerce */}
            <Link href="/solutions/ecommerce" className="group">
              <div className="border-2 border-brand-blue/30 bg-white p-8 rounded-xl hover:shadow-xl transition-all hover:border-brand-blue h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-darkblue rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-brand-darkblue mb-3 group-hover:text-brand-blue transition-colors">
                  E-commerce & Online Stores
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete online store with product catalog, checkout, payments, inventory, 
                  and order management. Sell digital or physical products.
                </p>
                <div className="text-sm text-brand-blue font-medium">
                  Starting at R2000 setup, R1200/month →
                </div>
              </div>
            </Link>

            {/* Subscriptions */}
            <Link href="/solutions/subscriptions" className="group">
              <div className="border-2 border-brand-cyan/30 bg-white p-8 rounded-xl hover:shadow-xl transition-all hover:border-brand-cyan h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-brand-darkblue mb-3 group-hover:text-brand-blue transition-colors">
                  Subscriptions & Memberships
                </h3>
                <p className="text-gray-600 mb-4">
                  Recurring revenue systems. Automated billing, member access control, 
                  tiered plans, and cancellation handling.
                </p>
                <div className="text-sm text-brand-blue font-medium">
                  Available as add-on from R1000 setup →
                </div>
              </div>
            </Link>

            {/* Managed Operations */}
            <Link href="/solutions/managed-operations" className="group">
              <div className="border-2 border-brand-blue/30 bg-white p-8 rounded-xl hover:shadow-xl transition-all hover:border-brand-blue h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-darkblue to-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-brand-darkblue mb-3 group-hover:text-brand-blue transition-colors">
                  Managed Digital Operations
                </h3>
                <p className="text-gray-600 mb-4">
                  We don't just build—we manage. 24/7 monitoring, updates, backups, 
                  security, and support. You focus on business.
                </p>
                <div className="text-sm text-brand-blue font-medium">
                  Included in all packages →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Add-on Features */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-gray mb-4 text-center">
              Available Add-ons
            </h2>
            <p className="text-gray-600 mb-12 text-center">
              Extend your system with additional capabilities as your business grows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Analytics */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-brand-darkblue mb-2">Analytics & Tracking</h4>
                <p className="text-sm text-gray-600">Monitor visitor behavior and conversion metrics</p>
              </div>

              {/* Backups */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-brand-darkblue mb-2">Daily Backups</h4>
                <p className="text-sm text-gray-600">Automated backups with recovery options</p>
              </div>

              {/* CMS */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-brand-darkblue mb-2">CMS Access</h4>
                <p className="text-sm text-gray-600">Edit content directly without developer help</p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-brand-darkblue mb-2">Transactional Email</h4>
                <p className="text-sm text-gray-600">Order confirmations, receipts, and notifications</p>
              </div>

              {/* Booking */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-brand-darkblue mb-2">Booking System</h4>
                <p className="text-sm text-gray-600">Appointment scheduling with payment integration</p>
              </div>

              {/* Automations */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-brand-darkblue mb-2">Workflow Automations</h4>
                <p className="text-sm text-gray-600">Connect systems and automate repetitive tasks</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/pricing"
                className="inline-block px-6 py-3 border-2 border-brand-blue text-brand-darkblue rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-all"
              >
                View Full Pricing Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-darkblue via-brand-blue to-brand-cyan text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build your system?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Use our pricing calculator to build a custom package, or contact us 
            to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-block px-8 py-3 bg-white text-brand-darkblue rounded-lg font-semibold hover:bg-gray-100 hover:shadow-xl transition-all"
            >
              Get Custom Quote
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
