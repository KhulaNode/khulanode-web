import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-gray text-white py-12 mt-16">
      <div className="container">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4 text-lg">KhulaNode</h3>
            <p className="text-gray-300 text-sm">
              Digital business systems for small businesses. Built in South Africa.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-brand-cyan transition-colors">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-cyan transition-colors">
                  Subscriptions & Memberships
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-cyan transition-colors">
                  Online Payments
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-cyan transition-colors">
                  E-commerce
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/terms" className="hover:text-brand-cyan transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refunds" className="hover:text-brand-cyan transition-colors">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-8">
          {/* Payment disclaimer */}
          <div className="mb-8 p-4 bg-gray-700/50 rounded-lg text-xs text-gray-300 border border-brand-blue/30">
            <p className="font-semibold text-white mb-2">Payment Security Notice</p>
            <p>
              Payments are processed securely by third-party payment providers. KhulaNode does not
              store or process card or banking details.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
            <p>&copy; {currentYear} KhulaNode. All rights reserved.</p>
            <p>Trusted by small businesses across South Africa.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
