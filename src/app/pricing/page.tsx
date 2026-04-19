import PricingCalculator from '@/components/PricingCalculator';

export const metadata = {
  title: 'Managed Website & E-commerce Pricing | KhulaNode',
  description: 'Professional managed websites, e-commerce systems, and digital business infrastructure. Transparent pricing with one-time setup fees and monthly management. Hosting, support, and ongoing care included.',
};

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Managed Service Introduction Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Managed Website & E-commerce Pricing
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            KhulaNode provides managed websites, e-commerce systems, and digital business 
            infrastructure for businesses that want real support, not just software. Our 
            pricing combines a one-time setup fee with ongoing monthly management, so your 
            systems stay maintained, supported, and operational.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Setup and implementation</h3>
                <p className="text-gray-600 text-sm">Complete build and configuration of your digital systems</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Hosting and uptime care</h3>
                <p className="text-gray-600 text-sm">Reliable infrastructure and monitoring included</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Ongoing updates and support</h3>
                <p className="text-gray-600 text-sm">Regular maintenance and responsive assistance</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Transparent pricing</h3>
                <p className="text-gray-600 text-sm">Clear costs with no hidden surprises</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Calculate Your Pricing
            </h2>
            <p className="text-gray-600 mb-6">
              Use our pricing calculator below to estimate your setup and monthly management costs 
              based on your specific needs. All quotes are customizable and subject to final review.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <PricingCalculator />
    </div>
  );
}
