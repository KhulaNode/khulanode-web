import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Run your business online. Reliably.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              KhulaNode builds and operates digital business systems. We handle subscriptions,
              payments, and online operations so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-teal-600 text-white rounded font-medium hover:bg-teal-700 transition-colors inline-block text-center"
              >
                Get Started
              </Link>
              <Link
                href="#how-it-works"
                className="px-6 py-3 border-2 border-slate-300 text-slate-900 rounded font-medium hover:border-teal-600 hover:text-teal-600 transition-colors inline-block text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Who it's for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded">
              <h3 className="font-semibold text-slate-900 mb-2">Service Businesses</h3>
              <p className="text-slate-600 text-sm">
                Gyms, consultants, clubs, and service providers that need memberships and recurring
                payments without technical complexity.
              </p>
            </div>
            <div className="p-6 bg-white rounded">
              <h3 className="font-semibold text-slate-900 mb-2">Growing Businesses</h3>
              <p className="text-slate-600 text-sm">
                Companies outgrowing spreadsheets and email. You need order management, subscription
                tracking, and payment processing.
              </p>
            </div>
            <div className="p-6 bg-white rounded">
              <h3 className="font-semibold text-slate-900 mb-2">Non-Technical Teams</h3>
              <p className="text-slate-600 text-sm">
                Business owners who want reliable systems without hiring developers or managing
                technical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What we build</h2>
          <p className="text-slate-600 mb-12 max-w-2xl">
            Every solution is organized by capability, not technology. We focus on what your business
            needs to do.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Websites */}
            <div className="border border-slate-200 p-8 rounded">
              <div className="w-12 h-12 bg-teal-100 rounded flex items-center justify-center mb-4">
                <span className="text-teal-600 font-bold">▣</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Business Websites</h3>
              <p className="text-slate-600 mb-4">
                A professional online presence. Your customers know where to find you, what you offer,
                and how to get in touch.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>✓ Professional design and layout</li>
                <li>✓ Mobile-friendly and fast</li>
                <li>✓ Contact and inquiry forms</li>
                <li>✓ Service or product listings</li>
              </ul>
            </div>

            {/* Subscription & Membership */}
            <div className="border border-slate-200 p-8 rounded">
              <div className="w-12 h-12 bg-teal-100 rounded flex items-center justify-center mb-4">
                <span className="text-teal-600 font-bold">⟲</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Subscriptions & Memberships</h3>
              <p className="text-slate-600 mb-4">
                Recurring revenue you can count on. Automated billing, member management, and
                cancellation handling.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>✓ Multiple subscription tiers</li>
                <li>✓ Automated recurring billing</li>
                <li>✓ Member access control</li>
                <li>✓ Renewal and cancellation management</li>
              </ul>
            </div>

            {/* Online Payments */}
            <div className="border border-slate-200 p-8 rounded">
              <div className="w-12 h-12 bg-teal-100 rounded flex items-center justify-center mb-4">
                <span className="text-teal-600 font-bold">₊</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Online Payments & Billing</h3>
              <p className="text-slate-600 mb-4">
                Accept payments securely through trusted providers. No payment processing risk for
                KhulaNode.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>✓ Secure payment integration</li>
                <li>✓ Multiple payment methods</li>
                <li>✓ Invoice generation</li>
                <li>✓ Payment tracking and history</li>
              </ul>
            </div>

            {/* E-commerce & Orders */}
            <div className="border border-slate-200 p-8 rounded">
              <div className="w-12 h-12 bg-teal-100 rounded flex items-center justify-center mb-4">
                <span className="text-teal-600 font-bold">🛍</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">E-commerce & Orders</h3>
              <p className="text-slate-600 mb-4">
                Sell online. Manage inventory, process orders, and track customer purchases in one
                place.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>✓ Product catalog and inventory</li>
                <li>✓ Shopping cart and checkout</li>
                <li>✓ Order management dashboard</li>
                <li>✓ Customer communication</li>
              </ul>
            </div>

            {/* Managed Operations */}
            <div className="border border-slate-200 p-8 rounded md:col-span-2">
              <div className="w-12 h-12 bg-teal-100 rounded flex items-center justify-center mb-4">
                <span className="text-teal-600 font-bold">⚙</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Managed Digital Operations</h3>
              <p className="text-slate-600 mb-4">
                We don't just build—we manage. Ongoing support, system monitoring, updates, and scaling.
                You get reliability without the technical work.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>✓ 24/7 system monitoring and uptime</li>
                <li>✓ Regular security and performance updates</li>
                <li>✓ Customer and operational support</li>
                <li>✓ Data backups and recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">How it works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Understand</h3>
              <p className="text-slate-600 text-sm">
                We learn about your business, goals, and how you currently operate. No assumptions.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-slate-300 text-3xl">→</div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Build</h3>
              <p className="text-slate-600 text-sm">
                We design and build your system. Clear, functional, no unnecessary features.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-slate-300 text-3xl">→</div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Connect</h3>
              <p className="text-slate-600 text-sm">
                Payments integrate with trusted providers. Your data stays secure and separate.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-slate-300 text-3xl">→</div>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Manage</h3>
              <p className="text-slate-600 text-sm">
                We maintain it. Updates, monitoring, support—you focus on your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-slate-900 text-slate-50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your business?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's talk about what you need. We'll design a system that fits your business and grows
            with you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-teal-600 text-white rounded font-medium hover:bg-teal-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
