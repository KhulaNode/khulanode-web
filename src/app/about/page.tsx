import Link from 'next/link';

export const metadata = {
  title: 'About KhulaNode | Trusted digital systems for small businesses',
  description: 'Built for small businesses. Practical, systems-driven. Emphasis on reliability and long-term support.',
};

export default function About() {
  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">About KhulaNode</h1>

          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">We're built for South Africa</h2>
              <p className="text-slate-600 leading-relaxed">
                KhulaNode exists because small businesses in South Africa face a real problem: the tools
                available are either too expensive, too complex, or too American. Payment systems assume
                you have a corporate IT team. E-commerce platforms charge per transaction on top of setup
                costs. Subscription management isn't available at all, except through expensive enterprise
                software.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What we do</h2>
              <p className="text-slate-600 leading-relaxed">
                We build and operate digital business systems. That means we take responsibility for your
                system's reliability, security, and growth. When you work with KhulaNode:
              </p>
              <ul className="space-y-3 text-slate-600 mt-4">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">—</span>
                  <span>We understand your business before we build</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">—</span>
                  <span>We design systems that fit your needs, not the other way around</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">—</span>
                  <span>We manage it daily—updates, security, monitoring, support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">—</span>
                  <span>You're not a customer number. You get direct support from people who know your business</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How we work</h2>
              <p className="text-slate-600 leading-relaxed">
                Our approach is practical, not flashy. We don't promise rocket growth or AI magic. What we do
                promise is:
              </p>
              <ul className="space-y-3 text-slate-600 mt-4">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span><strong>Reliability:</strong> Your system works when your customers need it to</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span><strong>Security:</strong> Your data and your customers' data are protected</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span><strong>Transparency:</strong> You know exactly what you're paying and why</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span><strong>Growth:</strong> As your business scales, your system scales with you</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What we're not</h2>
              <ul className="space-y-2 text-slate-600">
                <li>✗ A fintech company or payment processor</li>
                <li>✗ A no-code platform where you build it yourself</li>
                <li>✗ A marketplace connecting you with freelancers</li>
                <li>✗ A SaaS that disappears after payment</li>
              </ul>
              <p className="text-slate-600 mt-4">
                We're software architects and operators. We take responsibility for your system's success.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why trust us?</h2>
              <p className="text-slate-600 leading-relaxed">
                Because we've been building business systems for years. We understand the problems you face.
                We know payment processing, subscription management, security, and the friction of scaling.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                And because our business model depends on your success. The longer you use us, the more your
                business grows, the better we do. We're not trying to squeeze one transaction out of you and
                disappear. We're here to build a long-term relationship.
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="mt-12 p-8 bg-slate-50 rounded">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Leadership</h3>
            <div>
              <p className="font-semibold text-slate-900">KhulaNode</p>
              <p className="text-slate-600 text-sm">Founder & Platform Operator</p>
              <p className="text-slate-600 text-sm mt-2">
                Building digital infrastructure for businesses across South Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to build with us?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's talk about your business. We'll listen first, then design something that works.
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
