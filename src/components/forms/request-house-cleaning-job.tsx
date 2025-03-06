"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

const schema = z.object({
  email: z.string().email(),
  phone: z.string().min(1, 'Required'),
  name: z.string().min(1, 'Required'),
  squareFootage: z.number().positive(),
  bedrooms: z.number().positive(),
  bathrooms: z.number().positive(),
  homeType: z.enum(['apartment', 'house', 'condo']),
  serviceFrequency: z.enum(['one-time', 'weekly', 'bi-weekly', 'monthly']),
  specialAreas: z.array(z.string()).optional(),
  additionalServices: z.array(z.string()).optional(),
  bestContactTime: z.string().optional(),
  specialInstructions: z.string().optional(),
});

type CleaningQuoteFormValues = z.infer<typeof schema>;

export function RequestHouseCleaningJobForm() {
  const form = useForm<CleaningQuoteFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      homeType: 'apartment',
      squareFootage: 0,
      bedrooms: 0,
      bathrooms: 0,
      serviceFrequency: 'one-time',
      specialAreas: [],
      additionalServices: [],
      bestContactTime: '',
      specialInstructions: '',
    },
  });

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Request House Cleaning</CardTitle>
        <CardDescription>Fill out this form to get a free quote for your cleaning needs.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => {})} className="space-y-6">
            <FormField
              name="homeType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Home Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select home type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="squareFootage"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel> Square Footage</FormLabel>
                  <Input
                    type="number"
                    {...field}
                    className="w-full p-2 border rounded"
                  />
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              name="bedrooms"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Bedrooms</FormLabel>
                  <Input
                    type="number"
                    {...field}
                    className="w-full p-2 border rounded"
                  />
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              name="bathrooms"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Bathrooms</FormLabel>
                  <Input
                    type="number"
                    {...field}
                    className="w-full p-2 border rounded"
                  />
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              name="serviceFrequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Frequency</FormLabel>
                  <div className="space-y-2">
                    {['one-time', 'weekly', 'bi-weekly', 'monthly'].map((option) => (
                      <label key={option} htmlFor={`service-frequency-${option}`} className="flex items-center">
                        <Checkbox
                          id={`service-frequency-${option}`}
                          {...field}
                          className="mr-2"
                        />
                        {option.replace('-', ' ').replace(/^./, (c) => c.toUpperCase())}
                      </label>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="specialAreas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Cleaning Areas</FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Kitchen deep clean',
                      'Bathroom deep clean',
                      'Bedroom deep clean',
                      'Living areas'
                    ].map((area) => (
                      <label key={area} htmlFor={`area-${area}`} className="flex items-center">
                        <Checkbox
                          id={`area-${area}`}
                          {...field}
                          className="mr-2"
                        />
                        {area}
                      </label>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="additionalServices"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Services</FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Laundry',
                      'Window cleaning',
                      'Refrigerator cleaning',
                      'Oven cleaning'
                    ].map((service) => (
                      <label key={service} htmlFor={`service-${service}`} className="flex items-center">
                        <Checkbox
                          id={`service-${service}`}
                          {...field}
                          className="mr-2"
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    {...field}
                    className="w-full p-2 border rounded"
                  />
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="tel"
                    {...field}
                    className="w-full p-2 border rounded"
                  />
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              name="name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    {...field}
                    className="w-full p-2 border rounded"
                  />
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              name="bestContactTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Best Contact Time</FormLabel>
                  <Input
                    type="text"
                    {...field}
                    className="w-full p-2 border rounded"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="specialInstructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Instructions</FormLabel>
                  <Textarea
                    {...field}
                    className="w-full p-2 border rounded"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-sm text-gray-600">
          48-Hour Satisfaction Guarantee
        </div>
        <Button type="submit" className="w-full" onClick={form.handleSubmit(() => {})}>
          Request Free Quote
        </Button>
      </CardFooter>
    </Card>
  );
}