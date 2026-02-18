import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Kelly | Kelly Capp Real Estate",
  description: "Learn about Kelly Capp, a real estate agent with 23 years of experience serving the Twin Cities metro area.",
};

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-warm-100 to-sand-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/kelly-headshot.webp"
                alt="Kelly Capp"
                width={400}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-900">
                Meet Kelly
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                I&apos;ve been in real estate for over 23 years, and nothing makes
                me happier than helping buyers purchase their dream house or
                helping sellers get the most for their home.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Real estate isn&apos;t just my career, it&apos;s my passion. Every
                family has a unique story and unique needs. I take the time to
                listen, understand your goals, and create a plan that works for
                you.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                When I&apos;m not helping clients find their perfect home, you can
                find me spending time with my family in the Maple Grove area.
                I&apos;m a proud mom and a dedicated community member.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-warm-200">
                  <div className="text-2xl font-serif font-bold text-brand-700">23+</div>
                  <div className="text-sm text-gray-500">Years in Real Estate</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-warm-200">
                  <div className="text-2xl font-serif font-bold text-brand-700">5.0 ⭐</div>
                  <div className="text-sm text-gray-500">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-brand-900 text-center mb-12">
            What Sets Me Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Detail-Oriented",
                desc: "I'm on top of every detail on a level this field is not familiar with. Nothing slips through the cracks.",
              },
              {
                icon: "💬",
                title: "Excellent Communicator",
                desc: "You'll never wonder what's happening with your transaction. I keep you informed every step of the way.",
              },
              {
                icon: "🤝",
                title: "Strong Negotiator",
                desc: "I fight for the best deal for my clients. Whether buying or selling, I make sure you come out ahead.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 border border-warm-200 shadow-sm"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-serif font-bold text-brand-800">{item.title}</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sand-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-brand-900">
            Want to work together?
          </h2>
          <p className="mt-3 text-gray-600">
            I&apos;d love to hear about your real estate goals.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
