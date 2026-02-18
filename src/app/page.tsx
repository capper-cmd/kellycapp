import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-warm-100 via-warm-50 to-sand-50 pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sand-600 font-medium text-sm uppercase tracking-wider mb-3">
                Maple Grove &middot; Minneapolis &middot; Twin Cities
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-900 leading-tight">
                Finding Your <br />
                <span className="text-brand-600">Perfect Home</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
                With over 23 years of experience, I bring the knowledge,
                dedication, and personal touch that makes buying or selling your
                home a smooth and rewarding experience.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors text-center shadow-md shadow-brand-600/20"
                >
                  Let&apos;s Talk
                </Link>
                <Link
                  href="/listings"
                  className="px-6 py-3 border-2 border-brand-300 text-brand-800 font-semibold rounded-lg hover:bg-brand-50 transition-colors text-center"
                >
                  View Listings
                </Link>
              </div>
            </div>

            {/* Headshot */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-200/40 rounded-2xl rotate-3" />
                <Image
                  src="/kelly-headshot.webp"
                  alt="Kelly Capp - Real Estate Agent"
                  width={360}
                  height={500}
                  className="relative rounded-2xl shadow-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "23+", label: "Years Experience" },
              { value: "5.0", label: "Star Rating" },
              { value: "$85K-$455K", label: "Price Range" },
              { value: "3", label: "Cities Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold font-serif">
                  {stat.value}
                </div>
                <div className="text-warm-300 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-900">
              How I Can Help
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re buying your first home or selling one
              you&apos;ve loved for years, I&apos;m here to guide you every step
              of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Buying a Home",
                desc: "From finding the right neighborhood to negotiating the best price, I make the buying process easy and exciting.",
                link: "/buyers",
              },
              {
                icon: "💰",
                title: "Selling Your Home",
                desc: "I help you get the most for your home with expert pricing, staging advice, and strategic marketing.",
                link: "/sellers",
              },
              {
                icon: "🤝",
                title: "Personal Touch",
                desc: "Real estate is personal. I treat every client like family and stay with you from start to finish.",
                link: "/about",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.link}
                className="group bg-white rounded-xl p-8 shadow-sm border border-warm-200 hover:shadow-md hover:border-brand-300 transition-all"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-serif font-bold text-brand-800 group-hover:text-brand-600 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6 text-sand-300">&ldquo;</div>
          <blockquote className="text-xl sm:text-2xl font-serif text-brand-900 leading-relaxed">
            To say Kelly knows what she&apos;s doing is truly an
            understatement!! She is on top of every detail on a level that this
            field is not familiar with, in order to produce excellent results at
            each and every turn!
          </blockquote>
          <p className="mt-6 text-sand-600 font-medium">
            — Thomas + Sara O., Maple Grove
          </p>
          <Link
            href="/reviews"
            className="mt-6 inline-block text-brand-600 font-medium text-sm hover:text-brand-700 transition-colors"
          >
            Read More Reviews →
          </Link>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-900">
              Areas I Serve
            </h2>
            <p className="mt-4 text-gray-600">
              Helping families across the Twin Cities find their home.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Maple Grove",
              "Minneapolis",
              "Plymouth",
              "Osseo",
              "Edina",
              "Mounds View",
              "Ramsey",
              "Saint Francis",
              "Alexandria",
            ].map((area) => (
              <span
                key={area}
                className="px-5 py-2.5 bg-white border border-warm-200 rounded-full text-sm font-medium text-brand-800 shadow-sm"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            Ready to Make Your Move?
          </h2>
          <p className="mt-4 text-warm-200 text-lg max-w-2xl mx-auto">
            Whether you&apos;re buying, selling, or just have questions, I&apos;d
            love to hear from you. Let&apos;s chat about your goals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-brand-800 font-semibold rounded-lg hover:bg-warm-100 transition-colors shadow-md"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:6122324499"
              className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Call (612) 232-4499
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
