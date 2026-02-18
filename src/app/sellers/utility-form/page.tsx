"use client";

import { useState, FormEvent } from "react";
import { jsPDF } from "jspdf";

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

    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      let y = 20;

      // Header
      doc.setFontSize(20);
      doc.setFont("helvetica", "bold");
      doc.text("Seller Utility Information", pageWidth / 2, y, { align: "center" });
      y += 10;

      // Kelly Capp branding
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(120, 120, 120);
      doc.text("Prepared by Kelly Capp — Luke Team Real Estate — (612) 232-4499", pageWidth / 2, y, { align: "center" });
      doc.setTextColor(0, 0, 0);
      y += 12;

      // Property address
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("Property Address:", 14, y);
      doc.setFont("helvetica", "normal");
      doc.text(address, 60, y);
      y += 8;

      // Seller info
      doc.setFont("helvetica", "bold");
      doc.text("Seller:", 14, y);
      doc.setFont("helvetica", "normal");
      doc.text(`${sellerName}  •  ${sellerEmail}`, 60, y);
      y += 12;

      // Table header
      doc.setFillColor(212, 128, 46); // brand orange
      doc.rect(14, y - 5, pageWidth - 28, 8, "F");
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(255, 255, 255);
      doc.text("Utility", 16, y);
      doc.text("Company", 58, y);
      doc.text("Phone", 115, y);
      doc.text("Avg Monthly", 160, y);
      doc.setTextColor(0, 0, 0);
      y += 8;

      // Table rows
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      let totalCost = 0;
      utilities.forEach((row, i) => {
        if (y > 270) {
          doc.addPage();
          y = 20;
        }
        if (i % 2 === 0) {
          doc.setFillColor(245, 240, 235);
          doc.rect(14, y - 5, pageWidth - 28, 8, "F");
        }
        doc.setFont("helvetica", "bold");
        doc.text(row.type, 16, y);
        doc.setFont("helvetica", "normal");
        doc.text(row.company || "—", 58, y);
        doc.text(row.phone || "—", 115, y);
        const costStr = row.cost ? `$${row.cost.replace(/^\$/, "")}` : "—";
        doc.text(costStr, 160, y);
        const parsed = parseFloat(row.cost.replace(/[^0-9.]/g, ""));
        if (!isNaN(parsed)) totalCost += parsed;
        y += 8;
      });

      // Total
      y += 4;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(`Estimated Monthly Total: $${totalCost.toFixed(2)}`, 14, y);
      y += 10;

      // Notes
      if (notes.trim()) {
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text("Additional Notes:", 14, y);
        y += 6;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        const lines = doc.splitTextToSize(notes, pageWidth - 28);
        doc.text(lines, 14, y);
        y += lines.length * 5 + 6;
      }

      // Footer
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`Generated ${new Date().toLocaleDateString()} — kellycapp.com`, pageWidth / 2, 285, { align: "center" });

      doc.save("utility-information.pdf");

      // Also submit to backend to save in Kelly's documents + email
      try {
        const pdfBase64 = doc.output("datauristring").split(",")[1];
        const apiUrl = "https://kellycapprealestate.mlbcity.com";
        await fetch(`${apiUrl}/api/utility-form/submit`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pdfBase64, address, sellerName, sellerEmail }),
        });
      } catch {
        // Silent fail — PDF already downloaded, backend save is bonus
        console.warn("Could not save to backend");
      }

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
