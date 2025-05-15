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
	const services = [
		{ href: '/house-cleaning-denver', title: 'Residential Cleaning', description: 'Professional home cleaning services' },
		{ href: '/commercial-cleaning-denver', title: 'Commercial Cleaning', description: 'Office and business cleaning solutions' },
		{ href: '/window-cleaning-denver', title: 'Window Cleaning', description: 'Crystal clear window cleaning' },
		{ href: '/pressure-washing-denver', title: 'Pressure Washing', description: 'Professional pressure washing services' },
		{ href: '/gutter-cleaning-denver', title: 'Gutter Cleaning', description: 'Cleaning and maintenance of gutters and downspouts' },
	];
	const locations = [
		{ href: '/house-cleaning-denver', name: 'Denver' },
		{ href: '/house-cleaning-centennial', name: 'Centennial' },
		{ href: '/house-cleaning-castle-rock', name: 'Castle Rock' },
		{ href: '/house-cleaning-englewood', name: 'Englewood' },
		{ href: '/house-cleaning-highlands-ranch', name: 'Highlands Ranch' },
		{ href: '/house-cleaning-parker', name: 'Parker' },
		{ href: '/house-cleaning-lone-tree', name: 'Lone Tree' },
		{ href: '/house-cleaning-aurora', name: 'Aurora' },
		{ href: '/house-cleaning-lakewood', name: 'Lakewood' },
		{ href: '/house-cleaning-littleton', name: 'Littleton' },
		{ href: '/house-cleaning-sheridan', name: 'Sheridan' },
		{ href: '/house-cleaning-greenwood-village', name: 'Greenwood Village' },
	];
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
											{services.map(s => (
												<DropdownMenuItem asChild key={s.href} onClick={() => setMobileMenuOpen(false)}>
													<Link href={s.href}>{s.title}</Link>
												</DropdownMenuItem>
											))}
										</DropdownMenuContent>
									</DropdownMenu>
									{/* Locations Dropdown */}
									<DropdownMenu>
										<DropdownMenuTrigger className="text-white text-lg text-left">Locations</DropdownMenuTrigger>
										<DropdownMenuContent className="bg-foreground text-white">
											{locations.map(l => (
												<DropdownMenuItem asChild key={l.href} onClick={() => setMobileMenuOpen(false)}>
													<Link href={l.href}>{l.name}</Link>
												</DropdownMenuItem>
											))}
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
											{services.map(s => (
												<li key={s.href}>
													<NavigationMenuLink asChild>
														<Link href={s.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
															<div className="text-sm font-medium leading-none">{s.title}</div>
															<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{s.description}</p>
														</Link>
													</NavigationMenuLink>
												</li>
											))}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger className="bg-transparent text-white hover:bg-primary/10 hover:text-ring">
										Locations
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
											{locations.map(l => (
												<li key={l.href}>
													<NavigationMenuLink asChild>
														<Link href={l.href} className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
															{l.name}
														</Link>
													</NavigationMenuLink>
												</li>
											))}
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
