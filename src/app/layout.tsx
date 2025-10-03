import type { Metadata } from "next";
import { Suspense } from "react";
import {GoogleTagManager} from "@next/third-parties/google"
import Script from "next/script"
import { Poppins } from "next/font/google"
import "./globals.css";

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PostHogProvider } from "@/components/providers"
import UtmPersistence from "@/components/analytics/UtmPersistence"


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kathyclean.com'),
  // NO poner alternates.canonical aquí
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <GoogleTagManager gtmId="GTM-M3T7KSXH" />
      {/* Google tag (gtag.js) */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17062489970" strategy="afterInteractive"/>
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
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </PostHogProvider>
        <Suspense fallback={null}>
          <UtmPersistence />
        </Suspense>
        <Script id="tally-conversion-listener" strategy="afterInteractive">
  {`
    window.addEventListener("message", function(event) {
      if (
        event.origin === "https://tally.so" &&
        typeof event.data === "string" &&
        event.data.includes('"event":"Tally.FormSubmitted"')
      ) {
        if (typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: "AW-17062489970/XHAECLjasMkaEPLeg8g_",
          });
        }
      }
    });
  `}
</Script>
      </body>
    </html>
  );
}
