"use client";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button} from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu} from "lucide-react";

import { ContactUsModal } from "@/components/modals/contact-us";

import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-foreground py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image 
                src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomaYo5lyrN0W8yorQH6lnDudV4OjgIFLEC2YpM" 
                alt="Kathy Clean Logo" 
                width={150} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-primary/10 hover:text-ring">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/services/residential" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Residential Cleaning</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Professional home cleaning services</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/services/commercial" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Commercial Cleaning</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Office and business cleaning solutions</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/services/windows" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Window Washing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Crystal clear window cleaning</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/services/other" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Other Services</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Additional cleaning services</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="/benefits" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-primary-foreground/10 hover:text-ring`}>
                      Benefits
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="/testimonials" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-primary-foreground/10 hover:text-ring`}>
                      Testimonials
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-primary-foreground/10 hover:text-ring`}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-label="Open menu"
                  variant="default"
                  size="icon"
                  className="text-white"
                >
                  <Menu size={20} className="text-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white text-foreground">
                <DropdownMenuItem asChild>
                  <Link href="/services/residential" className="w-full">Residential Cleaning</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/commercial" className="w-full">Commercial Cleaning</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/windows" className="w-full">Window Washing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/other" className="w-full">Other Services</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/benefits" className="w-full">Benefits</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/testimonials" className="w-full">Testimonials</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about-us" className="w-full">About Us</Link>
                </DropdownMenuItem>
             </DropdownMenuContent>
           </DropdownMenu>
          </div>
          <div className="hidden md:block">
            <ContactUsModal/>
          </div>
        </div>
      </div>
    </header>
  );
}
