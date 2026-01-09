import type { Metadata } from "next";
import { Suspense } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PostHogProvider } from "@/components/providers";
import UtmPersistence from "@/components/analytics/UtmPersistence";
import TallyListener from "@/components/analytics/TallyListener";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kathycleanhouston.com"
  ),
  title: {
    default: "Top Rated Cleaning Company in Houston, TX | Kathy Clean Houston",
    template: "%s | Kathy Clean Houston",
  },
  description:
    "Professional Cleaning Company in Houston, TX, serving Harris County, TX: recurring, deep cleans, move-in/out & post-construction. Fast, friendly, insured.",
  openGraph: {
    type: "website",
    url: "https://kathycleanhouston.com",
    siteName: "Kathy Clean Houston",
    title: "Top Rated Cleaning Company in Houston, TX | Kathy Clean Houston",
    description:
      "Professional Cleaning Company in Houston, TX, serving Harris County, TX: recurring, deep cleans, move-in/out & post-construction. Fast, friendly, insured.",
    images: [
      {
        url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOs088CLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu",
        width: 1200,
        height: 630,
        alt: "Kathy Clean Houston — Professional Cleaning Services",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Rated Cleaning Company in Houston, TX | Kathy Clean Houston",
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P8BH9F2C');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P8BH9F2C" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        {/* End Google Tag Manager (noscript) */}
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
