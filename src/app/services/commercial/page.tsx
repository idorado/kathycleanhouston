"use server";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import BusinessCleaningEstimateForm from "@/components/forms/BusinessCleaningEstimateForm";

export default async function CommercialPage() {
	const industries = [
		{
			title: "Preschools & Daycares",
			description:
				"Specialized cleaning for safe, healthy environments for children and staff.",
			icon: (
				<svg
					width="48"
					height="48"
					fill="none"
					viewBox="0 0 48 48"
					className="text-primary"
				>
					<path
						d="M6 22L24 8l18 14v16a2 2 0 01-2 2H8a2 2 0 01-2-2V22z"
						stroke="currentColor"
						strokeWidth="2"
					/>
					<path d="M18 40V28h12v12" stroke="currentColor" strokeWidth="2" />
				</svg>
			),
		},
		{
			title: "Pet Stores",
			description: "Clean, odor-free spaces for pets and customers alike.",
			icon: (
				<svg
					width="48"
					height="48"
					fill="none"
					viewBox="0 0 48 48"
					className="text-primary"
				>
					<rect
						x="8"
						y="20"
						width="32"
						height="20"
						rx="2"
						stroke="currentColor"
						strokeWidth="2"
					/>
					<path
						d="M4 20h40l-4-10H8l-4 10z"
						stroke="currentColor"
						strokeWidth="2"
					/>
				</svg>
			),
		},
		{
			title: "Medical Offices & Healthcare",
			description:
				"Strict protocols for hygienic, compliant healthcare environments.",
			icon: (
				<svg
					width="48"
					height="48"
					fill="none"
					viewBox="0 0 48 48"
					className="text-primary"
				>
					<rect
						x="10"
						y="14"
						width="28"
						height="26"
						rx="2"
						stroke="currentColor"
						strokeWidth="2"
					/>
					<path d="M24 22v8M20 26h8" stroke="currentColor" strokeWidth="2" />
					<rect
						x="18"
						y="8"
						width="12"
						height="6"
						rx="2"
						stroke="currentColor"
						strokeWidth="2"
					/>
				</svg>
			),
		},
		{
			title: "HOA's",
			description:
				"Community-focused cleaning for shared living spaces and amenities.",
			icon: (
				<svg
					width="48"
					height="48"
					fill="none"
					viewBox="0 0 48 48"
					className="text-accent"
				>
					<path
						d="M6 22L24 8l18 14v16a2 2 0 01-2 2H8a2 2 0 01-2-2V22z"
						stroke="currentColor"
						strokeWidth="2"
					/>
					<path d="M18 40V28h12v12" stroke="currentColor" strokeWidth="2" />
				</svg>
			),
		},
		{
			title: "Fitness Centers, Gyms & Studios",
			description:
				"Sanitized equipment and spaces for healthy, active lifestyles.",
			icon: (
				<svg
					width="48"
					height="48"
					fill="none"
					viewBox="0 0 48 48"
					className="text-accent"
				>
					<rect
						x="14"
						y="20"
						width="20"
						height="8"
						rx="2"
						stroke="currentColor"
						strokeWidth="2"
					/>
					<circle cx="14" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
					<circle cx="34" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
				</svg>
			),
		},
		{
			title: "Facility Management Companies",
			description:
				"Comprehensive solutions for large and multi-site properties.",
			icon: (
				<svg
					width="48"
					height="48"
					fill="none"
					viewBox="0 0 48 48"
					className="text-primary"
				>
					<rect
						x="10"
						y="18"
						width="28"
						height="22"
						rx="2"
						stroke="currentColor"
						strokeWidth="2"
					/>
					<rect
						x="18"
						y="26"
						width="4"
						height="6"
						rx="1"
						stroke="currentColor"
						strokeWidth="2"
					/>
					<rect
						x="26"
						y="26"
						width="4"
						height="6"
						rx="1"
						stroke="currentColor"
						strokeWidth="2"
					/>
				</svg>
			),
		},
	];

	return (
		<main className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<HeroSection>
				<div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
					<Badge className="bg-ring">SERVICES</Badge>
					<h1 className="text-4xl md:text-5xl font-bold mb-4 ">
						Janitorial Services
						<br />
						by Kathy Clean
					</h1>
					<p className="text-lg mb-8">
						A clean workspace protects your people, boosts productivity, and
						leaves a lasting impression. We help your business thrive with
						top-quality professional cleaning.
					</p>
					<Button size="lg" className="w-full sm:w-auto">
						<Link href="#request-quote">REQUEST A SERVICE</Link>
					</Button>
				</div>
				<div className="relative hidden md:flex w-full justify-center items-center">
					<Image
						src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom8nF7NwKhMCiFKE7nTrZgcpJWtXBskwHlzmqf"
						alt="Professional commercial cleaning service"
						width={400}
						height={400}
						className="object-cover rounded-lg shadow-md "
					/>
				</div>
			</HeroSection>

			{/* Industries We Specialize In */}
			<div className="flex flex-col items-center justify-center gap-8 py-24 bg-gray-100">
				<div className="container mx-auto px-4 text-center text-sm text-muted">
					<h3 className="text-lg font-semibold mb-2 text-2xl md:text-3xl lg:text-4xl text-primary-foreground">
						Industries we specialize in
					</h3>
					<p className="mb-4 text-lg">
						Each industry has unique cleaning needs, from specific processes and
						products to the ideal cleaning frequency. We tailor our services to
						ensure the best results for your business, providing the right
						solutions to keep your space clean, safe, and well-maintained.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
					{industries.map((industry) => (
						<div
							key={industry.title}
							className="bg-white rounded-xl shadow p-8 flex flex-col items-start"
						>
							<div className="mb-6">{industry.icon}</div>
							<h3 className="font-bold text-lg md:text-xl text-primary-foreground mb-2">
								{industry.title}
							</h3>
							<p className="text-gray-600">{industry.description}</p>
						</div>
					))}
				</div>
			</div>

			<BusinessCleaningEstimateForm />
		</main>
	);
}
