import Link from "next/link";

export const metadata = {
  title: "Seller Resources | Kelly Capp Real Estate",
  description: "Get the most for your home with Kelly Capp. Expert pricing, marketing, and negotiation.",
};

export default function Sellers() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-warm-100 to-sand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-900">
            Selling Your Home
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your home deserves the best representation. I&apos;ll help you
            price it right, market it effectively, and negotiate the best deal.
          </p>
        </div>
      </section>

      {/* What I Do for Sellers */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-brand-900 text-center mb-14">
            My Approach to Selling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "Market Analysis",
                desc: "I'll provide a detailed comparative market analysis to price your home competitively and attract serious buyers.",
              },
              {
                icon: "📸",
                title: "Professional Marketing",
                desc: "High-quality photos, virtual tours, and strategic online marketing to showcase your home at its best.",
              },
              {
                icon: "🏡",
                title: "Staging Guidance",
                desc: "Tips and advice on how to prepare your home to make the strongest first impression on buyers.",
              },
              {
                icon: "📢",
                title: "Maximum Exposure",
                desc: "Your listing gets featured on MLS, Realtor.com, Zillow, and social media to reach the widest audience.",
              },
              {
                icon: "🤝",
                title: "Expert Negotiation",
                desc: "I advocate fiercely for your interests and work to get you the best possible price and terms.",
              },
              {
                icon: "📋",
                title: "Smooth Closing",
                desc: "I handle the details from offer to closing so you can focus on your next chapter.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-warm-200 shadow-sm"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-serif font-bold text-brand-800">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prep Checklist */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-brand-900 text-center mb-6">
            Home Prep Checklist
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Get your home ready to impress buyers from the moment they walk in.
          </p>
          <div className="bg-white rounded-xl p-8 border border-warm-200 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Declutter and depersonalize rooms",
                "Deep clean the entire home",
                "Touch up paint and fix minor repairs",
                "Improve curb appeal (landscaping, front door)",
                "Clean windows inside and out",
                "Organize closets and storage areas",
                "Make sure all lights work",
                "Consider professional staging",
                "Gather home documents (warranties, permits)",
                "Plan for showings (pets, schedules)",
              ].map((item) => (
                <label key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 text-sand-500">☐</span>
                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sales */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-brand-900 text-center mb-6">
            Recent Sales
          </h2>
          <p className="text-center text-gray-600 mb-10">
            A sample of homes I&apos;ve recently helped sell.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { address: "5910 Pineview Ln N", city: "Plymouth", price: "$455K", beds: 4, baths: 2, sqft: "2,094" },
              { address: "8460 Fairchild Ave", city: "Mounds View", price: "$349.7K", beds: 3, baths: 2, sqft: "1,962" },
              { address: "826 N McKay Ave NE", city: "Alexandria", price: "$340K", beds: 3, baths: 3, sqft: "2,843" },
              { address: "5505 Orleans Ln N", city: "Plymouth", price: "$205K", beds: 2, baths: 1, sqft: "1,008" },
              { address: "4101 Parklawn Ave", city: "Edina", price: "$85K", beds: 1, baths: 1, sqft: "760" },
            ].map((sale) => (
              <div
                key={sale.address}
                className="bg-white rounded-xl p-5 border border-warm-200 shadow-sm"
              >
                <div className="text-lg font-serif font-bold text-brand-700">{sale.price}</div>
                <p className="text-sm font-medium text-brand-800 mt-1">{sale.address}</p>
                <p className="text-sm text-gray-500">{sale.city}, MN</p>
                <div className="mt-3 flex gap-3 text-xs text-gray-500">
                  <span>{sale.beds} bed</span>
                  <span>{sale.baths} bath</span>
                  <span>{sale.sqft} sqft</span>
                </div>
                <span className="inline-block mt-3 px-2 py-0.5 bg-sand-50 text-sand-700 text-xs rounded-full font-medium border border-sand-200">
                  Sold
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold">
            Thinking About Selling?
          </h2>
          <p className="mt-3 text-warm-200">
            Let me show you what your home is worth with a free market analysis.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-white text-brand-800 font-semibold rounded-lg hover:bg-warm-100 transition-colors"
          >
            Request a Free CMA
          </Link>
        </div>
      </section>
    </div>
  );
}
