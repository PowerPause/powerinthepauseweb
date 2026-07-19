import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Pinyon_Script, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Stars } from "@/components/ui/Stars";
import { JsonLd } from "@/components/JsonLd";
import { LINKS } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thepowerinthepause.co.uk"),
  title: "Power In The Pause® | A philosophy for modern life",
  description: "Pausing is not doing nothing. It's where clarity, creativity and transformation begin.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Power In The Pause®",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Power In The Pause®",
  url: "https://thepowerinthepause.co.uk",
  logo: "https://thepowerinthepause.co.uk/images/power-in-the-pause-gold.png",
  description: "Power In The Pause® is a philosophy for modern life, practised through creativity, created by artist, mentor and founder Katie Cooper.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  sameAs: [LINKS.instagram, LINKS.facebook],
  knowsAbout: [
    "Mentoring",
    "Coaching",
    "Positive psychology",
    "Creative practice",
    "Mindful drawing",
    "Retreats",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${cormorant.variable} ${jost.variable} ${pinyon.variable} ${playfair.variable} h-full antialiased`}
    >
      <link rel="llms" href="https://thepowerinthepause.co.uk/llms.txt" />
      <body className="min-h-full flex flex-col relative">
        <JsonLd data={organizationSchema} />
        <Stars count={40} />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
