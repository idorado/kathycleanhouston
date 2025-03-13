"use client"
import { useState, useEffect, useCallback } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type PriceTierRecurring = {
  minSqFt: number
  maxSqFt: number
  weeklyBiweeklyPrice: number
  monthlyPrice: number
};

type PriceTierDeep = {
  minSqFt: number
  maxSqFt: number
  minPrice: number
  maxPrice: number
};

// Pricing tables based on the provided information
const RECURRING_CLEANING_PRICES: PriceTierRecurring[] = [
  { minSqFt: 0, maxSqFt: 1500, weeklyBiweeklyPrice: 125, monthlyPrice: 155 },
  { minSqFt: 1500, maxSqFt: 2000, weeklyBiweeklyPrice: 135, monthlyPrice: 165 },
  { minSqFt: 2000, maxSqFt: 2500, weeklyBiweeklyPrice: 165, monthlyPrice: 195 },
  { minSqFt: 2500, maxSqFt: 3500, weeklyBiweeklyPrice: 205, monthlyPrice: 235 },
  { minSqFt: 3500, maxSqFt: 4000, weeklyBiweeklyPrice: 235, monthlyPrice: 265 },
  { minSqFt: 4000, maxSqFt: 4500, weeklyBiweeklyPrice: 265, monthlyPrice: 295 },
  { minSqFt: 4500, maxSqFt: 5000, weeklyBiweeklyPrice: 295, monthlyPrice: 325 },
  { minSqFt: 5000, maxSqFt: 5500, weeklyBiweeklyPrice: 325, monthlyPrice: 355 },
  { minSqFt: 5500, maxSqFt: 6000, weeklyBiweeklyPrice: 355, monthlyPrice: 385 },
  { minSqFt: 6000, maxSqFt: 10000, weeklyBiweeklyPrice: 385, monthlyPrice: 415 },
]

const DEEP_CLEANING_PRICES: PriceTierDeep[] = [
  { minSqFt: 700, maxSqFt: 1500, minPrice: 425, maxPrice: 475 },
  { minSqFt: 1500, maxSqFt: 2800, minPrice: 525, maxPrice: 575 },
  { minSqFt: 2800, maxSqFt: 3800, minPrice: 625, maxPrice: 675 },
  { minSqFt: 4000, maxSqFt: 5000, minPrice: 725, maxPrice: 775 },
  { minSqFt: 6000, maxSqFt: 7000, minPrice: 825, maxPrice: 875 },
]

const ADDITIONAL_SERVICES = [
  { id: 'steam-cleaning', name: 'Steam Cleaning (Beds/Pillows, Furniture)', price: 30, details: 'Per item' },
  { id: 'refrigerator', name: 'Refrigerator Cleaning', price: 85, details: 'Deep cleaned' },
  { id: 'oven-self-clean', name: 'Oven Cleaning (Self-Clean Cycle)', price: 20, details: 'Quick refresh' },
  { id: 'oven-manual', name: 'Oven Cleaning (Manual Scrubbing)', price: 60, details: 'Deep scrubbing' },
  { id: 'window-in-out', name: 'Window Cleaning (In & Out)', price: 10, details: 'Per pane' },
  { id: 'window-one-side', name: 'Window Cleaning (One Side)', price: 5, details: 'Per pane' },
]

const calculatorSchema = z.object({
  serviceType: z.enum(['residential', 'other']),
  squareFeet: z.number().min(700).max(10000),
  frequency: z.enum(['weekly', 'bi-weekly', 'monthly', 'one-time']),
  otherService: z.enum(['deep', 'move-in-out', 'post-construction', 'pressure-washing', 'solar-panel', 'window-washing']).optional(),
  windowPanes: z.number().min(0).max(100).optional(),
  windowPanesOneSide: z.number().min(0).max(100).optional(),
  hasPets: z.boolean().default(false),
  numBathrooms: z.number().min(0).max(20).default(0),
  numBedrooms: z.number().min(0).max(20).default(0)
})

