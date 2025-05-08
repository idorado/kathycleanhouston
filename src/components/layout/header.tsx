"use server"
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

export async function Header() {
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
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">Denver</div>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-parker"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">Parker</div>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-castle-rock"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">Castle Rock</div>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-lone-tree"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">Lone Tree</div>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-highlands-ranch"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">Highlands Ranch</div>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-centennial"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">Centennial</div>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-central-park"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">Central Park</div>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-hilltop"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">Hilltop</div>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-washington-park"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">Washington Park</div>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-cherry-creek"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">Cherry Creek</div>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-university-park"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">University Park</div>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/house-cleaning-highland"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">Highland</div>
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
									<NavigationMenuLink asChild>
										<Link
											href="/about-us"
											className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-primary-foreground/10 hover:text-ring`}
										>
											About Us
										</Link>
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
									<Link href="/house-cleaning-denver" className="w-full">
										Residential Cleaning
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/commercial-cleaning-denver" className="w-full">
										Commercial Cleaning
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/window-cleaning-denver" className="w-full">
										Window Cleaning
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/pressure-washing-denver" className="w-full">
										Pressure Washing
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/gutter-cleaning-denver" className="w-full">
										Gutter Cleaning
									</Link>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
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
							<Link href="/request-quote">
								REQUEST A QUOTE
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
