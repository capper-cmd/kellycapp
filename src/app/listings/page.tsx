import Link from "next/link";

export const metadata = {
  title: "Listings | Kelly Capp Real Estate",
  description: "Browse current listings and recent sales from Kelly Capp in the Twin Cities area.",
};

export default function Listings() {
  const activeListings = [
    {
      address: "Salish St NW",
      city: "Saint Francis",
      state: "MN",
      zip: "55070",
      price: "$130,000",
      type: "Land",
      details: "6.52 acre lot",
      status: "For Sale",
    },
  ];

  const recentSales = [
    { address: "5910 Pineview Ln N", city: "Plymouth", price: "$455,000", beds: 4, baths: 2, sqft: "2,094", date: "Oct 2025" },
    { address: "8460 Fairchild Ave", city: "Mounds View", price: "$349,700", beds: 3, baths: 2, sqft: "1,962", date: "Nov 2025" },
    { address: "826 N McKay Ave NE", city: "Alexandria", price: "$340,000", beds: 3, baths: 3, sqft: "2,843", date: "May 2024" },
    { address: "5505 Orleans Ln N Apt 5", city: "Plymouth", price: "$205,000", beds: 2, baths: 1, sqft: "1,008", date: "Nov 2025" },
    { address: "4101 Parklawn Ave Apt 232", city: "Edina", price: "$85,000", beds: 1, baths: 1, sqft: "760", date: "Oct 2025" },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-warm-100 to-sand-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-900">
              Listings
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Current properties for sale and homes I&apos;ve recently helped
              buy and sell.
            </p>
          </div>

          {/* Active Listings */}
          <h2 className="text-2xl font-serif font-bold text-brand-800 mb-6">
            🏠 Active Listings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {activeListings.map((listing) => (
              <div
                key={listing.address}
                className="bg-white rounded-xl overflow-hidden border border-warm-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-brand-50 p-4 border-b border-warm-200">
                  <span className="px-3 py-1 bg-brand-600 text-white text-xs font-bold rounded-full">
                    {listing.status}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-2xl font-serif font-bold text-brand-700">
                    {listing.price}
                  </div>
                  <p className="font-medium text-brand-800 mt-1">
                    {listing.address}
                  </p>
                  <p className="text-sm text-gray-500">
                    {listing.city}, {listing.state} {listing.zip}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">{listing.details}</p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
                  >
                    Interested? Contact me →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Sales */}
          <h2 className="text-2xl font-serif font-bold text-brand-800 mb-6">
            ✅ Recent Sales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentSales.map((sale) => (
              <div
                key={sale.address}
                className="bg-white rounded-xl p-5 border border-warm-200 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xl font-serif font-bold text-sand-700">
                    {sale.price}
                  </div>
                  <span className="px-2 py-0.5 bg-sand-50 text-sand-700 text-xs rounded-full font-medium border border-sand-200">
                    Sold
                  </span>
                </div>
                <p className="text-sm font-medium text-brand-800">
                  {sale.address}
                </p>
                <p className="text-sm text-gray-500">{sale.city}, MN</p>
                <div className="mt-3 flex gap-3 text-xs text-gray-500">
                  <span>{sale.beds} bed</span>
                  <span>{sale.baths} bath</span>
                  <span>{sale.sqft} sqft</span>
                </div>
                <p className="mt-2 text-xs text-gray-400">{sale.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold">
            Don&apos;t See What You&apos;re Looking For?
          </h2>
          <p className="mt-3 text-warm-200">
            I have access to the full MLS and can find properties that match
            exactly what you need.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-white text-brand-800 font-semibold rounded-lg hover:bg-warm-100 transition-colors"
          >
            Tell Me What You Want
          </Link>
        </div>
      </section>
    </div>
  );
}
