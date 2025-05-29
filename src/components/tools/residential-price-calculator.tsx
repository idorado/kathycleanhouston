"use client";
import { useState, useEffect, useCallback } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type PriceTierRecurring = {
	minSqFt: number;
	maxSqFt: number;
	weeklyBiweeklyPrice: number;
	monthlyPrice: number;
	oneTimePrice: number;
};

type PriceTierDeep = {
	minSqFt: number;
	maxSqFt: number;
	minPrice: number;
	maxPrice: number;
};

// Pricing tables based on the provided information
const RECURRING_CLEANING_PRICES: PriceTierRecurring[] = [
	{
		minSqFt: 0,
		maxSqFt: 1300,
		weeklyBiweeklyPrice: 135,
		monthlyPrice: 165,
		oneTimePrice: 185,
	},
	{
		minSqFt: 1300,
		maxSqFt: 2000,
		weeklyBiweeklyPrice: 145,
		monthlyPrice: 175,
		oneTimePrice: 195,
	},
	{
		minSqFt: 2000,
		maxSqFt: 2500,
		weeklyBiweeklyPrice: 175,
		monthlyPrice: 205,
		oneTimePrice: 225,
	},
	{
		minSqFt: 2500,
		maxSqFt: 3000,
		weeklyBiweeklyPrice: 215,
		monthlyPrice: 245,
		oneTimePrice: 265,
	},
	{
		minSqFt: 3000,
		maxSqFt: 3500,
		weeklyBiweeklyPrice: 245,
		monthlyPrice: 275,
		oneTimePrice: 295,
	},
	{
		minSqFt: 3500,
		maxSqFt: 4000,
		weeklyBiweeklyPrice: 275,
		monthlyPrice: 305,
		oneTimePrice: 325,
	},
	{
		minSqFt: 4000,
		maxSqFt: 4500,
		weeklyBiweeklyPrice: 305,
		monthlyPrice: 335,
		oneTimePrice: 355,
	},
	{
		minSqFt: 4500,
		maxSqFt: 5000,
		weeklyBiweeklyPrice: 335,
		monthlyPrice: 365,
		oneTimePrice: 385,
	},
	{
		minSqFt: 5000,
		maxSqFt: 5500,
		weeklyBiweeklyPrice: 365,
		monthlyPrice: 395,
		oneTimePrice: 415,
	},
	{
		minSqFt: 5500,
		maxSqFt: 6000,
		weeklyBiweeklyPrice: 395,
		monthlyPrice: 425,
		oneTimePrice: 445,
	},
	{
		minSqFt: 6000,
		maxSqFt: 10000,
		weeklyBiweeklyPrice: 395,
		monthlyPrice: 425,
		oneTimePrice: 445,
	},
];

const DEEP_CLEANING_PRICES: PriceTierDeep[] = [
	{ minSqFt: 700, maxSqFt: 1500, minPrice: 425, maxPrice: 475 },
	{ minSqFt: 1500, maxSqFt: 2800, minPrice: 525, maxPrice: 575 },
	{ minSqFt: 2800, maxSqFt: 3800, minPrice: 625, maxPrice: 675 },
	{ minSqFt: 4000, maxSqFt: 5000, minPrice: 725, maxPrice: 775 },
	{ minSqFt: 6000, maxSqFt: 7000, minPrice: 825, maxPrice: 875 },
];

