import HeroSection from "@/components/HeroSection";
import BusinessCleaningEstimateForm from "@/components/forms/BusinessCleaningEstimateForm";
import IndustriesSpecialized from "@/components/sections/industries-specialized";

export default async function CommercialPage() {
	const industries = [
		{
			title: "Preschools & Daycares",
			description:
				"Specialized cleaning for safe, healthy environments for children and staff.",
			icon: (
				<img
					src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOa14iZLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu"
					alt="Preschools & Daycares"
				/>
			),
		},
		{
			title: "Pet Stores",
			description: "Clean, odor-free spaces for pets and customers alike.",
			icon: (
				<img
					src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom89FJzAKhMCiFKE7nTrZgcpJWtXBskwHlzmqf"
					alt="Pet Stores"
				/>
			),
		},
		{
			title: "Medical Offices & Healthcare",
			description:
				"Strict protocols for hygienic, compliant healthcare environments.",
			icon: (
				<img
					src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUMazhBuxbLyY5TVln2vGePNI6BEHMuo4rXcz"
					alt="Medical Offices & Healthcare"
				/>
			),
		},
		{
			title: "HOA's",
			description:
				"Community-focused cleaning for shared living spaces and amenities.",
			icon: (
				<img
					src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUWa1k9uxbLyY5TVln2vGePNI6BEHMuo4rXcz"
					alt="HOA's"
				/>
			),
		},
		{
			title: "Fitness Centers, Gyms & Studios",
			description:
				"Sanitized equipment and spaces for healthy, active lifestyles.",
			icon: (
				<img
					src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom3s8OSHQ7wMhU5pckd8lfSqEHr2VL9OoNGxPs"
					alt="Fitness Centers, Gyms & Studios"
				/>
			),
		},
		{
			title: "Facility Management Companies",
			description:
				"Comprehensive solutions for large and multi-site properties.",
			icon: (
				<img
					src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomQrFNlQz8aAfRP5i946jBEorHLxSGqWcp3OkX"
					alt="Facility Management Companies"
				/>
			),
		},
	];

	return (
		<main className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<HeroSection
				category="SERVICES"
				title={"Janitorial Services\nby Kathy Clean"}
				description="A clean workspace protects your people, boosts productivity, and leaves a lasting impression. We help your business thrive with top-quality professional cleaning."
				linkUrl="#request-quote"
				linkText="REQUEST A SERVICE"
				imgUrl="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom8nF7NwKhMCiFKE7nTrZgcpJWtXBskwHlzmqf"
				imgAlt="Professional commercial cleaning service"
				imgWidth={400}
				imgHeight={400}
			/>

			<IndustriesSpecialized industries={industries} />

			<BusinessCleaningEstimateForm />
		</main>
	);
}
