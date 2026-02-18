import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-warm-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">
              Kelly Capp
            </h3>
            <p className="text-warm-300 text-sm leading-relaxed">
              23 years of helping families find their perfect home in the Twin
              Cities metro area.
            </p>
            <p className="mt-4 text-warm-400 text-sm">
              Luke Team Real Estate
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About Kelly" },
                { href: "/listings", label: "Listings" },
                { href: "/buyers", label: "Buyer Resources" },
                { href: "/sellers", label: "Seller Resources" },
                { href: "/reviews", label: "Reviews" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-warm-300 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-warm-300">
              <a href="tel:6122324499" className="hover:text-white transition-colors">
                📞 (612) 232-4499
              </a>
              <p>📍 Maple Grove, MN</p>
              <p className="text-warm-400 text-xs mt-2">
                Serving Maple Grove, Minneapolis, Plymouth, Osseo, Edina, and
                the greater Twin Cities area.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-800 text-center text-warm-400 text-xs">
          © {new Date().getFullYear()} Kelly Capp Real Estate. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
