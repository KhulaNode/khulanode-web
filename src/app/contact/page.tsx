export const metadata = {
  title: 'Contact | KhulaNode',
  description: "Get in touch. Let's discuss your business and how KhulaNode can help.",
};

export default function Contact() {
  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-cyan/10 via-white to-brand-blue/10">
        <div className="container max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-darkblue mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-700 mb-12">
            Tell us about your business. We'll listen, ask questions, and share how KhulaNode can help.
          </p>

          <form className="space-y-6 bg-white p-8 rounded-xl shadow-xl border-2 border-brand-cyan/20">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-brand-darkblue mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-all"
                placeholder="Jane Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-brand-darkblue mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-all"
                placeholder="jane@yourbusiness.co.za"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-brand-darkblue mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-all"
                placeholder="+27 (0)XX XXX XXXX"
              />
            </div>

            <div>
              <label htmlFor="business" className="block text-sm font-semibold text-brand-darkblue mb-2">
                Business Name
              </label>
              <input
                type="text"
                id="business"
                name="business"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-all"
                placeholder="Your Business"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-semibold text-brand-darkblue mb-2">
                What are you most interested in?
              </label>
              <select
                id="interest"
                name="interest"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-all bg-white"
              >
                <option value="">Select an option</option>
                <option value="website">Business Website</option>
                <option value="subscriptions">Subscriptions & Memberships</option>
                <option value="payments">Online Payments</option>
                <option value="ecommerce">E-commerce & Orders</option>
                <option value="operations">Managed Digital Operations</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-brand-darkblue mb-2">
                Tell us about your business
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-all resize-none"
                placeholder="What do you do? What problems are you trying to solve? What's your current situation?"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all shadow-lg"
            >
              Send Message
            </button>

            <p className="text-xs text-gray-600 text-center">
              We'll get back to you within 24 hours during business hours.
            </p>
          </form>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-brand-cyan/5 to-brand-blue/10">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-darkblue mb-8">Other ways to connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl border-2 border-brand-cyan/40 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-brand-darkblue mb-2">Email</h3>
              <p className="text-gray-700">
                <a href="mailto:hello@khulanode.com" className="text-brand-cyan hover:text-brand-blue font-semibold transition-colors">
                  hello@khulanode.com
                </a>
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border-2 border-brand-blue/40 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-darkblue rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-brand-darkblue mb-2">Location</h3>
              <p className="text-gray-700">South Africa</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
