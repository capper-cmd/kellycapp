import Link from "next/link";

export const metadata = {
  title: "Buyer Resources | Kelly Capp Real Estate",
  description: "Everything you need to know about buying a home in the Twin Cities with Kelly Capp.",
};

export default function Buyers() {
  const steps = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "We'll sit down and talk about what you're looking for: budget, neighborhoods, must-haves, and timeline.",
    },
    {
      num: "02",
      title: "Get Pre-Approved",
      desc: "I'll connect you with trusted lenders to get your financing in place so you can shop with confidence.",
    },
    {
      num: "03",
      title: "Home Search",
      desc: "I'll curate listings that match your criteria and schedule showings that work with your schedule.",
    },
    {
      num: "04",
      title: "Make an Offer",
      desc: "When you find the one, I'll help you craft a competitive offer and negotiate on your behalf.",
    },
    {
      num: "05",
      title: "Inspections & Closing",
      desc: "I'll guide you through inspections, appraisals, and all the paperwork so closing day goes smoothly.",
    },
    {
      num: "06",
      title: "Welcome Home!",
      desc: "Keys in hand! I'll make sure you have everything you need to settle into your new home.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-warm-100 to-sand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-900">
            Buying a Home
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Purchasing a home is one of the biggest decisions you&apos;ll make.
            I&apos;m here to make it feel less overwhelming and more exciting.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-brand-900 text-center mb-14">
            The Buying Process
          </h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-brand-800">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Checklist */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-brand-900 text-center mb-6">
            Buyer&apos;s Checklist
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Documents and things to prepare before you start house hunting.
          </p>
          <div className="bg-white rounded-xl p-8 border border-warm-200 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Mortgage pre-approval letter",
                "Proof of income (pay stubs, W-2s)",
                "Bank statements (2-3 months)",
                "Photo ID",
                "List of must-haves vs. nice-to-haves",
                "Preferred neighborhoods",
                "Budget for down payment & closing costs",
                "Credit report review",
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

      {/* CTA */}
      <section className="py-16 bg-brand-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold">
            Ready to Start Your Home Search?
          </h2>
          <p className="mt-3 text-warm-200">
            Let&apos;s find your dream home together.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-white text-brand-800 font-semibold rounded-lg hover:bg-warm-100 transition-colors"
          >
            Schedule a Buyer Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
