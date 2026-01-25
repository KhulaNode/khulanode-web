import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6 leading-tight">
              Run your business online. Reliably.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              KhulaNode builds and operates digital business systems. We handle subscriptions,
              payments, and online operations so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all inline-block text-center"
              >
                Get Started
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-3 border-2 border-brand-blue text-brand-darkblue rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-all inline-block text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-brand-gray mb-12">Who it's for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-brand-cyan/20 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-brand-darkblue mb-2 text-lg">Service Businesses</h3>
              <p className="text-gray-600 text-sm">
                Gyms, consultants, clubs, and service providers that need memberships and recurring
                payments without technical complexity.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-brand-blue/20 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-brand-darkblue mb-2 text-lg">Growing Businesses</h3>
              <p className="text-gray-600 text-sm">
                Companies outgrowing spreadsheets and email. You need order management, subscription
                tracking, and payment processing.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-brand-cyan/20 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-brand-darkblue mb-2 text-lg">Non-Technical Teams</h3>
              <p className="text-gray-600 text-sm">
                Business owners who want reliable systems without hiring developers or managing
                technical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-brand-gray mb-4">What we build</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Every solution is organized by capability, not technology. We focus on what your business
            needs to do.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Websites */}
            <div className="border-2 border-brand-cyan/30 bg-white p-8 rounded-xl hover:shadow-xl transition-all hover:border-brand-cyan">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">▣</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-darkblue mb-3">Business Websites</h3>
              <p className="text-gray-600 mb-4">
                A professional online presence. Your customers know where to find you, what you offer,
                and how to get in touch.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Professional design and layout</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Mobile-friendly and fast</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Contact and inquiry forms</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Service or product listings</li>
              </ul>
            </div>

            {/* Subscription & Membership */}
            <div className="border-2 border-brand-blue/30 bg-white p-8 rounded-xl hover:shadow-xl transition-all hover:border-brand-blue">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-darkblue rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">⟲</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-darkblue mb-3">Subscriptions & Memberships</h3>
              <p className="text-gray-600 mb-4">
                Recurring revenue you can count on. Automated billing, member management, and
                cancellation handling.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Multiple subscription tiers</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Automated recurring billing</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Member access control</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Renewal and cancellation management</li>
              </ul>
            </div>

            {/* Online Payments */}
            <div className="border-2 border-brand-cyan/30 bg-white p-8 rounded-xl hover:shadow-xl transition-all hover:border-brand-cyan">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">₊</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-darkblue mb-3">Online Payments & Billing</h3>
              <p className="text-gray-600 mb-4">
                Accept payments securely through trusted providers. No payment processing risk for
                KhulaNode.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Secure payment integration</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Multiple payment methods</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Invoice generation</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Payment tracking and history</li>
              </ul>
            </div>

            {/* E-commerce & Orders */}
            <div className="border-2 border-brand-blue/30 bg-white p-8 rounded-xl hover:shadow-xl transition-all hover:border-brand-blue">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-darkblue rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🛍</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-darkblue mb-3">E-commerce & Orders</h3>
              <p className="text-gray-600 mb-4">
                Sell online. Manage inventory, process orders, and track customer purchases in one
                place.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Product catalog and inventory</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Shopping cart and checkout</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Order management dashboard</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Customer communication</li>
              </ul>
            </div>

            {/* Managed Operations */}
            <div className="border-2 border-brand-darkblue/30 bg-white p-8 rounded-xl md:col-span-2 hover:shadow-xl transition-all hover:border-brand-darkblue">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-darkblue to-brand-blue rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">⚙</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-darkblue mb-3">Managed Digital Operations</h3>
              <p className="text-gray-600 mb-4">
                We don't just build—we manage. Ongoing support, system monitoring, updates, and scaling.
                You get reliability without the technical work.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> 24/7 system monitoring and uptime</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Regular security and performance updates</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Customer and operational support</li>
                <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Data backups and recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-brand-gray mb-12">How it works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-cyan to-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                1
              </div>
              <h3 className="font-semibold text-brand-darkblue mb-2">Understand</h3>
              <p className="text-gray-600 text-sm">
                We learn about your business, goals, and how you currently operate. No assumptions.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-brand-blue text-3xl font-bold">→</div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-darkblue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                2
              </div>
              <h3 className="font-semibold text-brand-darkblue mb-2">Build</h3>
              <p className="text-gray-600 text-sm">
                We design and build your system. Clear, functional, no unnecessary features.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-brand-blue text-3xl font-bold">→</div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-cyan to-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="font-semibold text-brand-darkblue mb-2">Connect</h3>
              <p className="text-gray-600 text-sm">
                Payments integrate with trusted providers. Your data stays secure and separate.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-brand-blue text-3xl font-bold">→</div>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-darkblue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                4
              </div>
              <h3 className="font-semibold text-brand-darkblue mb-2">Manage</h3>
              <p className="text-gray-600 text-sm">
                We maintain it. Updates, monitoring, support—you focus on your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-darkblue via-brand-blue to-brand-cyan text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your business?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Let's talk about what you need. We'll design a system that fits your business and grows
            with you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-brand-darkblue rounded-lg font-semibold hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
