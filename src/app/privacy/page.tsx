export const metadata = {
  title: 'Privacy Policy | KhulaNode',
};

export default function Privacy() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-600 mb-12">
          Last updated: January 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600">
              KhulaNode is committed to protecting your privacy. This policy explains how we collect, use, and
              protect your information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 mb-3">We collect information you provide directly:</p>
            <ul className="space-y-2 text-slate-600">
              <li>• Contact information (name, email, phone)</li>
              <li>• Business information (business name, type, location)</li>
              <li>• System data (customer records, orders, subscriptions)</li>
              <li>• Payment and billing information</li>
            </ul>
            <p className="text-slate-600 mt-3">
              We also collect technical information about your system's usage for maintenance and security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600">
              We use your information to:
            </p>
            <ul className="space-y-2 text-slate-600 mt-3">
              <li>• Provide and maintain your system</li>
              <li>• Process payments and billing</li>
              <li>• Communicate about your account and services</li>
              <li>• Monitor system security and performance</li>
              <li>• Improve our services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
            <p className="text-slate-600">
              Your data is encrypted in transit and at rest. We maintain strict access controls and regular
              security updates. However, no system is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Payment Information</h2>
            <p className="text-slate-600">
              Payment processing is handled by third-party providers. KhulaNode does not store or process
              credit card or banking details. Your payment information is governed by the provider's terms and
              privacy policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Data Rights</h2>
            <p className="text-slate-600">
              You have the right to:
            </p>
            <ul className="space-y-2 text-slate-600 mt-3">
              <li>• Access your data</li>
              <li>• Export your data in standard formats</li>
              <li>• Request deletion of your account and data</li>
              <li>• Correct inaccurate information</li>
            </ul>
            <p className="text-slate-600 mt-3">
              Contact us to exercise these rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Third-Party Providers</h2>
            <p className="text-slate-600">
              We use third-party services for payment processing, hosting, and analytics. These providers have
              their own privacy policies and may process your data according to their terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-slate-600">
              We may update this policy periodically. You'll be notified of material changes, and continued use
              constitutes acceptance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact</h2>
            <p className="text-slate-600">
              Questions about your privacy? Contact us at hello@khulanode.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
