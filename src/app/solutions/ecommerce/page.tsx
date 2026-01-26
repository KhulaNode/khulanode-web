import Link from 'next/link';

export const metadata = {
  title: 'E-commerce Solutions | KhulaNode',
  description: 'Complete online store systems. Product catalog, checkout, payments, inventory, and order management.',
};

export default function Ecommerce() {
  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-brand-blue/10 rounded-full text-brand-blue text-sm font-medium mb-4">
              E-commerce Business Package
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">
              E-commerce & Online Stores
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Sell online with a complete store system. Product catalog, secure checkout, 
              payment processing, inventory management, and order fulfillment—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-block px-8 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                Get Started - R2000 Setup
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 border-2 border-brand-blue text-brand-darkblue rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-all"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-blue mb-2">R2000</div>
              <div className="text-sm text-gray-600">One-time Setup</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-cyan mb-2">R1200/mo</div>
              <div className="text-sm text-gray-600">Monthly Management</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-darkblue mb-2">15</div>
              <div className="text-sm text-gray-600">Change Requests/Month</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-gray mb-4 text-center">
              Everything in Standard Package, Plus
            </h2>
            <p className="text-gray-600 mb-12 text-center">
              Complete e-commerce functionality for selling online.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Online Store</h3>
                  <p className="text-sm text-gray-600">Complete storefront with product pages</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Product Catalogue</h3>
                  <p className="text-sm text-gray-600">Unlimited products with images, descriptions, variants</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Checkout & Payment Gateway</h3>
                  <p className="text-sm text-gray-600">Secure checkout with multiple payment methods</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Inventory Basics</h3>
                  <p className="text-sm text-gray-600">Track stock levels and manage products</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Digital Products</h3>
                  <p className="text-sm text-gray-600">Sell downloadable products and services</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Invoicing & Receipts</h3>
                  <p className="text-sm text-gray-600">Automatic invoice generation and email receipts</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Facebook / Instagram Store Sync</h3>
                  <p className="text-sm text-gray-600">Sell on social media platforms</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">User Accounts</h3>
                  <p className="text-sm text-gray-600">Customer profiles with order history</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Shipping Fees Setup</h3>
                  <p className="text-sm text-gray-600">Configurable shipping rates and zones</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">Order Dashboard</h3>
                  <p className="text-sm text-gray-600">Manage orders, track fulfillment, update status</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-darkblue mb-1">15 Change Requests Per Month</h3>
                  <p className="text-sm text-gray-600">More support for your growing store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-darkblue via-brand-blue to-brand-cyan text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start selling online?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Get your complete e-commerce system or build a custom package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-block px-8 py-3 bg-white text-brand-darkblue rounded-lg font-semibold hover:bg-gray-100 hover:shadow-xl transition-all"
            >
              Build Your Package
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
