import { Metadata } from "next";
import { canonicalPath } from "@/lib/canonical";

export const metadata: Metadata = {
  title: "Get your free cleaning quote | Kathy Clean",
  description: "Get a free, no-obligation quote for professional cleaning services in Denver. Residential and commercial cleaning services available.",
  alternates: {
    canonical: canonicalPath("request-quote")
  }
};