export function ResidentialPriceCalculator() {
  const [estimate, setEstimate] = useState<number | null>(null);
  const [basePrice, setBasePrice] = useState<number>(0);
  const [addonsPrice, setAddonsPrice] = useState<number>(0);
  
  const form = useForm<z.infer<typeof calculatorSchema>>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      serviceType: 'residential',
      squareFeet: 1500,
      frequency: 'weekly',
      otherService: 'deep',
      windowPanes: 0,
      windowPanesOneSide: 0,
      hasPets: false,
      numBathrooms: 0,
      numBedrooms: 0
    }
  });

  const serviceType = form.watch('serviceType');
  const squareFeet = form.watch('squareFeet');
  const frequency = form.watch('frequency');
  const otherService = form.watch('otherService');
  const windowPanes = form.watch('windowPanes') || 0;
  const windowPanesOneSide = form.watch('windowPanesOneSide') || 0;
  const hasPets = form.watch('hasPets');
  const numBathrooms = form.watch('numBathrooms') || 0;
  const numBedrooms = form.watch('numBedrooms') || 0;

  // Define calculate function with useCallback to avoid dependency issues
  const calculateEstimate = useCallback(() => {
    let base = 0;
    let addons = 0;
    
    // Calculate base price based on service type
    if (serviceType === 'residential') {
      // Find the appropriate price tier based on square footage
      const priceTier = RECURRING_CLEANING_PRICES.find(
        tier => squareFeet >= tier.minSqFt && squareFeet < tier.maxSqFt
      );
      
      // Get default tier if no match found
      const finalPriceTier: PriceTierRecurring = priceTier || RECURRING_CLEANING_PRICES.at(-1) as PriceTierRecurring;
      
      // Apply pricing based on frequency
      if (frequency === 'monthly') {
        base = finalPriceTier.monthlyPrice;
      } else if (frequency === 'one-time') {
        // One-time cleaning is $30 more than monthly
        base = finalPriceTier.monthlyPrice + 30;
      } else {
        // Weekly or bi-weekly
        base = finalPriceTier.weeklyBiweeklyPrice;
      }
    } else if (serviceType === 'other' && otherService === 'deep') {
      // Find the appropriate deep cleaning price tier
      const deepCleaningTier = DEEP_CLEANING_PRICES.find(
        tier => squareFeet >= tier.minSqFt && squareFeet < tier.maxSqFt
      );
      
      if (deepCleaningTier) {
        // For deep cleaning, use the average of min and max price as an estimate
        base = Math.round((deepCleaningTier.minPrice + deepCleaningTier.maxPrice) / 2);
      } else {
        // Default to the highest tier if no match is found
        const lastTier: PriceTierDeep = DEEP_CLEANING_PRICES.at(-1) as PriceTierDeep;
        base = Math.round((lastTier.minPrice + lastTier.maxPrice) / 2);
      }
    } else {
      // For other services, we'll just use a placeholder estimate
      // In a real implementation, you would have pricing for each service type
      base = 300; // Placeholder price
    }
    
    // Add window cleaning costs
    addons += (windowPanes * 10) + (windowPanesOneSide * 5);
    
    setBasePrice(base);
    setAddonsPrice(addons);
    setEstimate(base + addons);
  }, [serviceType, squareFeet, frequency, otherService, windowPanes, windowPanesOneSide]);

  // Calculate estimate on initial render
  useEffect(() => {
    calculateEstimate();
  }, [calculateEstimate]);

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-t-lg">
        <CardTitle className="text-2xl text-accent-800">Residential Cleaning Price Calculator</CardTitle>
        <CardDescription className="text-accent-600">
          Get an instant estimate for your home cleaning needs
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <div className="space-y-8">
            <Tabs 
              defaultValue="residential" 
              value={serviceType}
              onValueChange={(value) => form.setValue('serviceType', value as 'residential' | 'other')}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-2 rounded-lg">
                <TabsTrigger value="residential" className="data-[state=active]:bg-accent-600 data-[state=active]:text-white">Residential Cleaning</TabsTrigger>
                <TabsTrigger value="other" className="data-[state=active]:bg-accent-600 data-[state=active]:text-white">Other Residential Services</TabsTrigger>
              </TabsList>
              <TabsContent value="residential" className="pt-4 px-2">
                <p className="text-sm text-gray-600 mb-4 italic border-l-4 border-accent-200 pl-3">
                  Our residential cleaning services are perfect for maintaining a consistently clean home.
                </p>
              </TabsContent>
              <TabsContent value="other" className="pt-4 px-2">
                <p className="text-sm text-gray-600 mb-4 italic border-l-4 border-accent-200 pl-3">
                  We offer a variety of specialized residential services to meet your specific cleaning needs.
                </p>
                <FormField
                  control={form.control}
                  name="otherService"
                  render={({ field }) => (
                    <FormItem className="bg-gray-50 p-4 rounded-lg mb-4">
                      <FormLabel htmlFor="otherService" className="text-accent-800">Select Service</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={(value) => {
                          field.onChange(value);
                          calculateEstimate();
                        }}
                      >
                        <FormControl>
                          <SelectTrigger id="otherService" className="border-accent-200 focus:ring-accent-500">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="deep">Deep Cleaning</SelectItem>
                          <SelectItem value="move-in-out">Move-In/Move-Out Cleaning</SelectItem>
                          <SelectItem value="post-construction">Post-Construction Cleaning</SelectItem>
                          <SelectItem value="pressure-washing">Pressure Washing</SelectItem>
                          <SelectItem value="solar-panel">Solar Panel Cleaning</SelectItem>
                          <SelectItem value="window-washing">Window Washing</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>

            <FormField
              control={form.control}
              name="squareFeet"
              render={({ field }) => (
                <FormItem className="bg-gray-50 p-4 rounded-lg">
                  <FormLabel htmlFor="squareFeet" className="text-accent-800 flex justify-between">
                    <span>Home Size</span>
                    <span className="font-semibold">{field.value} sq ft</span>
                  </FormLabel>
                  <FormControl>
                    <div className="pt-4">
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

            {serviceType === 'residential' && (
              <FormField
                control={form.control}
                name="frequency"
                render={({ field }) => (
                  <FormItem className="bg-gray-50 p-4 rounded-lg">
                    <FormLabel htmlFor="frequency" className="text-accent-800">Cleaning Frequency</FormLabel>
                    <Select
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                        calculateEstimate();
                      }}
                    >
                      <FormControl>
                        <SelectTrigger id="frequency" className="border-accent-200 focus:ring-accent-500">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly (Best Value)</SelectItem>
                        <SelectItem value="bi-weekly">Bi-Weekly (Most Popular)</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="one-time">One-Time</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-accent-800 font-medium mb-3">Home Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FormField
                  control={form.control}
                  name="numBedrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="numBedrooms">Number of Bedrooms</FormLabel>
                      <FormControl>
                        <Input
                          id="numBedrooms"
                          type="number"
                          min={0}
                          max={20}
                          {...field}
                          onChange={(e) => {
                            field.onChange(Number.parseInt(e.target.value) || 0);
                            calculateEstimate();
                          }}
                          className="border-accent-200 focus:ring-accent-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numBathrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="numBathrooms">Number of Bathrooms</FormLabel>
                      <FormControl>
                        <Input
                          id="numBathrooms"
                          type="number"
                          min={0}
                          max={20}
                          {...field}
                          onChange={(e) => {
                            field.onChange(Number.parseInt(e.target.value) || 0);
                            calculateEstimate();
                          }}
                          className="border-accent-200 focus:ring-accent-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="hasPets"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-gray-200 bg-white p-3 hover:bg-accent-50 transition-colors">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(checked) => {
                          field.onChange(checked);
                          calculateEstimate();
                        }}
                        className="data-[state=checked]:bg-accent-600 data-[state=checked]:border-accent-600"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-medium cursor-pointer">
                        Any pets in the home?
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-accent-800 font-medium mb-3">Window Cleaning</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="windowPanes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="windowPanes" className="flex justify-between">
                        <span>Window Panes (In & Out)</span>
                        <span className="text-accent-600 font-semibold">$10 each</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="windowPanes"
                          type="number"
                          min={0}
                          max={100}
                          {...field}
                          onChange={(e) => {
                            field.onChange(Number.parseInt(e.target.value) || 0);
                            calculateEstimate();
                          }}
                          className="border-accent-200 focus:ring-accent-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="windowPanesOneSide"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="windowPanesOneSide" className="flex justify-between">
                        <span>Window Panes (One Side)</span>
                        <span className="text-accent-600 font-semibold">$5 each</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="windowPanesOneSide"
                          type="number"
                          min={0}
                          max={100}
                          {...field}
                          onChange={(e) => {
                            field.onChange(Number.parseInt(e.target.value) || 0);
                            calculateEstimate();
                          }}
                          className="border-accent-200 focus:ring-accent-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Separator className="my-2" />

            <div className="bg-accent-50 p-4 rounded-lg">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Base Price:</span>
                  <span className="font-medium">${basePrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Additional Services:</span>
                  <span className="font-medium">${addonsPrice}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-xl font-bold text-accent-800">
                  <span>Estimated Total:</span>
                  <span>${estimate}</span>
                </div>
                <p className="text-xs text-gray-600 mt-2 italic">
                  This is an estimate. Final pricing may vary based on specific home conditions and requirements.
                </p>
              </div>
            </div>

            <Button type="button" className="w-full bg-accent-600 hover:bg-accent-700 text-white py-6 text-lg font-semibold transition-all hover:scale-[1.02]">
              Request a Free Quote
            </Button>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
}
