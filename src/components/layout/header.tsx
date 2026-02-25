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
import { houstonServiceAreas } from "@/lib/service-areas/houstonLocations";
import { getAttribution, toQueryParams } from "@/lib/attribution";

import React, { useState } from "react";

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const injectAttributionIntoUrlTemporarily = () => {
		try {
			const attr = getAttribution();
			if (!attr) return;

			const original = window.location.pathname + window.location.search;
			const qsWithMaybeQuestion = toQueryParams(attr);
			const qs = qsWithMaybeQuestion.startsWith("?")
				? qsWithMaybeQuestion.slice(1)
				: qsWithMaybeQuestion;

			if (!qs) return;

			history.replaceState(null, "", window.location.pathname + "?" + qs);
			setTimeout(() => history.replaceState(null, "", original), 500);
		} catch {}
	};
	const services = [
		{ href: '/house-cleaning-houston', title: 'House Cleaning', description: 'Professional home cleaning services' },
		{ href: '/commercial-cleaning-houston', title: 'Commercial Cleaning', description: 'Office and business cleaning solutions' },
	];
	const allowedLocationSlugs = new Set([
		"bellaire",
		"river-oaks",
		"the-memorial-villages",
		"washington-ave-memorial-park",
		"west-university-place",
	]);

	const locations = [...houstonServiceAreas]
		.filter((area) => allowedLocationSlugs.has(area.slug))
		.map((area) => ({
			href: `/service-areas/${area.slug}`,
			name:
				area.slug === "washington-ave-memorial-park"
					? "Washington Ave. / Memorial Park"
					: area.name,
		}))
		.sort((a, b) => a.name.localeCompare(b.name));
	return (
		<header className="sticky top-0 z-50 bg-foreground py-3">
			<div className="container mx-auto px-4">
				<div className="relative w-full">
					{/* Mobile header: logo + burger (visible < lg) */}
					<div className="flex lg:hidden items-center justify-between gap-3">
						<div className="flex items-center gap-8">
							<Link href="/" className="flex items-center">
								<Image
									src="/images/logo-nav.webp"
									alt="Kathy Clean Houston logo"
									width={150}
									height={40}
									priority
									className="h-10 w-auto"
								/>
							</Link>
						</div>
						<Button
							className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
							aria-label="Open menu"
							onClick={() => setMobileMenuOpen(true)}
						>
							<Menu size={28} className="text-white" />
						</Button>
					</div>

					{/* Mobile Menu Drawer (visible < lg) */}
					{mobileMenuOpen && (
						<div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-end lg:hidden">
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
									<DropdownMenu>
										<DropdownMenuTrigger className="text-white text-lg text-left">Locations</DropdownMenuTrigger>
										<DropdownMenuContent className="bg-foreground text-white">
											{locations.map(l => (
												<DropdownMenuItem asChild key={l.href} onClick={() => setMobileMenuOpen(false)}>
													<Link href={l.href}>{l.name}</Link>
												</DropdownMenuItem>
											))}
											<DropdownMenuSeparator />
											<DropdownMenuItem asChild onClick={() => setMobileMenuOpen(false)}>
												<Link href="/service-areas">View all locations</Link>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
									<Link href="/about-us" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
									<div className="mt-2"><PhoneButton /></div>
									<div className="mt-4 lg:hidden">
										<button
											type="button"
											className="py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 w-full sm:w-auto min-w-[180px] bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
											data-tally-open="wMkPWA"
											data-tally-layout="modal"
											data-tally-width="600"
											data-tally-hide-title="1"
											data-tally-form-events-forwarding="1"
											onClick={() => {
												injectAttributionIntoUrlTemporarily();
												setTimeout(() => setMobileMenuOpen(false), 0);
											}}
										>
											REQUEST A QUOTE
										</button>
									</div>
								</nav>
							</div>
						</div>
					)}

					{/* Desktop header: logo + nav + actions (visible >= lg) */}
					<div className="hidden lg:flex w-full items-center justify-between gap-6">
						{/* Left: Logo */}
						<div className="flex items-center gap-8">
							<Link href="/" className="flex items-center">
								<Image
									src="/images/logo-nav.webp"
									alt="Kathy Clean Houston logo"
									width={150}
									height={40}
									priority
									className="h-10 w-auto"
								/>
							</Link>
						</div>

						{/* Center: Navigation */}
						<div className="flex-1 flex justify-center">
							<div className="min-w-0 flex-shrink">
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
											<NavigationMenuTrigger className="bg-transparent text-white hover:bg-primary/10 hover:text-ring px-4 py-2 rounded transition-colors font-medium" >
												Locations
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<ul className="grid w-[300px] gap-3 p-4">
													{locations.map(l => (
														<li key={l.href}>
															<NavigationMenuLink asChild>
																<Link href={l.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
																	<div className="text-sm font-medium leading-none">{l.name}</div>
																</Link>
															</NavigationMenuLink>
														</li>
													))}
													<li aria-hidden>
														<div className="h-px w-full bg-border" />
													</li>
													<li>
														<NavigationMenuLink asChild>
															<Link href="/service-areas" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
																<div className="text-sm font-medium leading-none">View all locations</div>
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
						</div>

						{/* Right: Desktop actions */}
						<div className="flex items-center gap-3">
							<div className="hidden xl:block">
								<button
									type="button"
									className="py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 w-full sm:w-auto min-w-[180px] bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 shrink-0"
									data-tally-open="wMkPWA"
									data-tally-layout="modal"
									data-tally-width="600"
									data-tally-hide-title="1"
									data-tally-form-events-forwarding="1"
									onClick={injectAttributionIntoUrlTemporarily}
								>
									REQUEST A QUOTE
								</button>
							</div>
							<PhoneButton />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
