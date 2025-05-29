"use server"
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function RequestQuoteButton() {
  return (
    <Button
      variant="default"
      className="mt-8 font-medium mx-auto px-8 py-3 text-lg shadow-lg hover:scale-105 transition-all"
      asChild
    >
      <Link href="/request-quote">REQUEST A QUOTE</Link>
    </Button>
  );
}
