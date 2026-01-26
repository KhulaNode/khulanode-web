import Link from 'next/link';
import VideoCarousel from '@/components/VideoCarousel';

export default function Home() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative py-20 md:py-32 overflow-hidden min-h-[600px] flex items-center">
        {/* Video Carousel Background */}
        <div className="absolute inset-0">
          <VideoCarousel />
        </div>
        
        {/* Content */}
        <div className="container relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Run your business online. Reliably.
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
              KhulaNode builds and operates digital business systems. We handle subscriptions,
              payments, and online operations so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-brand-darkblue rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all inline-block text-center"
              >
                Get Started
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-brand-darkblue transition-all inline-block text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-white via-brand-cyan/5 to-brand-blue/5">
        <div className="container">
          <h2 className="text-3xl font-bold text-brand-darkblue mb-12">Who it's for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-brand-cyan/15 to-brand-blue/10 rounded-xl border-2 border-brand-cyan/40 hover:shadow-2xl hover:border-brand-cyan transition-all hover:scale-105">
              <h3 className="font-semibold text-brand-darkblue mb-2 text-lg">Service Businesses</h3>
              <p className="text-gray-700 text-sm">
                Gyms, consultants, clubs, and service providers that need memberships and recurring
                payments without technical complexity.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-brand-blue/15 to-brand-darkblue/10 rounded-xl border-2 border-brand-blue/40 hover:shadow-2xl hover:border-brand-blue transition-all hover:scale-105">
              <h3 className="font-semibold text-brand-darkblue mb-2 text-lg">Growing Businesses</h3>
              <p className="text-gray-700 text-sm">
                Companies outgrowing spreadsheets and email. You need order management, subscription
                tracking, and payment processing.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-brand-cyan/15 to-brand-blue/10 rounded-xl border-2 border-brand-cyan/40 hover:shadow-2xl hover:border-brand-cyan transition-all hover:scale-105">
              <h3 className="font-semibold text-brand-darkblue mb-2 text-lg">Non-Technical Teams</h3>
              <p className="text-gray-700 text-sm">
                Business owners who want reliable systems without hiring developers or managing
                technical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-brand-cyan/5 to-brand-blue/10">
        <div className="container">
          <h2 className="text-3xl font-bold text-brand-darkblue mb-4">What we build</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Every solution is organized by capability, not technology. We focus on what your business
            needs to do.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Websites */}
            <div className="border-2 border-brand-cyan/40 bg-gradient-to-br from-white to-brand-cyan/5 p-8 rounded-xl hover:shadow-2xl transition-all hover:border-brand-cyan hover:scale-[1.02] hover:glow-cyan">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-darkblue mb-3">Business Websites</h3>
              <p className="text-gray-700 mb-4">
                A professional online presence. Your customers know where to find you, what you offer,
                and how to get in touch.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start"><span className="text-brand-cyan font-bold mr-2">✓</span> Professional design and layout</li>
                <li className="flex items-start"><span className="text-brand-cyan font-bold mr-2">✓</span> Mobile-friendly and fast</li>
                <li className="flex items-start"><span className="text-brand-cyan font-bold mr-2">✓</span> Contact and inquiry forms</li>
                <li className="flex items-start"><span className="text-brand-cyan font-bold mr-2">✓</span> Service or product listings</li>
              </ul>
            </div>

            {/* Subscription & Membership */}
            <div className="border-2 border-brand-blue/40 bg-gradient-to-br from-white to-brand-blue/5 p-8 rounded-xl hover:shadow-2xl transition-all hover:border-brand-blue hover:scale-[1.02] hover:glow-blue">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-darkblue rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-darkblue mb-3">Subscriptions & Memberships</h3>
              <p className="text-gray-700 mb-4">
                Recurring revenue you can count on. Automated billing, member management, and
                cancellation handling.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start"><span className="text-brand-blue font-bold mr-2">✓</span> Multiple subscription tiers</li>
                <li className="flex items-start"><span className="text-brand-blue font-bold mr-2">✓</span> Automated recurring billing</li>
                <li className="flex items-start"><span className="text-brand-blue font-bold mr-2">✓</span> Member access control</li>
                <li className="flex items-start"><span className="text-brand-blue font-bold mr-2">✓</span> Renewal and cancellation management</li>
              </ul>
            </div>

            {/* Online Payments */}
            <div className="border-2 border-brand-cyan/40 bg-gradient-to-br from-white to-brand-cyan/5 p-8 rounded-xl hover:shadow-2xl transition-all hover:border-brand-cyan hover:scale-[1.02] hover:glow-cyan">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-darkblue mb-3">Online Payments & Billing</h3>
              <p className="text-gray-700 mb-4">
                Accept payments securely through trusted providers. No payment processing risk for
                KhulaNode.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start"><span className="text-brand-cyan font-bold mr-2">✓</span> Secure payment integration</li>
                <li className="flex items-start"><span className="text-brand-cyan font-bold mr-2">✓</span> Multiple payment methods</li>
                <li className="flex items-start"><span className="text-brand-cyan font-bold mr-2">✓</span> Invoice generation</li>
                <li className="flex items-start"><span className="text-brand-cyan font-bold mr-2">✓</span> Payment tracking and history</li>
              </ul>
            </div>

            {/* E-commerce & Orders */}
            <div className="border-2 border-brand-blue/40 bg-gradient-to-br from-white to-brand-blue/5 p-8 rounded-xl hover:shadow-2xl transition-all hover:border-brand-blue hover:scale-[1.02] hover:glow-blue">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-darkblue rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-darkblue mb-3">E-commerce & Orders</h3>
              <p className="text-gray-700 mb-4">
                Sell online. Manage inventory, process orders, and track customer purchases in one
                place.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start"><span className="text-brand-blue font-bold mr-2">✓</span> Product catalog and inventory</li>
                <li className="flex items-start"><span className="text-brand-blue font-bold mr-2">✓</span> Shopping cart and checkout</li>
                <li className="flex items-start"><span className="text-brand-blue font-bold mr-2">✓</span> Order management dashboard</li>
                <li className="flex items-start"><span className="text-brand-blue font-bold mr-2">✓</span> Customer communication</li>
              </ul>
            </div>

            {/* Managed Operations */}
            <div className="border-2 border-brand-darkblue/40 bg-gradient-to-br from-white via-brand-darkblue/5 to-brand-blue/5 p-8 rounded-xl md:col-span-2 hover:shadow-2xl transition-all hover:border-brand-darkblue hover:scale-[1.02]">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-darkblue to-brand-blue rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-darkblue mb-3">Managed Digital Operations</h3>
              <p className="text-gray-700 mb-4">
                We don't just build—we manage. Ongoing support, system monitoring, updates, and scaling.
                You get reliability without the technical work.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start"><span className="text-brand-darkblue font-bold mr-2">✓</span> 24/7 system monitoring and uptime</li>
                <li className="flex items-start"><span className="text-brand-darkblue font-bold mr-2">✓</span> Regular security and performance updates</li>
                <li className="flex items-start"><span className="text-brand-darkblue font-bold mr-2">✓</span> Customer and operational support</li>
                <li className="flex items-start"><span className="text-brand-darkblue font-bold mr-2">✓</span> Data backups and recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-20 bg-gradient-to-br from-white via-brand-blue/5 to-brand-cyan/10">
        <div className="container">
          <h2 className="text-3xl font-bold text-brand-darkblue mb-12">How KhulaNode meets your digital business needs</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan to-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-xl">
                1
              </div>
              <h3 className="font-semibold text-brand-darkblue mb-2 text-lg">Understand</h3>
              <p className="text-gray-700 text-sm">
                We learn about your business, goals, and how you currently operate. No assumptions.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-darkblue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-xl">
                2
              </div>
              <h3 className="font-semibold text-brand-darkblue mb-2 text-lg">Build</h3>
              <p className="text-gray-700 text-sm">
                We design and build your system. Clear, functional, no unnecessary features.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan to-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-xl">
                3
              </div>
              <h3 className="font-semibold text-brand-darkblue mb-2 text-lg">Connect</h3>
              <p className="text-gray-700 text-sm">
                Addons and integrations with trusted providers are made available. Your data stays secure and separate.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-darkblue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-xl">
                4
              </div>
              <h3 className="font-semibold text-brand-darkblue mb-2 text-lg">Manage</h3>
              <p className="text-gray-700 text-sm">
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
