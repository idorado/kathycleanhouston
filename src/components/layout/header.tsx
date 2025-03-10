"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/navigation/main-nav";

export function Header() {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <Link href="/" className="font-bold text-2xl">
              Kathy Clean
            </Link>
            <MainNav />
          </div>

          <div className="flex items-center gap-2"> 
            {!isAuthPage && (
              <div className="flex items-center gap-3">
                <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
                  Login
                </Link>
                <Link href="/signup" className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
                  Sign Up
                </Link>
              </div>
            )}
            <Button asChild>
              <Link href="#estimate" className="text-sm font-medium hover:text-primary transition-colors">
                Free Estimate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
