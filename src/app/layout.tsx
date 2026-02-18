import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelly Capp | Real Estate Agent | Maple Grove, MN",
  description:
    "With 23 years of experience, Kelly Capp helps buyers and sellers in Maple Grove, Minneapolis, Plymouth, and the Twin Cities metro. Personalized service, expert negotiation, real results.",
  openGraph: {
    title: "Kelly Capp Real Estate",
    description: "Your neighborhood real estate expert in the Twin Cities metro.",
    url: "https://kellycapp.com",
    siteName: "Kelly Capp Real Estate",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
