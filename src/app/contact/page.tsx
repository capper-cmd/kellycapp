export const metadata = {
  title: "Contact Kelly | Kelly Capp Real Estate",
  description: "Get in touch with Kelly Capp for all your real estate needs in the Twin Cities metro area.",
};

export default function Contact() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-warm-100 to-sand-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-900">
              Let&apos;s Connect
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you have a question, want to schedule a consultation, or
              are ready to start your home journey, I&apos;m here for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-warm-200 shadow-sm">
                <h3 className="font-serif font-bold text-brand-800 text-lg mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="font-medium text-brand-800">Phone</p>
                      <a
                        href="tel:6122324499"
                        className="text-gray-600 hover:text-brand-600 transition-colors"
                      >
                        (612) 232-4499
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="font-medium text-brand-800">Office</p>
                      <p className="text-gray-600">
                        16211 Turnberry Turn NW
                        <br />
                        Ramsey, MN 55303
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🏢</span>
                    <div>
                      <p className="font-medium text-brand-800">Brokerage</p>
                      <a
                        href="http://www.luketeamrealestate.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-brand-600 transition-colors"
                      >
                        Luke Team Real Estate
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-warm-200 shadow-sm">
                <h3 className="font-serif font-bold text-brand-800 text-lg mb-3">
                  Areas I Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Maple Grove", "Minneapolis", "Plymouth", "Osseo", "Edina", "Ramsey"].map(
                    (area) => (
                      <span
                        key={area}
                        className="px-3 py-1.5 bg-sand-50 border border-sand-200 rounded-full text-xs font-medium text-sand-700"
                      >
                        {area}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 border border-warm-200 shadow-sm">
              <h3 className="font-serif font-bold text-brand-800 text-lg mb-6">
                Send Me a Message
              </h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-warm-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-warm-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 border border-warm-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2.5 border border-warm-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    I&apos;m interested in...
                  </label>
                  <select className="w-full px-4 py-2.5 border border-warm-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors bg-white">
                    <option>Buying a Home</option>
                    <option>Selling My Home</option>
                    <option>Both Buying & Selling</option>
                    <option>Just Have Questions</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 border border-warm-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors resize-none"
                    placeholder="Tell me about what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-md shadow-brand-600/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
