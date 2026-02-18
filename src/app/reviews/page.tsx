import Link from "next/link";

export const metadata = {
  title: "Reviews | Kelly Capp Real Estate",
  description: "Read what clients say about working with Kelly Capp.",
};

export default function Reviews() {
  const reviews = [
    {
      name: "Thomas + Sara O.",
      location: "Maple Grove, MN",
      date: "June 2016",
      rating: 5,
      text: "To say Kelly knows what she's doing is truly an understatement!! Kelly definitely does whatever she needs in order to get the job done! She is on top of every detail on a level that this field is not familiar with, in order to produce excellent results at each and every turn! After this experience, Kelly is the only real estate agent I would feel comfortable going through for all our future needs! She is brilliant and bold, funny and full of grace...absolutely a star in this career! Kelly gets our highest recommendation!!!!!!",
      type: "Buyer",
    },
    {
      name: "Elena Ebert",
      location: "",
      date: "",
      rating: 5,
      text: "Kelly has great personality that makes her a great realtor. She is sharp, excellent communicator, great negotiator. She supports you throughout the process (that could be stressful by nature). She is always on top, on time and has positive attitude. I would work with Kelly again.",
      type: "Testimonial",
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-warm-100 to-sand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-900">
              Client Reviews
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Don&apos;t just take my word for it. Here&apos;s what my clients
              have to say.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="text-3xl font-serif font-bold text-brand-700">5.0</div>
              <div className="text-2xl">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div className="space-y-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 border border-warm-200 shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif font-bold text-brand-800">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {[review.location, review.date].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-sand-50 text-sand-700 text-xs font-medium rounded-full border border-sand-200">
                    {review.type}
                  </span>
                </div>
                <div className="text-brand-500 mb-3">{"⭐".repeat(review.rating)}</div>
                <p className="text-gray-600 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">
              Had a great experience? I&apos;d love to hear about it!
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
            >
              Leave a Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
