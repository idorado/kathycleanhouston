import type { Metadata } from "next";
import { Suspense } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PostHogProvider } from "@/components/providers";
import UtmPersistence from "@/components/analytics/UtmPersistence";
import TallyListener from "@/components/analytics/TallyListener";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kathyclean.com"
  ),
  title: {
    default: "Top Rated Cleaning Company in Denver, CO | Kathy Clean",
    template: "%s | Kathy Clean",
  },
  description:
    "Professional Cleaning Company in Denver, CO: recurring, deep cleans, move-in/out, windows & post-construction. Fast, friendly, insured.",
  openGraph: {
    type: "website",
    url: "https://kathyclean.com",
    siteName: "Kathy Clean",
    title: "Top Rated Cleaning Company in Denver, CO | Kathy Clean",
    description:
      "Professional Cleaning Company in Denver, CO: recurring, deep cleans, move-in/out, windows & post-construction. Fast, friendly, insured.",
    images: [
      {
        url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOs088CLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu",
        width: 1200,
        height: 630,
        alt: "Kathy Clean — Professional Cleaning Services",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Rated Cleaning Company in Denver, CO | Kathy Clean",
    description:
      "Professional cleaning services in Denver & surrounding areas. Get a fast quote.",
    images: [
      "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOs088CLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu",
    ],
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <GoogleTagManager gtmId="GTM-M3T7KSXH" />
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17062489970"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17062489970');
  `}
      </Script>

      <body className="antialiased">
        <PostHogProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </PostHogProvider>
        <Suspense fallback={null}>
          <UtmPersistence />
        </Suspense>
        <TallyListener />
      </body>
    </html>
  );
}
