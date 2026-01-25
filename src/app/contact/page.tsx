export const metadata = {
  title: 'Contact | KhulaNode',
  description: "Get in touch. Let's discuss your business and how KhulaNode can help.",
};

export default function Contact() {
  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-600 mb-12">
            Tell us about your business. We'll listen, ask questions, and share how KhulaNode can help.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Jane Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="jane@yourbusiness.co.za"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="+27 (0)XX XXX XXXX"
              />
            </div>

            <div>
              <label htmlFor="business" className="block text-sm font-medium text-slate-900 mb-2">
                Business Name
              </label>
              <input
                type="text"
                id="business"
                name="business"
                className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Your Business"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-slate-900 mb-2">
                What are you most interested in?
              </label>
              <select
                id="interest"
                name="interest"
                className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
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
              <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                Tell us about your business
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
                placeholder="What do you do? What problems are you trying to solve? What's your current situation?"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-teal-600 text-white rounded font-medium hover:bg-teal-700 transition-colors"
            >
              Send Message
            </button>

            <p className="text-xs text-slate-500 text-center">
              We'll get back to you within 24 hours during business hours.
            </p>
          </form>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Other ways to connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600">
                <a href="mailto:hello@khulanode.com" className="text-teal-600 hover:text-teal-700">
                  hello@khulanode.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600">South Africa</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