const ADDITIONAL_SERVICES = [
	{
		id: "steam-beds",
		name: "Steam Cleaning (Beds)",
		price: 50,
		details: "Per bed",
	},
	{
		id: "steam-furniture",
		name: "Steam Cleaning (Furniture)",
		price: 10,
		details: "Per piece",
	},
	{
		id: "refrigerator-standard",
		name: "Refrigerator Cleaning (Standard)",
		price: 80,
		details: "Standard clean",
	},
	{
		id: "refrigerator-deep",
		name: "Refrigerator Cleaning (Deep)",
		price: 90,
		details: "Deep clean with expired item removal",
	},
	{
		id: "oven-self-clean",
		name: "Oven Cleaning (Self-Clean Cycle)",
		price: 20,
		details: "Quick refresh",
	},
	{
		id: "oven-deep",
		name: "Oven Cleaning (Deep)",
		price: 60,
		details: "Deep scrubbing",
	},
	{
		id: "patio-cleaning",
		name: "Patio Cleaning",
		price: 60,
		details: "Exterior patio",
	},
];

const calculatorSchema = z.object({
	serviceType: z.enum(["residential", "other"]),
	squareFeet: z.number().min(700).max(10000),
	frequency: z.enum(["weekly", "bi-weekly", "monthly", "one-time"]),
	numPets: z.number().min(0).max(10).default(0),
	numBathrooms: z.number().min(0).max(20).default(0),
	numBedrooms: z.number().min(0).max(20).default(0),
	additionalServices: z.array(z.string()).default([]),
	steamCleaningBeds: z.number().min(0).max(10).default(0),
	steamCleaningFurniture: z.number().min(0).max(20).default(0),
	fullName: z.string().min(1, "Full name is required"),
	email: z.string().email("Invalid email").min(1, "Email is required"),
	phone: z.string().min(1, "Phone number is required"),
});

