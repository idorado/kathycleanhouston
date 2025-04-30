"use server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ResidentialPriceCalculator } from "@/components/tools/residential-price-calculator";
import { Badge } from "@/components/ui/badge";
import { ServiceCards } from "@/components/cards/services";
import HeroSection from "@/components/HeroSection";

// First, add this import at the top of your file
import {
	Card,
	CardContent,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

const services = [
	{
		title: "Refrigerator Cleaning",
		description: "Freshen up your fridge with a deep clean inside and out.",
		icon: (
			<img
				src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom4x2TuR5dAlomP7EFuMse5X0rqt64ZLkg13W9"
				alt="Refrigerator icon"
				width={56}
				height={56}
				className="text-primary"
			/>
		),
	},
	{
		title: "Oven Cleaning",
		description:
			"Choose between a quick self-clean cycle or a thorough deep clean for a like-new shine.",
		icon: (
			<img
				src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomKOzXep3UMQcNihESfqK8VPHRBylA7XtzCI2b"
				alt="Oven icon"
				width={56}
				height={56}
				className="text-primary"
			/>
		),
	},
	{
		title: "Steam Cleaning",
		description:
			"Remove dirt and allergens from mattresses and furniture ($50 per bed, $10 per piece of furniture).",
		icon: (
			<img
				src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomC9Xu2WmdS94e3Vt5PNnp8hM7jiI6fuBvsZxD"
				alt="Steam cleaning icon"
				width={56}
				height={56}
				className="text-primary"
			/>
		),
	},
	{
		title: "Patio Cleaning",
		description: "Keep your outdoor space neat and inviting.",
		icon: (
			<img
				src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomwjMi8gNQAijzTI0JpfGRs6WMerYKm743VoaB"
				alt="Patio cleaning icon"
				width={56}
				height={56}
				className="text-primary"
			/>
		),
	},
	{
		title: "Dishwashing",
		description: "Let us handle the dishes, so you don't have to.",
		icon: (
			<img
				src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlompKsg7OmIQG02vMEqiTUtkudb5jB1eo97yKV8"
				alt="Dishwashing icon"
				width={56}
				height={56}
				className="text-primary"
			/>
		),
	},
	{
		title: "Dog Waste Removal",
		description: "A cleaner yard for a happier home.",
		icon: (
			<img
				src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomnvVHiywNq3haW9IjyTl7dbP5tZX4mrvg1GQH"
				alt="Dog waste removal icon"
				width={56}
				height={56}
				className="text-primary"
			/>
		),
	},
	{
		title: "Watering Plants",
		description: "Keep your indoor plants thriving with regular care.",
		icon: (
			<img
				src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomZMaP1AqScL928NU7WORg5Vux30lHqPhzC6Ti"
				alt="Watering plants icon"
				width={56}
				height={56}
				className="text-primary"
			/>
		),
	},
];

export default async function ResidentialPage() {
	return (
		<main className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<HeroSection>
				<div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
					<Badge className="bg-ring">SERVICES</Badge>
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
						Residential Services
					</h1>
					<p className="text-base sm:text-lg">
						A clean home protects your family, creates a comfortable
						environment, and leaves a lasting impression. We help your home
						thrive with top-quality professional cleaning.
					</p>
					<Button size="lg" className="w-full sm:w-auto">
						<Link
							href="https://clienthub.getjobber.com/client_hubs/40b56a75-dbed-4f70-b807-d9a216f025a3/public/work_request/new?source=new_webpage"
							className="w-full"
						>
							REQUEST A SERVICE
						</Link>
					</Button>
				</div>
				<div className="relative hidden md:flex w-full justify-center items-center">
					<Image
						src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomWu0pGghvM9rmixlERctSJWydYD1B0G2wqHse"
						alt="Professional residential cleaning service"
						width={400}
						height={400}
						className="object-cover rounded-lg shadow-md"
						priority
					/>
				</div>
			</HeroSection>

			{/* Our Residential Services */}
			<div
				className="flex flex-col items-center justify-center gap-8 py-24 bg-gray-100"
				id="residential"
			>

				<div className="container mx-auto px-4 text-center max-w-4xl">
					<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-primary-foreground">
						Our Residential Services
					</h3>
					<p className="text-lg mb-4 md:mb-6 mx-auto max-w-3xl">
						A clean home protects your family, creates a comfortable
						environment, and leaves a lasting impression. We help your home
						thrive with top-quality professional cleaning.
					</p>
				</div>
				<ServiceCards />
			</div>

			<section className="p-16 flex flex-col md:flex-row items-center gap-8">
				<div className="bg-white rounded-lg p-6 w-full md:w-1/2">
					<h3 className="text-5xl font-bold mb-4">Request a Quote</h3>
					<p className="text-gray-600 mb-4">
						For more than a decade, we've been delivering spotless, streak-free
						windows to homes and businesses. Formerly known as C-Thru Cleaning
						Services, we now operate under Kathy Clean, continuing our
						commitment to excellence with the same trusted quality and
						expertise.
					</p>
				</div>
				<ResidentialPriceCalculator />
			</section>

			{/* Additional Services */}
			<div className="flex flex-col items-center justify-center py-16  bg-gray-100 px-4">
				<h2 className="text-3xl font-bold mb-2 text-accent text-center pb-16">
					Additional services for a deeper clean
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
					{services.map((service, index) => (
						<Card
							key={service.title}
							className="border-gray-100 overflow-hidden h-[280px] w-[180px]"
						>
							<CardContent>
								<div className="mb-4">{service.icon}</div>
								<CardTitle className="text-lg font-semibold text-secondary-foreground">
									{service.title}
								</CardTitle>
								<CardDescription className="text-gray-600">
									{service.description}
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</main>
	);
}
