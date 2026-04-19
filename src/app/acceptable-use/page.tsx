import Link from 'next/link';

export const metadata = {
  title: 'Acceptable Use Policy | KhulaNode',
  description: "KhulaNode's Acceptable Use Policy explains the permitted and prohibited use of our managed websites, e-commerce systems, and digital business services.",
};

export default function AcceptableUse() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Acceptable Use Policy</h1>
        <p className="text-slate-600 mb-4">
          Effective date: April 2026
        </p>
        <p className="text-slate-600 mb-12">
          <a 
            href="/legal/KhulaNode_Acceptable_Use_Policy.pdf" 
            className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
            download
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF version
          </a>
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-600">
              KhulaNode provides managed digital services for legitimate business use. This Acceptable Use 
              Policy explains the standards that apply to customers using our websites, systems, hosting, 
              e-commerce, subscription, and related digital services.
            </p>
            <p className="text-slate-600 mt-3">
              By using KhulaNode services, you agree to comply with this policy. Violations may result in 
              service suspension, termination, or legal action.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Purpose</h2>
            <p className="text-slate-600">
              This policy exists to:
            </p>
            <ul className="space-y-2 text-slate-600 mt-3">
              <li>• Protect KhulaNode, our customers, and the public from harmful or illegal conduct</li>
              <li>• Maintain the security, integrity, and reliability of our services</li>
              <li>• Ensure compliance with applicable laws and third-party provider requirements</li>
              <li>• Foster trust in the digital systems we build and operate</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Scope</h2>
            <p className="text-slate-600">
              This policy applies to all customers and users of KhulaNode services, including but not limited to:
            </p>
            <ul className="space-y-2 text-slate-600 mt-3">
              <li>• Managed business websites</li>
              <li>• E-commerce platforms and storefronts</li>
              <li>• Subscription and membership systems</li>
              <li>• Payment-enabled services and checkout systems</li>
              <li>• Hosting, domain, and infrastructure services</li>
              <li>• Custom digital business systems and managed operations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Permitted Use</h2>
            <p className="text-slate-600">
              KhulaNode services may be used for lawful commercial purposes, including:
            </p>
            <ul className="space-y-2 text-slate-600 mt-3">
              <li>• Operating legitimate businesses and organizations</li>
              <li>• Selling physical or digital goods and services</li>
              <li>• Providing subscription-based content or memberships</li>
              <li>• Processing payments for authorized business activities</li>
              <li>• Communicating with customers and managing business operations</li>
            </ul>
            <p className="text-slate-600 mt-3">
              All use must comply with applicable laws and regulations in your jurisdiction and ours.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Prohibited Use</h2>
            <p className="text-slate-600 mb-4">
              You may not use KhulaNode services for any of the following:
            </p>

            <div className="ml-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">4.1 Illegal Activity</h3>
                <p className="text-slate-600">
                  Any activity that violates laws or regulations, including fraud, money laundering, 
                  terrorism financing, drug trafficking, weapons sales, human trafficking, or any other 
                  criminal conduct.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">4.2 Fraud and Deception</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Deceptive marketing or false advertising</li>
                  <li>• Phishing, identity theft, or impersonation</li>
                  <li>• Pyramid schemes, multi-level marketing scams, or get-rich-quick schemes</li>
                  <li>• Counterfeit goods or intellectual property infringement</li>
                  <li>• Misleading payment or subscription practices</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">4.3 Harmful or Abusive Content</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Content promoting violence, hate speech, or discrimination</li>
                  <li>• Sexually explicit or adult content without proper age verification and legal compliance</li>
                  <li>• Content exploiting minors in any way</li>
                  <li>• Harassment, bullying, or threatening behavior</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">4.4 Spam and Abusive Communications</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Sending unsolicited bulk emails or messages</li>
                  <li>• Operating email or SMS spam services</li>
                  <li>• Harvesting email addresses or contact information without consent</li>
                  <li>• Using our services to distribute malware or malicious links</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">4.5 Malware, Interference, and Unauthorized Access</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Distributing viruses, malware, or harmful code</li>
                  <li>• Attempting to gain unauthorized access to systems or data</li>
                  <li>• Interfering with or disrupting KhulaNode services or networks</li>
                  <li>• Reverse engineering or circumventing security measures</li>
                  <li>• Excessive automated requests that burden our infrastructure</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">4.6 High-Risk or Restricted Business Categories</h3>
                <p className="text-slate-600 mb-2">
                  The following business types are prohibited or restricted by our payment and service providers:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• Gambling, betting, or lottery services (unless properly licensed and pre-approved)</li>
                  <li>• Cryptocurrency exchanges or trading platforms</li>
                  <li>• Adult entertainment or sexually explicit services</li>
                  <li>• Tobacco, vaping products, or controlled substances</li>
                  <li>• Firearms, ammunition, or weapons</li>
                  <li>• Payday loans or high-interest lending</li>
                  <li>• Any business category restricted by Paystack or other providers we use</li>
                </ul>
                <p className="text-slate-600 mt-2">
                  If you operate in a regulated or restricted category, contact us before signing up.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">4.7 Misuse of Payment-Enabled Services</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Processing payments for prohibited goods or services</li>
                  <li>• Facilitating transactions you know to be fraudulent or unauthorized</li>
                  <li>• Structuring transactions to evade detection or reporting requirements</li>
                  <li>• Operating payment services without proper business authorization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">4.8 Intellectual Property and Rights Infringement</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Violating copyright, trademark, or patent rights</li>
                  <li>• Selling counterfeit or pirated products</li>
                  <li>• Using content, images, or branding without proper authorization</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Customer Responsibility</h2>
            <p className="text-slate-600">
              You are responsible for:
            </p>
            <ul className="space-y-2 text-slate-600 mt-3">
              <li>• Ensuring your business and activities comply with all applicable laws</li>
              <li>• Accurately representing your business and offerings to customers</li>
              <li>• Monitoring user-generated content on your systems</li>
              <li>• Responding promptly to customer disputes, chargebacks, or complaints</li>
              <li>• Maintaining secure passwords and preventing unauthorized account access</li>
              <li>• Notifying KhulaNode immediately of suspected security breaches or policy violations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Monitoring and Enforcement</h2>
            <p className="text-slate-600">
              KhulaNode reserves the right to:
            </p>
            <ul className="space-y-2 text-slate-600 mt-3">
              <li>• Monitor usage of our services for compliance with this policy</li>
              <li>• Investigate suspected violations and request additional information</li>
              <li>• Suspend or terminate services immediately for serious violations</li>
              <li>• Report illegal activity to law enforcement or regulatory authorities</li>
              <li>• Cooperate with legal investigations and court orders</li>
            </ul>
            <p className="text-slate-600 mt-3">
              We do not pre-screen all customer content, but we may review systems when violations are 
              reported or detected.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Third-Party Providers</h2>
            <p className="text-slate-600">
              KhulaNode uses third-party providers for payment processing, hosting, and infrastructure. 
              Your use of our services is also subject to the acceptable use policies and terms of these 
              providers, including:
            </p>
            <ul className="space-y-2 text-slate-600 mt-3">
              <li>• Paystack (payment processing)</li>
              <li>• Hosting and cloud infrastructure providers</li>
              <li>• Domain registrars and DNS services</li>
            </ul>
            <p className="text-slate-600 mt-3">
              Violations of third-party provider policies may result in service restrictions or termination.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Reporting Violations</h2>
            <p className="text-slate-600">
              If you become aware of conduct that violates this policy, please report it to us immediately 
              via our contact page or email.
            </p>
            <p className="text-slate-600 mt-3">
              We take reports seriously and investigate all credible claims. We may not be able to share 
              specific details of enforcement actions for privacy and security reasons.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-slate-600">
              We may update this Acceptable Use Policy from time to time. Material changes will be 
              communicated to active customers, and continued use of our services constitutes acceptance 
              of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact</h2>
            <p className="text-slate-600">
              Questions or concerns about this Acceptable Use Policy? Contact us at:
            </p>
            <p className="text-slate-600 mt-3">
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                khulanode.com/contact
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
