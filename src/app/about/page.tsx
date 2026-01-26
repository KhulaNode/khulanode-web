import Link from 'next/link';

export const metadata = {
  title: 'About KhulaNode | Trusted digital systems for small businesses',
  description: 'Built for small businesses. Practical, systems-driven. Emphasis on reliability and long-term support.',
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-cyan/10 via-white to-brand-blue/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darkblue/5 to-transparent"></div>
        <div className="container max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-darkblue mb-6">Built for South African businesses</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Digital systems that work. No complexity. No corporate pricing. Just reliable tools built to help your business grow.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-gradient-to-br from-white to-brand-cyan/5 border-2 border-brand-cyan/40 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-darkblue mb-3">We Build & Manage</h3>
              <p className="text-gray-700 leading-relaxed">
                Custom digital systems designed for your business. We don't hand you software—we build it, run it, and keep it working.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-gradient-to-br from-white to-brand-blue/5 border-2 border-brand-blue/40 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-darkblue rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-darkblue mb-3">Built for South Africa</h3>
              <p className="text-gray-700 leading-relaxed">
                Local pricing, local support, local payment systems. No overseas fees, no timezone delays, no American assumptions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-gradient-to-br from-white to-brand-cyan/5 border-2 border-brand-cyan/40 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-darkblue mb-3">Secure & Reliable</h3>
              <p className="text-gray-700 leading-relaxed">
                24/7 monitoring, automated backups, secure payment integration. Your system works when your customers need it.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 bg-gradient-to-br from-white to-brand-blue/5 border-2 border-brand-blue/40 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-darkblue rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-darkblue mb-3">Scales With You</h3>
              <p className="text-gray-700 leading-relaxed">
                Start small, grow big. Add features as you need them. No platform limits, no surprise charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-brand-cyan/5 to-brand-blue/10">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-brand-darkblue mb-8 text-center">Our Promise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkblue mb-1">Reliability First</h4>
                <p className="text-gray-700 text-sm">Your system works when your customers need it</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkblue mb-1">Direct Support</h4>
                <p className="text-gray-700 text-sm">Talk to people who know your system</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-darkblue rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkblue mb-1">Transparent Pricing</h4>
                <p className="text-gray-700 text-sm">Know exactly what you're paying for</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-darkblue rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-brand-darkblue mb-1">Long-Term Partner</h4>
                <p className="text-gray-700 text-sm">We succeed when you succeed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Not */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-brand-darkblue mb-8 text-center">What We're Not</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-brand-cyan text-2xl font-bold">✗</span>
              <span className="text-gray-700">A payment processor</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-brand-cyan text-2xl font-bold">✗</span>
              <span className="text-gray-700">A DIY platform</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-brand-cyan text-2xl font-bold">✗</span>
              <span className="text-gray-700">A freelancer marketplace</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-brand-cyan text-2xl font-bold">✗</span>
              <span className="text-gray-700">Generic SaaS software</span>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-8 text-lg">
            We're <span className="font-bold text-brand-darkblue">software architects and operators</span>. We build it, we run it, we own the outcome.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-darkblue via-brand-blue to-brand-cyan text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build with us?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Let's talk about your business. We'll listen first, then design something that works.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-brand-darkblue rounded-lg font-semibold hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