export function ResidentialPriceCalculator() {
	const [estimate, setEstimate] = useState<number | null>(null);
	const [basePrice, setBasePrice] = useState<number>(0);
	const [addonsPrice, setAddonsPrice] = useState<number>(0);
	const [open, setOpen] = useState(false);

	const form = useForm<z.infer<typeof calculatorSchema>>({
		resolver: zodResolver(calculatorSchema),
		defaultValues: {
			serviceType: "residential",
			squareFeet: 1500,
			frequency: "weekly",
			numPets: 0,
			numBathrooms: 0,
			numBedrooms: 0,
			additionalServices: [],
			steamCleaningBeds: 0,
			steamCleaningFurniture: 0,
			fullName: "",
			email: "",
			phone: "",
		},
	});

	const serviceType = form.watch("serviceType");
	const squareFeet = form.watch("squareFeet");
	const frequency = form.watch("frequency");
	const numPets = form.watch("numPets");
	const numBathrooms = form.watch("numBathrooms") || 0;
	const numBedrooms = form.watch("numBedrooms") || 0;
	const additionalServices = form.watch("additionalServices") || [];
	const steamCleaningBeds = form.watch("steamCleaningBeds") || 0;
	const steamCleaningFurniture = form.watch("steamCleaningFurniture") || 0;

	// Define calculate function with useCallback to avoid dependency issues
	const calculateEstimate = useCallback(() => {
		let base = 0;
		let addons = 0;

		// Calculate base price based on service type
		if (serviceType === "residential") {
			// Find the appropriate price tier based on square footage
			const priceTier = RECURRING_CLEANING_PRICES.find(
				(tier) => squareFeet >= tier.minSqFt && squareFeet < tier.maxSqFt,
			);

			// Get default tier if no match found
			const finalPriceTier: PriceTierRecurring =
				priceTier || (RECURRING_CLEANING_PRICES.at(-1) as PriceTierRecurring);

			// Apply pricing based on frequency
			if (frequency === "monthly") {
				base = finalPriceTier.monthlyPrice;
			} else if (frequency === "one-time") {
				base = finalPriceTier.oneTimePrice;
			} else {
				// Weekly or bi-weekly
				base = finalPriceTier.weeklyBiweeklyPrice;
			}
		} else if (serviceType === "other" ) {
			// Find the appropriate deep cleaning price tier
			const deepCleaningTier = DEEP_CLEANING_PRICES.find(
				(tier) => squareFeet >= tier.minSqFt && squareFeet < tier.maxSqFt,
			);

			if (deepCleaningTier) {
				// For deep cleaning, use the average of min and max price as an estimate
				base = Math.round(
					(deepCleaningTier.minPrice + deepCleaningTier.maxPrice) / 2,
				);
			} else {
				// Default to the highest tier if no match is found
				const lastTier: PriceTierDeep = DEEP_CLEANING_PRICES.at(
					-1,
				) as PriceTierDeep;
				base = Math.round((lastTier.minPrice + lastTier.maxPrice) / 2);
			}
		} else {
			// For other services, we'll just use a placeholder estimate
			// In a real implementation, you would have pricing for each service type
			base = 300; // Placeholder price
		}

		// Add pet fee - $15 for each additional pet (beyond the first one)
		if (numPets > 1) {
			addons += (numPets - 1) * 15;
		}

		// Additional services
		for (const service of additionalServices ?? []) {
			const serviceDetails = ADDITIONAL_SERVICES.find((s) => s.id === service);
			if (serviceDetails) {
				addons += serviceDetails.price;
			}
		}

		// Steam cleaning for beds and furniture
		addons += (steamCleaningBeds ?? 0) * 50; // $50 per bed
		addons += (steamCleaningFurniture ?? 0) * 10; // $10 per furniture piece


		setBasePrice(base);
		setAddonsPrice(addons);
		setEstimate(base + addons);
	}, [
		serviceType,
		squareFeet,
		frequency,
		numPets,
		additionalServices,
		steamCleaningBeds,
		steamCleaningFurniture,
	]);

	// Calculate estimate on initial render
	useEffect(() => {
		calculateEstimate();
	}, [calculateEstimate]);

	const onSubmitCalculator = async (data: z.infer<typeof calculatorSchema>) => {
		setOpen(false);
	};
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<Card className="w-full shadow-md">
				<CardHeader className="rounded-t-lg">
					<CardTitle className="text-2xl text-gray-900">
						Residential Cleaning Price Calculator
					</CardTitle>
					<CardDescription className="text-gray-600">
						Get an instant estimate for your home cleaning needs
					</CardDescription>
				</CardHeader>
				<CardContent className="p-6">
					<form onSubmit={form.handleSubmit(onSubmitCalculator)}>
						<Form {...form}>
							<div className="space-y-6">
								<Tabs
									defaultValue="residential"
									value={serviceType}
									onValueChange={(value) =>
										form.setValue(
											"serviceType",
											value as "residential" | "other",
										)
									}
									className="w-full"
								>
									<TabsList className="w-full rounded-lg">
										<TabsTrigger value="residential" className="">
											Residential Cleaning
										</TabsTrigger>
									</TabsList>
									<TabsContent value="residential" className="pt-3 px-2">
										<p className="text-sm text-gray-600 mb-3 italic border-l-4 border-gray-200 pl-3">
											Our residential cleaning services are perfect for
											maintaining a consistently clean home.
										</p>
									</TabsContent>
								</Tabs>
								<FormField
									control={form.control}
									name="squareFeet"
									render={({ field }) => (
										<FormItem className="bg-gray-50 p-3 rounded-lg mb-3">
											<FormLabel
												htmlFor="squareFeet"
												className="text-gray-900 flex justify-between"
											>
												<span>Home Size</span>
												<span className="font-semibold">
													{field.value} sq ft
												</span>
											</FormLabel>
											<FormControl>
												<div className="pt-3">
													<Slider
														id="squareFeet"
														min={700}
														max={10000}
														step={100}
														value={[field.value]}
														onValueChange={(value) => {
															field.onChange(value[0]);
															calculateEstimate();
														}}
														className="cursor-pointer"
													/>
												</div>
											</FormControl>
											<div className="flex justify-between text-xs text-gray-500 mt-1">
												<span>700 sq ft</span>
												<span>10,000 sq ft</span>
											</div>
											<FormMessage />
										</FormItem>
									)}
								/>
								{serviceType === "residential" && (
									<FormField
										control={form.control}
										name="frequency"
										render={({ field }) => (
											<FormItem className="bg-gray-50 p-3 rounded-lg mb-3">
												<FormLabel
													htmlFor="frequency"
													className="text-gray-900"
												>
													Cleaning Frequency
												</FormLabel>
												<Select
													value={field.value}
													onValueChange={(value) => {
														field.onChange(value);
														calculateEstimate();
													}}
												>
													<FormControl>
														<SelectTrigger
															id="frequency"
															className="border-gray-200 focus:ring-gray-200"
														>
															<SelectValue placeholder="Select frequency" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value="weekly">
															Weekly (Best Value)
														</SelectItem>
														<SelectItem value="bi-weekly">
															Bi-Weekly (Most Popular)
														</SelectItem>
														<SelectItem value="monthly">Monthly</SelectItem>
														<SelectItem value="one-time">One-Time</SelectItem>
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>
								)}
								<div className="bg-gray-50 p-3 rounded-lg">
									<h3 className="text-gray-900 font-medium mb-2">
										Home Information
									</h3>
									<div className="grid grid-cols-2 gap-3 mb-3">
										<FormField
											control={form.control}
											name="numBedrooms"
											render={({ field }) => (
												<FormItem>
													<FormLabel htmlFor="numBedrooms" className="text-sm">
														Bedrooms
													</FormLabel>
													<FormControl>
														<Input
															id="numBedrooms"
															type="number"
															min={0}
															max={20}
															{...field}
															onChange={(e) => {
																field.onChange(
																	Number.parseInt(e.target.value) || 0,
																);
																calculateEstimate();
															}}
															className="border-gray-200 focus:ring-gray-200 h-9"
														/>
													</FormControl>
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="numBathrooms"
											render={({ field }) => (
												<FormItem>
													<FormLabel htmlFor="numBathrooms" className="text-sm">
														Bathrooms
													</FormLabel>
													<FormControl>
														<Input
															id="numBathrooms"
															type="number"
															min={0}
															max={20}
															{...field}
															onChange={(e) => {
																field.onChange(
																	Number.parseInt(e.target.value) || 0,
																);
																calculateEstimate();
															}}
															className="border-gray-200 focus:ring-gray-200 h-9"
														/>
													</FormControl>
												</FormItem>
											)}
										/>
									</div>
									<FormField
										control={form.control}
										name="numPets"
										render={({ field }) => (
											<FormItem>
												<FormLabel htmlFor="numPets" className="text-sm">
													Number of Pets
												</FormLabel>
												<FormControl>
													<Input
														id="numPets"
														type="number"
														min={0}
														max={10}
														{...field}
														onChange={(e) => {
															field.onChange(
																Number.parseInt(e.target.value) || 0,
															);
															calculateEstimate();
														}}
														className="border-gray-200 focus:ring-gray-200 h-9"
													/>
												</FormControl>
												<p className="text-xs text-gray-500 mt-1">
													Each additional pet (beyond the first) adds $15 to
													your service.
												</p>
											</FormItem>
										)}
									/>
								</div>

								<div className="bg-gray-50 p-3 rounded-lg mt-3">
									<h3 className="text-gray-900 font-medium mb-2">
										Additional Services
									</h3>

									<div className="space-y-3">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
											<div>
												<h4 className="text-sm font-medium mb-2">
													Refrigerator Cleaning
												</h4>
												<FormField
													control={form.control}
													name="additionalServices"
													render={({ field }) => (
														<div className="space-y-2">
															<FormItem className="flex items-start space-x-2 rounded-md border border-gray-200 bg-white p-2 hover:bg-gray-50 transition-colors">
																<FormControl>
																	<Checkbox
																		checked={field.value?.includes(
																			"refrigerator-standard",
																		)}
																		onCheckedChange={(checked) => {
																			const updatedValue = checked
																				? [
																						...field.value.filter(
																							(v) => v !== "refrigerator-deep",
																						),
																						"refrigerator-standard",
																					]
																				: field.value?.filter(
																						(v) =>
																							v !== "refrigerator-standard",
																					);
																			field.onChange(updatedValue);
																			calculateEstimate();
																		}}
																		className="data-[state=checked]:bg-gray-600 data-[state=checked]:border-gray-600 mt-0.5"
																	/>
																</FormControl>
																<div>
																	<FormLabel className="text-sm font-medium cursor-pointer m-0">
																		Standard Clean ($80)
																	</FormLabel>
																	<p className="text-xs text-gray-500">
																		Basic refrigerator cleaning
																	</p>
																</div>
															</FormItem>
															<FormItem className="flex items-start space-x-2 rounded-md border border-gray-200 bg-white p-2 hover:bg-gray-50 transition-colors">
																<FormControl>
																	<Checkbox
																		checked={field.value?.includes(
																			"refrigerator-deep",
																		)}
																		onCheckedChange={(checked) => {
																			const updatedValue = checked
																				? [
																						...field.value.filter(
																							(v) =>
																								v !== "refrigerator-standard",
																						),
																						"refrigerator-deep",
																					]
																				: field.value?.filter(
																						(v) => v !== "refrigerator-deep",
																					);
																			field.onChange(updatedValue);
																			calculateEstimate();
																		}}
																		className="data-[state=checked]:bg-gray-600 data-[state=checked]:border-gray-600 mt-0.5"
																	/>
																</FormControl>
																<div>
																	<FormLabel className="text-sm font-medium cursor-pointer m-0">
																		Deep Clean ($90)
																	</FormLabel>
																	<p className="text-xs text-gray-500">
																		We check everything and toss expired items
																	</p>
																</div>
															</FormItem>
														</div>
													)}
												/>
											</div>

											<div>
												<h4 className="text-sm font-medium mb-2">
													Oven Cleaning
												</h4>
												<FormField
													control={form.control}
													name="additionalServices"
													render={({ field }) => (
														<div className="space-y-2">
															<FormItem className="flex items-start space-x-2 rounded-md border border-gray-200 bg-white p-2 hover:bg-gray-50 transition-colors">
																<FormControl>
																	<Checkbox
																		checked={field.value?.includes(
																			"oven-self-clean",
																		)}
																		onCheckedChange={(checked) => {
																			const updatedValue = checked
																				? [
																						...field.value.filter(
																							(v) => v !== "oven-deep",
																						),
																						"oven-self-clean",
																					]
																				: field.value?.filter(
																						(v) => v !== "oven-self-clean",
																					);
																			field.onChange(updatedValue);
																			calculateEstimate();
																		}}
																		className="data-[state=checked]:bg-gray-600 data-[state=checked]:border-gray-600 mt-0.5"
																	/>
																</FormControl>
																<div>
																	<FormLabel className="text-sm font-medium cursor-pointer m-0">
																		Self-Cleaning Cycle ($20)
																	</FormLabel>
																	<p className="text-xs text-gray-500">
																		Quick refresh
																	</p>
																</div>
															</FormItem>
															<FormItem className="flex items-start space-x-2 rounded-md border border-gray-200 bg-white p-2 hover:bg-gray-50 transition-colors">
																<FormControl>
																	<Checkbox
																		checked={field.value?.includes("oven-deep")}
																		onCheckedChange={(checked) => {
																			const updatedValue = checked
																				? [
																						...field.value.filter(
																							(v) => v !== "oven-self-clean",
																						),
																						"oven-deep",
																					]
																				: field.value?.filter(
																						(v) => v !== "oven-deep",
																					);
																			field.onChange(updatedValue);
																			calculateEstimate();
																		}}
																		className="data-[state=checked]:bg-gray-600 data-[state=checked]:border-gray-600 mt-0.5"
																	/>
																</FormControl>
																<div>
																	<FormLabel className="text-sm font-medium cursor-pointer m-0">
																		Deep Clean ($60)
																	</FormLabel>
																	<p className="text-xs text-gray-500">
																		Manual deep scrubbing
																	</p>
																</div>
															</FormItem>
														</div>
													)}
												/>
											</div>
										</div>

										<div className="space-y-3">
											<h4 className="text-sm font-medium mb-2">
												Steam Cleaning
											</h4>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
												<FormField
													control={form.control}
													name="steamCleaningBeds"
													render={({ field }) => (
														<FormItem>
															<FormLabel
																htmlFor="steamCleaningBeds"
																className="text-sm"
															>
																Beds ($50 each)
															</FormLabel>
															<FormControl>
																<Input
																	id="steamCleaningBeds"
																	type="number"
																	min={0}
																	max={10}
																	{...field}
																	onChange={(e) => {
																		field.onChange(
																			Number.parseInt(e.target.value) || 0,
																		);
																		calculateEstimate();
																	}}
																	className="border-gray-200 focus:ring-gray-200 h-9"
																/>
															</FormControl>
														</FormItem>
													)}
												/>

												<FormField
													control={form.control}
													name="steamCleaningFurniture"
													render={({ field }) => (
														<FormItem>
															<FormLabel
																htmlFor="steamCleaningFurniture"
																className="text-sm"
															>
																Furniture Pieces ($10 each)
															</FormLabel>
															<FormControl>
																<Input
																	id="steamCleaningFurniture"
																	type="number"
																	min={0}
																	max={20}
																	{...field}
																	onChange={(e) => {
																		field.onChange(
																			Number.parseInt(e.target.value) || 0,
																		);
																		calculateEstimate();
																	}}
																	className="border-gray-200 focus:ring-gray-200 h-9"
																/>
															</FormControl>
														</FormItem>
													)}
												/>
											</div>
										</div>

										<FormField
											control={form.control}
											name="additionalServices"
											render={({ field }) => (
												<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
													<FormItem className="flex items-start space-x-2 rounded-md border border-gray-200 bg-white p-2 hover:bg-gray-50 transition-colors">
														<FormControl>
															<Checkbox
																checked={field.value?.includes(
																	"patio-cleaning",
																)}
																onCheckedChange={(checked) => {
																	const updatedValue = checked
																		? [...field.value, "patio-cleaning"]
																		: field.value?.filter(
																				(v) => v !== "patio-cleaning",
																			);
																	field.onChange(updatedValue);
																	calculateEstimate();
																}}
																className="data-[state=checked]:bg-gray-600 data-[state=checked]:border-gray-600 mt-0.5"
															/>
														</FormControl>
														<div>
															<FormLabel className="text-sm font-medium cursor-pointer m-0">
																Patio Cleaning ($60)
															</FormLabel>
															<p className="text-xs text-gray-500">
																Exterior patio cleaning
															</p>
														</div>
													</FormItem>

													<FormItem className="flex items-start space-x-2 rounded-md border border-gray-200 bg-white p-2 hover:bg-gray-50 transition-colors">
														<FormControl>
															<Checkbox
																checked={field.value?.includes(
																	"plant-watering",
																)}
																onCheckedChange={(checked) => {
																	const updatedValue = checked
																		? [...field.value, "plant-watering"]
																		: field.value?.filter(
																				(v) => v !== "plant-watering",
																			);
																	field.onChange(updatedValue);
																	calculateEstimate();
																}}
																className="data-[state=checked]:bg-gray-600 data-[state=checked]:border-gray-600 mt-0.5"
															/>
														</FormControl>
														<div>
															<FormLabel className="text-sm font-medium cursor-pointer m-0">
																Plant Watering ($50)
															</FormLabel>
															<p className="text-xs text-gray-500">
																Indoor plants
															</p>
														</div>
													</FormItem>
												</div>
											)}
										/>
									</div>
								</div>

								<Separator className="my-1" />
								<div className="bg-accent-50 p-3 rounded-lg">
									<h3 className="text-lg font-semibold mb-2">
										Cleaning Invoice
									</h3>
									<div className="space-y-2">
										{/* Base service */}
										<div className="flex justify-between text-sm">
											<span className="font-medium">
												{serviceType === "residential"
													? `${frequency.charAt(0).toUpperCase() + frequency.slice(1)} Cleaning (${squareFeet} sq ft)`
													: `${serviceType === "other" ? serviceType.charAt(0).toUpperCase() + serviceType.slice(1) : "deep"} Cleaning (${squareFeet} sq ft)`}
											</span>
											<span className="font-medium">${basePrice}</span>
										</div>

										{/* Pet fee */}
										{numPets > 1 && (
											<div className="flex justify-between text-sm">
												<span>
													Pet Fee ({numPets - 1} additional{" "}
													{numPets - 1 === 1 ? "pet" : "pets"})
												</span>
												<span>${(numPets - 1) * 15}</span>
											</div>
										)}

										{/* Additional services */}
										{additionalServices?.map((service) => {
											const serviceDetails = ADDITIONAL_SERVICES.find(
												(s) => s.id === service,
											);
											if (!serviceDetails) return null;
											return (
												<div
													key={service}
													className="flex justify-between text-sm"
												>
													<span>{serviceDetails.name}</span>
													<span>${serviceDetails.price}</span>
												</div>
											);
										})}

										{/* Steam cleaning */}
										{(steamCleaningBeds ?? 0) > 0 && (
											<div className="flex justify-between text-sm">
												<span>
													Steam Cleaning - Beds ({steamCleaningBeds}{" "}
													{steamCleaningBeds === 1 ? "bed" : "beds"})
												</span>
												<span>${steamCleaningBeds * 50}</span>
											</div>
										)}
										{(steamCleaningFurniture ?? 0) > 0 && (
											<div className="flex justify-between text-sm">
												<span>
													Steam Cleaning - Furniture ({steamCleaningFurniture}{" "}
													{steamCleaningFurniture === 1 ? "piece" : "pieces"})
												</span>
												<span>${steamCleaningFurniture * 10}</span>
											</div>
										)}

										<Separator className="my-2" />
										<div className="flex justify-between text-xl font-bold text-accent-800">
											<span>Estimated Total:</span>
											<span>${estimate}</span>
										</div>
										<p className="text-xs text-gray-600 mt-1 italic">
											This is an estimate. Final pricing may vary based on
											specific home conditions and requirements.
										</p>
									</div>
								</div>
								<DialogTrigger asChild>
									<Button
										type="button"
										onClick={() => setOpen(true)}
										className="w-full py-4 text-lg font-semibold transition-all hover:scale-[1.02]"
									>
										Request a Free Quote
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle className="text-foreground">
											Request a Quote
										</DialogTitle>
									</DialogHeader>
									<FormField
										control={form.control}
										name="fullName"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-foreground">
													Full Name
												</FormLabel>
												<FormControl>
													<Input
														placeholder="Enter your full name"
														{...field}
														className="text-foreground"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-foreground">Email</FormLabel>
												<FormControl>
													<Input
														type="email"
														placeholder="Enter your email"
														{...field}
														className="text-foreground"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="phone"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-foreground">Phone</FormLabel>
												<FormControl>
													<Input
														type="tel"
														placeholder="Enter your phone number"
														{...field}
														className="text-foreground"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<Button
										type="button"
										onClick={() => {
											setOpen(false);
											onSubmitCalculator(form.getValues());
										}}
										className="w-full mt-2"
										variant="default"
									>
										Submit
									</Button>
								</DialogContent>
							</div>
						</Form>
					</form>
				</CardContent>
			</Card>
		</Dialog>
	);
}
