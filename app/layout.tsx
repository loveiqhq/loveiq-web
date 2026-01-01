import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://loveiq.org";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LoveIQ | Science-backed sexual psychology assessment",
  description: "Take LoveIQ’s science-backed sexual psychology assessment to understand your desires, attachment patterns, and intimacy styles.",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/images/LoveiqLogo.svg",
  },
  openGraph: {
    title: "LoveIQ | Science-backed sexual psychology assessment",
    description: "Take LoveIQ’s science-backed sexual psychology assessment to understand your desires, attachment patterns, and intimacy styles.",
    url: siteUrl,
    siteName: "LoveIQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoveIQ | Science-backed sexual psychology assessment",
    description: "Take LoveIQ’s science-backed sexual psychology assessment to understand your desires, attachment patterns, and intimacy styles.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${lora.variable}`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QTYY69L46N" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QTYY69L46N', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="bg-white dark:bg-[#050208]">
        {children}
      </body>
    </html>
  );
}
