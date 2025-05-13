"use client"
import Link from "next/link";
import Image from "next/image";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import PhoneButton from "@/components/PhoneButton";

import React, { useState } from "react";

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className="sticky top-0 z-50 bg-foreground py-3">
			<div className="container mx-auto px-4">
				<div className="relative flex items-center justify-between w-full">
					{/* Left: Logo */}
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
					</div>

					{/* Hamburger Menu Icon for Mobile (far right) */}
					<div className="flex-1 flex justify-end md:hidden">
						<Button
							className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
							aria-label="Open menu"
							onClick={() => setMobileMenuOpen(true)}
						>
							<Menu size={28} className="text-white" />
						</Button>
					</div>

					{/* Mobile Menu Drawer */}
					{mobileMenuOpen && (
						<div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-end md:hidden">
							<div className="bg-foreground w-4/5 max-w-xs h-full shadow-lg p-6 flex flex-col">
								<Button
									className="self-end mb-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
									aria-label="Close menu"
									onClick={() => setMobileMenuOpen(false)}
								>
									<span className="text-white text-2xl">×</span>
								</Button>
								<nav className="flex flex-col gap-4">
									{/* Services Dropdown */}
									<DropdownMenu>
										<DropdownMenuTrigger className="text-white text-lg text-left">Services</DropdownMenuTrigger>
										<DropdownMenuContent className="bg-foreground text-white">
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/house-cleaning-denver">Residential Cleaning</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/commercial-cleaning-denver">Commercial Cleaning</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/window-cleaning-denver">Window Cleaning</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/pressure-washing-denver">Pressure Washing</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/other-services-denver">Other Services</Link></DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
									{/* Locations Dropdown */}
									<DropdownMenu>
										<DropdownMenuTrigger className="text-white text-lg text-left">Locations</DropdownMenuTrigger>
										<DropdownMenuContent className="bg-foreground text-white">
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/house-cleaning-denver">Denver</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/house-cleaning-parker">Parker</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/house-cleaning-castle-rock">Castle Rock</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/house-cleaning-lone-tree">Lone Tree</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/house-cleaning-highlands-ranch">Highlands Ranch</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/house-cleaning-centennial">Centennial</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/house-cleaning-central-park">Central Park</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/house-cleaning-hilltop">Hilltop</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/house-cleaning-washington-park">Washington Park</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/house-cleaning-cherry-creek">Cherry Creek</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/house-cleaning-university-park">University Park</Link></DropdownMenuItem>
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}><Link href="/house-cleaning-highland">Highland</Link></DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
									<Link href="/about-us" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
									<Link href="/request-quote" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>Request a Quote</Link>
									<div className="mt-2"><PhoneButton /></div>
								</nav>
							</div>
						</div>
					)}

					{/* Center: Navigation */}
					<div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
						<NavigationMenu>
							<NavigationMenuList className="gap-1">
								<NavigationMenuItem>
									<NavigationMenuTrigger className="bg-transparent text-white hover:bg-primary/10 hover:text-ring">
										Services
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-denver"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">
															Residential Cleaning
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															Professional home cleaning services
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/commercial-cleaning-denver"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">
															Commercial Cleaning
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															Office and business cleaning solutions
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/window-cleaning-denver"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">
															Window Cleaning
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															Crystal clear window cleaning
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/pressure-washing-denver"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">
															Pressure Washing
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															Professional pressure washing services
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/gutter-cleaning-denver"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">
															Gutter Cleaning
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															Cleaning and maintenance of gutters and downspouts
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger className="bg-transparent text-white hover:bg-primary/10 hover:text-ring">
										Locations
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-denver"
														className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														Denver
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-parker"
														className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														Parker
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-castle-rock"
														className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														Castle Rock
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-lone-tree"
														className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														Lone Tree
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-highlands-ranch"
														className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														Highlands Ranch
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-centennial"
														className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														Centennial
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-central-park"
														className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														Central Park
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-hilltop"
														className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														Hilltop
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-washington-park"
														className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														Washington Park
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-cherry-creek"
														className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														Cherry Creek
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-university-park"
														className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														University Park
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-highland"
														className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														Highland
													</Link>
												</NavigationMenuLink>
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link href="/about-us" className="bg-transparent text-white hover:bg-primary/10 hover:text-ring px-4 py-2 rounded transition-colors font-medium">
											About Us
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					{/* Right: Buttons */}
					<div className="hidden md:block">
						<div className="flex flex-row gap-3 items-center">
							<Button variant="default" className="font-medium" asChild>
								<Link href="/request-quote">
									REQUEST A QUOTE
								</Link>
							</Button>
							<PhoneButton />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
