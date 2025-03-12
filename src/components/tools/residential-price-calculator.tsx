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
  serviceType: z.enum(['recurring', 'deep']),
  squareFeet: z.number().min(700).max(10000),
  frequency: z.enum(['weekly', 'bi-weekly', 'monthly', 'one-time']),
  additionalServices: z.array(z.string()).optional(),
  windowPanes: z.number().min(0).max(100).optional(),
  windowPanesOneSide: z.number().min(0).max(100).optional(),
})

export function ResidentialPriceCalculator() {
  const [estimate, setEstimate] = useState<number | null>(null);
  const [basePrice, setBasePrice] = useState<number>(0);
  const [addonsPrice, setAddonsPrice] = useState<number>(0);
  
  const form = useForm<z.infer<typeof calculatorSchema>>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      serviceType: 'recurring',
      squareFeet: 1500,
      frequency: 'weekly',
      additionalServices: [],
      windowPanes: 0,
      windowPanesOneSide: 0
    }
  });

  const serviceType = form.watch('serviceType');
  const squareFeet = form.watch('squareFeet');
  const frequency = form.watch('frequency');
  const additionalServices = form.watch('additionalServices') || [];
  const windowPanes = form.watch('windowPanes') || 0;
  const windowPanesOneSide = form.watch('windowPanesOneSide') || 0;

  // Define calculate function with useCallback to avoid dependency issues
  const calculateEstimate = useCallback(() => {
    let base = 0;
    let addons = 0;
    
    // Calculate base price based on service type
    if (serviceType === 'recurring') {
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
    } else if (serviceType === 'deep') {
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
    }
    
    // Calculate additional services
    for (const serviceId of additionalServices) {
      const service = ADDITIONAL_SERVICES.find(s => s.id === serviceId);
      if (service) {
        addons += service.price;
      }
    }
    
    // Add window cleaning costs
    addons += (windowPanes * 10) + (windowPanesOneSide * 5);
    
    setBasePrice(base);
    setAddonsPrice(addons);
    setEstimate(base + addons);
  }, [serviceType, squareFeet, frequency, additionalServices, windowPanes, windowPanesOneSide]);

  // Calculate estimate on initial render
  useEffect(() => {
    calculateEstimate();
  }, [calculateEstimate]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Residential Cleaning Price Calculator</CardTitle>
        <CardDescription>
          Get an instant estimate for your home cleaning needs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="space-y-6">
            <Tabs 
              defaultValue="recurring" 
              value={serviceType}
              onValueChange={(value) => form.setValue('serviceType', value as 'recurring' | 'deep')}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="recurring">Recurring Cleaning</TabsTrigger>
                <TabsTrigger value="deep">Deep Cleaning</TabsTrigger>
              </TabsList>
              <TabsContent value="recurring" className="pt-4">
                <p className="text-sm text-gray-500 mb-4">
                  Our recurring cleaning services are perfect for maintaining a consistently clean home.
                </p>
              </TabsContent>
              <TabsContent value="deep" className="pt-4">
                <p className="text-sm text-gray-500 mb-4">
                  Deep cleaning addresses areas that need extra attention and is ideal for seasonal cleaning or before/after events.
                </p>
              </TabsContent>
            </Tabs>

            <FormField
              control={form.control}
              name="squareFeet"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="squareFeet">Home Size (Square Feet): {field.value}</FormLabel>
                  <FormControl>
                    <div className="pt-2">
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
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {serviceType === 'recurring' && (
              <FormField
                control={form.control}
                name="frequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="frequency">Cleaning Frequency</FormLabel>
                    <Select
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                        calculateEstimate();
                      }}
                    >
                      <FormControl>
                        <SelectTrigger id="frequency">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="one-time">One-Time</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div>
              <h3 className="text-sm font-medium mb-3">Additional Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ADDITIONAL_SERVICES.slice(0, 4).map((service) => (
                  <FormField
                    key={service.id}
                    control={form.control}
                    name="additionalServices"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(service.id)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...(field.value || []), service.id]
                                : (field.value || []).filter((value) => value !== service.id);
                              field.onChange(updatedValue);
                              calculateEstimate();
                            }}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            {service.name} <span className="text-gray-500 text-xs">+${service.price}</span>
                          </FormLabel>
                          <p className="text-xs text-gray-500">{service.details}</p>
                        </div>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Window Cleaning</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="windowPanes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="windowPanes">Window Panes (In & Out)</FormLabel>
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
                        />
                      </FormControl>
                      <p className="text-xs text-gray-500">$10 per pane</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="windowPanesOneSide"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="windowPanesOneSide">Window Panes (One Side)</FormLabel>
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
                        />
                      </FormControl>
                      <p className="text-xs text-gray-500">$5 per pane</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Base Price:</span>
                <span>${basePrice}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Additional Services:</span>
                <span>${addonsPrice}</span>
              </div>
              <div className="flex justify-between font-medium text-lg">
                <span>Estimated Total:</span>
                <span>${estimate}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                This is an estimate. Final pricing may vary based on specific home conditions and requirements.
              </p>
            </div>

            <Button type="button" className="w-full">
              Request a Quote
            </Button>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
}
