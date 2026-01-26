import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-brand-darkblue via-brand-gray to-brand-darkblue text-white py-12 mt-16 border-t-4 border-brand-cyan">
      <div className="container">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4 text-lg text-brand-cyan">KhulaNode</h3>
            <p className="text-gray-200 text-sm">
              Digital business systems for small businesses. Built in South Africa.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-brand-cyan">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link href="/solutions/business-websites" className="hover:text-brand-cyan transition-colors hover:underline">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link href="/solutions/subscriptions" className="hover:text-brand-cyan transition-colors hover:underline">
                  Subscriptions & Memberships
                </Link>
              </li>
              <li>
                <Link href="/solutions/managed-operations" className="hover:text-brand-cyan transition-colors hover:underline">
                  Managed Operations
                </Link>
              </li>
              <li>
                <Link href="/solutions/ecommerce" className="hover:text-brand-cyan transition-colors hover:underline">
                  E-commerce
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-brand-cyan">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link href="/terms" className="hover:text-brand-cyan transition-colors hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand-cyan transition-colors hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refunds" className="hover:text-brand-cyan transition-colors hover:underline">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-cyan transition-colors hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-brand-cyan/40 pt-8">
          {/* Payment disclaimer */}
          <div className="mb-8 p-4 bg-brand-blue/20 rounded-lg text-xs text-gray-100 border-2 border-brand-cyan/40 shadow-lg">
            <p className="font-semibold text-white mb-2 text-brand-cyan">Payment Security Notice</p>
            <p>
              Payments are processed securely by third-party payment providers. KhulaNode does not
              store or process card or banking details.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-300">
            <p>&copy; {currentYear} KhulaNode. All rights reserved.</p>
            <p>Trusted by small businesses across South Africa.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
