"use server"
const companies = [
	{
		name: "Whole Foods",
		logo: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom1BSvmBcbi0AF12cfU9NxXt6GPROaEWyeIhLd",
	},
	{
		name: "Chuck & Dons",
		logo: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomWnYvJlhvM9rmixlERctSJWydYD1B0G2wqHse",
	},
	{
		name: "Starbucks",
		logo: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom8eXAnJKhMCiFKE7nTrZgcpJWtXBskwHlzmqf",
	},
	{
		name: "Fedex",
		logo: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomZMWdw6sScL928NU7WORg5Vux30lHqPhzC6Ti",
	},
	{
		name: "Floyd's 99 Barbershop",
		logo: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomkZ7fk9kBMKEtR4Y9c3GgQrxuo7N6XZ2LnleT",
	},
	{
		name: "Lululemon",
		logo: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomgcagMY07oMnJUltKIuW62gREasYvcL4ed0kp",
	},
	{
		name: "Petsmart",
		logo: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom8u5LbdSKhMCiFKE7nTrZgcpJWtXBskwHlzmq",
	},
	{
		name: "Rivian",
		logo: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomCDvQ2DWmdS94e3Vt5PNnp8hM7jiI6fuBvsZx",
	},
	{
		name: "Tesla",
		logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
		className: "scale-75",
	},
	{
		name: "Gorjana",
		logo: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomKIrAmFUMQcNihESfqK8VPHRBylA7XtzCI2bd",
	},
];

export default async function CompaniesCountOnUs() {
	return (
		<section className="py-12 bg-white" id="companies-count-on-us">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
					Companies that count on us
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
					{companies.map((company) => (
						<div key={company.name} className="flex flex-col items-center">
							<div className="h-20 w-20 mb-2 rounded-full overflow-hidden">
								<img
									src={company.logo}
									alt={company.name + " logo"}
									className={`h-full w-full object-contain ${company.className || ""}`}
									loading="lazy"
								/>
							</div>
							<span className="text-xs text-center text-gray-700 font-medium">
								{company.name}
							</span>
						</div>
					))}
				</div>
			</div>
			<h3 className="text-center text-gray-600 mt-12 text-xl font-semibold">
				... and many local businesses
			</h3>
		</section>
	);
}
