"use client";

import { useState, FormEvent } from "react";

const UTILITY_TYPES = [
  "Electric",
  "Gas",
  "Water",
  "Sewer",
  "TV/Cable",
  "Garbage",
  "Recycling",
  "Association",
  "Snow/Lawn",
  "Other",
] as const;

interface UtilityRow {
  type: string;
  company: string;
  phone: string;
  cost: string;
}

export default function UtilityFormPage() {
  const [address, setAddress] = useState("");
  const [utilities, setUtilities] = useState<UtilityRow[]>(
    UTILITY_TYPES.map((type) => ({ type, company: "", phone: "", cost: "" }))
  );
  const [notes, setNotes] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const updateUtility = (index: number, field: keyof UtilityRow, value: string) => {
    setUtilities((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://kellycapprealestate.mlbcity.com";

    try {
      const res = await fetch(`${apiUrl}/api/utility-form/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address,
          utilities,
          notes,
          sellerName,
          sellerEmail,
        }),
      });

      if (!res.ok) throw new Error("Failed to generate PDF");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "utility-information.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-warm-200 bg-warm-50 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sand-500 focus:border-sand-500 transition-colors";

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-warm-100 to-sand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-900">
            Seller Utility Information
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Help your buyer understand the home&apos;s utility costs by filling
            out this quick form.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Property Address */}
            <div>
              <label className="block text-sm font-semibold text-brand-800 mb-1">
                Property Address
              </label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="123 Main St, City, State ZIP"
                className={inputClass}
              />
            </div>

            {/* Utility Rows */}
            <div>
              <h2 className="text-xl font-serif font-bold text-brand-800 mb-4">
                Utility Details
              </h2>

              {/* Desktop table header */}
              <div className="hidden md:grid md:grid-cols-[160px_1fr_1fr_120px] gap-3 mb-2 px-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Utility
                </span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Company Name
                </span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Phone Number
                </span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Avg Monthly $
                </span>
              </div>

              <div className="space-y-3">
                {utilities.map((row, i) => (
                  <div
                    key={row.type}
                    className="rounded-xl border border-warm-200 bg-white p-4 md:p-3 md:grid md:grid-cols-[160px_1fr_1fr_120px] md:items-center gap-3"
                  >
                    {/* Label */}
                    <span className="block text-sm font-semibold text-brand-700 mb-2 md:mb-0">
                      {row.type}
                    </span>

                    {/* Mobile labels + inputs */}
                    <div className="space-y-2 md:space-y-0 md:contents">
                      <div>
                        <label className="md:hidden text-xs text-gray-500 mb-0.5 block">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={row.company}
                          onChange={(e) => updateUtility(i, "company", e.target.value)}
                          placeholder="Company name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="md:hidden text-xs text-gray-500 mb-0.5 block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={row.phone}
                          onChange={(e) => updateUtility(i, "phone", e.target.value)}
                          placeholder="(555) 123-4567"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="md:hidden text-xs text-gray-500 mb-0.5 block">
                          Avg Monthly Cost
                        </label>
                        <input
                          type="text"
                          inputMode="decimal"
                          value={row.cost}
                          onChange={(e) => updateUtility(i, "cost", e.target.value)}
                          placeholder="$0.00"
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-semibold text-brand-800 mb-1">
                Additional Notes
              </label>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any additional details about utilities, special arrangements, etc."
                className={inputClass}
              />
            </div>

            {/* Seller Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-brand-800 mb-1">
                  Seller Name
                </label>
                <input
                  type="text"
                  required
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-800 mb-1">
                  Seller Email
                </label>
                <input
                  type="email"
                  required
                  value={sellerEmail}
                  onChange={(e) => setSellerEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 px-8 py-3 bg-sand-600 text-white font-semibold rounded-lg hover:bg-sand-700 focus:outline-none focus:ring-2 focus:ring-sand-500 focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Generating…
                  </>
                ) : (
                  "Generate PDF"
                )}
              </button>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-center text-green-800 text-sm font-medium">
                ✅ Your Utility Information PDF has been generated and downloaded!
              </div>
            )}
            {status === "error" && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-center text-red-800 text-sm font-medium">
                ❌ {errorMsg || "Something went wrong. Please try again."}
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
