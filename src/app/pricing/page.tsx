import Link from 'next/link';

export const metadata = {
  title: 'Pricing | KhulaNode',
  description: 'Simple, transparent pricing. Setup fee and monthly management—no transaction fees.',
};

export default function Pricing() {
  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl">
            No hidden fees. No transaction charges. You know exactly what you're paying.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {/* Setup Fee */}
            <div className="p-8 bg-slate-50 rounded border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Setup & Build</h2>
              <p className="text-slate-600 mb-6 text-sm">
                One-time fee to design and build your system
              </p>
              <p className="text-4xl font-bold text-teal-600 mb-6">R5,000+</p>
              <ul className="space-y-3 text-sm text-slate-600 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">✓</span>
                  <span>System design and planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">✓</span>
                  <span>Build your custom system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">✓</span>
                  <span>Payment integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">✓</span>
                  <span>Initial training and setup</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500">Price varies based on complexity</p>
            </div>

            {/* Monthly Fee */}
            <div className="p-8 bg-white rounded border-2 border-teal-600">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Monthly Management</h2>
              <p className="text-slate-600 mb-6 text-sm">
                Ongoing maintenance, support, and scaling
              </p>
              <p className="text-4xl font-bold text-teal-600 mb-6">R1,500–R5,000</p>
              <ul className="space-y-3 text-sm text-slate-600 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">✓</span>
                  <span>24/7 system monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">✓</span>
                  <span>Security and performance updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">✓</span>
                  <span>Data backups and recovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">✓</span>
                  <span>Email and chat support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">✓</span>
                  <span>Feature updates and improvements</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500">Tier depends on system complexity</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What you don't pay for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">No Transaction Fees</h3>
              <p className="text-slate-600 text-sm">
                You don't pay KhulaNode per transaction. Payments go to your provider. We don't take a cut.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">No Setup Hidden Costs</h3>
              <p className="text-slate-600 text-sm">
                Setup fee is quoted upfront. No surprise charges. You know the total before we start.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">No Lock-In</h3>
              <p className="text-slate-600 text-sm">
                Cancel anytime with 30 days' notice. We don't own your data. You can export and move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's discuss your needs</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Every business is different. Tell us what you're building, and we'll provide a custom quote.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-teal-600 text-white rounded font-medium hover:bg-teal-700 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
