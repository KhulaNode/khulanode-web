export const metadata = {
  title: 'Terms of Service | KhulaNode',
};

export default function Terms() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
        <p className="text-slate-600 mb-12">
          Last updated: January 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Overview</h2>
            <p className="text-slate-600">
              KhulaNode provides digital business systems and managed operational services. These terms
              govern your use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
            <p className="text-slate-600">
              KhulaNode builds and operates custom digital systems for your business, including business
              websites, subscription and membership systems, payment integration, e-commerce platforms, and
              managed operations.
            </p>
            <p className="text-slate-600 mt-3">
              We are not a payment processor, bank, or fintech company. Payments are processed by third-party
              providers that you authorize.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payments and Fees</h2>
            <ul className="space-y-2 text-slate-600">
              <li>• <strong>Setup Fee:</strong> A one-time fee quoted before work begins</li>
              <li>• <strong>Monthly Management Fee:</strong> Recurring fee for ongoing operations and support</li>
              <li>• <strong>No Transaction Fees:</strong> KhulaNode does not charge per transaction</li>
            </ul>
            <p className="text-slate-600 mt-3">
              Invoices are due within 30 days. We reserve the right to suspend services for non-payment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Your Responsibilities</h2>
            <p className="text-slate-600">
              You are responsible for:
            </p>
            <ul className="space-y-2 text-slate-600 mt-3">
              <li>• Providing accurate business information</li>
              <li>• Maintaining secure passwords and access credentials</li>
              <li>• Notifying us of security breaches or unauthorized access</li>
              <li>• Ensuring your use complies with applicable laws</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cancellation and Termination</h2>
            <p className="text-slate-600">
              You may cancel your subscription with 30 days' written notice. Upon cancellation:
            </p>
            <ul className="space-y-2 text-slate-600 mt-3">
              <li>• Your system remains operational through the notice period</li>
              <li>• You may export your data</li>
              <li>• Monthly fees end after the notice period</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data and Ownership</h2>
            <p className="text-slate-600">
              You retain ownership of your business data. KhulaNode maintains your data for service delivery
              and backs up regularly for security and recovery purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-600">
              KhulaNode is not liable for indirect, incidental, or consequential damages. Our liability is
              limited to the fees you paid in the last 12 months.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Payment Processing Disclaimer</h2>
            <p className="text-slate-600">
              Payments are processed securely by third-party payment providers. KhulaNode does not store or
              process credit card or banking details. Payment provider terms apply to all transactions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to Terms</h2>
            <p className="text-slate-600">
              We may update these terms. You'll be notified of material changes, and continued use constitutes
              acceptance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact</h2>
            <p className="text-slate-600">
              Questions about these terms? Contact us at hello@khulanode.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
