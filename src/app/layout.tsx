import type { Metadata } from "next";
import "./globals.css";

import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Providers, PostHogProvider } from "@/components/providers"


export const metadata: Metadata = {
  title: "Kathy Clean",
  description: "Residential and commercial cleaning services",
  icons: [{ rel: "icon", url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomaYo5lyrN0W8yorQH6lnDudV4OjgIFLEC2YpM" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"> 
        <PostHogProvider>

        <Providers>
          <div className="min-h-screen flex flex-col">
            <TopBar />
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        </PostHogProvider>
      </body>
    </html>
  );
}
