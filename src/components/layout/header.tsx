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
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
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
															Window Washing
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
															High-powered cleaning for exterior surfaces
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
															Thorough cleaning and maintenance of gutters and
															downspouts
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuLink
										className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-primary-foreground/10 hover:text-ring`}
									>
										Resources
									</NavigationMenuLink>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuLink
										className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-primary-foreground/10 hover:text-ring`}
									>
										About Us
									</NavigationMenuLink>
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
							<DropdownMenuContent
								align="end"
								className="w-56 bg-white text-foreground"
							>
								<DropdownMenuItem asChild>
									<Link href="/services/residential" className="w-full">
										Residential Cleaning
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/services/commercial" className="w-full">
										Commercial Cleaning
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/services/windows" className="w-full">
										Window Washing
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/services/other" className="w-full">
										Other Services
									</Link>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<Link href="/resources" className="w-full">
										Resources
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/about-us" className="w-full">
										About Us
									</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					<div className="hidden md:block">
						<Button variant="default" className="font-medium" asChild>
							<Link href="https://clienthub.getjobber.com/client_hubs/40b56a75-dbed-4f70-b807-d9a216f025a3/public/work_request/new?source=new_webpage">
								REQUEST A QUOTE
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
