import "./globals.css";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Lora, Manrope } from "next/font/google";
import { headers } from "next/headers";
import SmoothScroll from "@/components/SmoothScroll";
import { NonceProvider } from "@/components/NonceProvider";
import HydrationMarker from "@/components/HydrationMarker";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loveiq.org";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LoveIQ",
  url: siteUrl,
  logo: `${siteUrl}/images/LoveiqLogo.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@loveiq.org",
    contactType: "customer support",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LoveIQ",
  url: siteUrl,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is LoveIQ Early Access?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early Access members get priority entry to our platform before the public launch, exclusive content, and a locked-in lifetime discount on premium features.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in the survey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our comprehensive assessment covers 5 key psychological dimensions of intimacy. You will receive a detailed report outlining your unique profile immediately after completion.",
      },
    },
    {
      "@type": "Question",
      name: "Is there support available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our team of relationship psychologists and support staff are available to help interpret your results and guide you through the platform.",
      },
    },
    {
      "@type": "Question",
      name: "How much will this cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Joining the waitlist is free. The basic assessment is free, while deeper analytical reports will be available for a one-time fee or subscription.",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LoveIQ | Science-backed sexual psychology assessment",
  description:
    "Take LoveIQ's science-backed sexual psychology assessment to understand your desires, attachment patterns, and intimacy styles.",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "LoveIQ | Science-backed sexual psychology assessment",
    description:
      "Take LoveIQ's science-backed sexual psychology assessment to understand your desires, attachment patterns, and intimacy styles.",
    url: siteUrl,
    siteName: "LoveIQ",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "LoveIQ - Science-backed sexual psychology assessment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LoveIQ | Science-backed sexual psychology assessment",
    description:
      "Take LoveIQ's science-backed sexual psychology assessment to understand your desires, attachment patterns, and intimacy styles.",
    images: [`${siteUrl}/images/og-image.png`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") || "";

  return (
    <html lang="en" className={`${manrope.variable} ${lora.variable}`}>
      <head>
        <link
          rel="preload"
          as="video"
          href="/couple-hero-mobile.mp4"
          type="video/mp4"
          media="(max-width: 640px)"
        />
        <link
          rel="preload"
          as="video"
          href="/couple-hero.mp4"
          type="video/mp4"
          media="(min-width: 641px)"
        />
        <link rel="preconnect" href="https://cdn-cookieyes.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/761bc9303937f7b41b200de8ed556d45/script.js"
          strategy="afterInteractive"
          nonce={nonce}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QTYY69L46N"
          strategy="lazyOnload"
          nonce={nonce}
        />
        <Script id="ga-init" strategy="lazyOnload" nonce={nonce}>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QTYY69L46N', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          nonce={nonce}
        >
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
          nonce={nonce}
        >
          {JSON.stringify(websiteSchema)}
        </Script>
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          nonce={nonce}
        >
          {JSON.stringify(faqSchema)}
        </Script>
      </head>
      <body className="bg-white dark:bg-[#050208]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
        >
          Skip to main content
        </a>
        <HydrationMarker />
        <NonceProvider nonce={nonce}>
          <SmoothScroll>{children}</SmoothScroll>
        </NonceProvider>
      </body>
    </html>
  );
}
