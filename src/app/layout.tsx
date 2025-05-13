import type { Metadata } from "next";
import {GoogleTagManager} from "@next/third-parties/google"
import "./globals.css";

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster} from "@/components/ui/sonner";
import { Providers, PostHogProvider } from "@/components/providers"


export const metadata: Metadata = {
  title: "Residential & Commercial Cleaning in Denver | Kathy Clean",
  description: "Top-rated cleaning in Denver & nearby. Residential, commercial, windows, pressure & more. 48h guarantee. 10+ years of trusted service",
  icons: [{ rel: "icon", url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomaYo5lyrN0W8yorQH6lnDudV4OjgIFLEC2YpM" }],
  keywords: "cleaning, Denver, residential, commercial, windows, pressure, 48h guarantee, 10+ years of trusted service",
  alternates: {
    canonical: "https://www.kathyclean.com/",
    languages: {
      "en-US": "https://www.kathyclean.com/"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-M3T7KSXH" />
      <body className="antialiased"> 
        <PostHogProvider>

        <Providers>
          <div className="min-h-screen flex flex-col">
      
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
        </PostHogProvider>
      </body>
    </html>
  );
}
