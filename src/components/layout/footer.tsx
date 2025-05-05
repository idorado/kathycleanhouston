import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-secondary-foreground text-white py-16">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					<div>
						<div className="mb-8">
							<Image
								src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomaYo5lyrN0W8yorQH6lnDudV4OjgIFLEC2YpM"
								alt="Kathy Clean Logo"
								width={170}
								height={40}
								className="text-primary"
							/>
						</div>

						<div className="mb-6">
							<h4 className="text-primary font-medium mb-2">ADDRESS</h4>
							<p className="text-white">7500 East Arapahoe Road,</p>
							<p className="text-white">Centennial, CO 80112</p>
						</div>

						<div className="mb-6">
							<h4 className="text-primary font-medium mb-2">CONTACT US</h4>
							<div className="flex items-center gap-2 mb-2">
								<div className="bg-primary rounded-full p-1.5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-secondary-foreground"
										aria-hidden="true"
										role="img"
										aria-label="Phone"
									>
										<title>Phone</title>
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
									</svg>
								</div>
								<a
									href="tel:3036812559"
									className="text-white hover:text-cyan-500"
								>
									(303) 681-2559
								</a>
							</div>
							<div className="flex items-center gap-2">
								<div className="bg-primary rounded-full p-1.5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-secondary-foreground"
										aria-hidden="true"
										role="img"
										aria-label="Email"
									>
										<title>Email</title>
										<rect width="20" height="16" x="2" y="4" rx="2" />
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
									</svg>
								</div>
								<a
									href="mailto:support@kathyclean.com"
									className="text-white hover:text-cyan-500"
								>
									support@kathyclean.com
								</a>
							</div>
						</div>

						<div className="flex space-x-3">
							<Link
								href="https://www.facebook.com/KathyCleanProfessionalCleaningServices/"
								aria-label="Facebook"
								className="text-white hover:text-cyan-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Facebook size={20} />
							</Link>
							<Link
								href="https://www.linkedin.com/company/kathyclean"
								aria-label="LinkedIn"
								className="text-white hover:text-cyan-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin size={20} />
							</Link>
							<Link
								href="https://www.instagram.com/kathycleandenver/"
								aria-label="Instagram"
								className="text-white hover:text-cyan-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Instagram size={20} />
							</Link>
						</div>
					</div>

					<div>
						<h3 className="text-xl font-semibold text-primary mb-6">
							Services
						</h3>
						<ul className="space-y-4">
							<li>
								<Link
									href="/residential"
									className="text-white hover:text-cyan-500"
								>
									Residential cleaning
								</Link>
							</li>
							<li>
								<Link
									href="/commercial"
									className="text-white hover:text-cyan-500"
								>
									Commercial cleaning
								</Link>
							</li>
							<li>
								<Link
									href="/windows"
									className="text-white hover:text-cyan-500"
								>
									Window washing
								</Link>
							</li>
							<li>
								<Link
									href="/other-services"
									className="text-white hover:text-cyan-500"
								>
									Other services
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-semibold text-primary mb-6">
							Kathy Clean
						</h3>
						<ul className="space-y-4">
							<li>
								<Link href="/about" className="text-white hover:text-cyan-500">
									About us
								</Link>
							</li>
							<li>
								<Link
									href="/benefits"
									className="text-white hover:text-cyan-500"
								>
									Benefits
								</Link>
							</li>
							<li>
								<Link
									href="/testimonials"
									className="text-white hover:text-cyan-500"
								>
									Testimonials
								</Link>
							</li>
							<li>
								<Link
									href="/about-us"
									className="text-white hover:text-cyan-500"
								>
									About Us
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-primary pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary">
					<p>© {new Date().getFullYear()} Kathy Clean. All rights reserved.</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link href="/privacy" className="text-primary">
							Privacy Policy
						</Link>
						<Link href="/terms" className="text-primary">
							Terms of Service
						</Link>
						<button type="button" className="text-primary">
							Cookies Settings
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}
