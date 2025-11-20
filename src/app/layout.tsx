import type { Metadata } from "next";
import { Suspense } from "react";
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
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://luchoscleaning.com"
  ),
  title: {
    default: "Top Rated Cleaning Company in Houston, TX | Luchos Cleaning",
    template: "%s | Luchos Cleaning",
  },
  description:
    "Professional Cleaning Company in Houston, TX, serving Harris County, TX: recurring, deep cleans, move-in/out & post-construction. Fast, friendly, insured.",
  openGraph: {
    type: "website",
    url: "https://luchoscleaning.com",
    siteName: "Luchos Cleaning",
    title: "Top Rated Cleaning Company in Houston, TX | Luchos Cleaning",
    description:
      "Professional Cleaning Company in Houston, TX, serving Harris County, TX: recurring, deep cleans, move-in/out & post-construction. Fast, friendly, insured.",
    images: [
      {
        url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOs088CLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu",
        width: 1200,
        height: 630,
        alt: "Luchos Cleaning — Professional Cleaning Services",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Rated Cleaning Company in Houston, TX | Luchos Cleaning",
    description:
      "Professional cleaning services in Houston & surrounding areas, serving Harris County, TX. Get a fast quote.",
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
      <Script id="gtm-init" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KZQ6J6RB');`}
      </Script>

      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZQ6J6RB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
