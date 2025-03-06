"use client";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/components/ui/card'

const businessTypes = ['office', 'retail', 'medical', 'educational', 'other'] as const
const hearingSources = ['search', 'referral', 'social', 'ad', 'other'] as const

const schema = z.object({
  businessType: z.enum(businessTypes),
  businessTypeOther: z.string().optional(),
  squareFootage: z.number().positive(),
  employees: z.number().positive(),
  cleaningFrequency: z.enum(['daily', 'weekly', 'bi-weekly', 'monthly', 'one-time']),
  preferredTime: z.array(z.string()).optional(),
  restrooms: z.number().positive(),
  breakRoom: z.boolean(),
  lobby: z.boolean(),
  conferenceRooms: z.number().positive(),
  carpetPercentage: z.number().min(0).max(100),
  additionalServices: z.array(z.string()).optional(),
  businessName: z.string().min(1),
  contactName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  hearAboutUs: z.enum(hearingSources),
})

type CommercialCleaningFormValues = z.infer<typeof schema>

export function RequestBusinessCleaningJobForm() {
  const form = useForm<CommercialCleaningFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      carpetPercentage: 0,
      preferredTime: [],
      additionalServices: [],
    },
  })

  const businessType = form.watch('businessType')

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Commercial Cleaning Quote Request</CardTitle>
        <CardDescription>
          Get a customized cleaning plan for your business facility
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form className="space-y-6">
            {/* Business Type Section */}
            <FormField
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {businessType === 'other' && (
              <FormField
                name="businessTypeOther"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specify Business Type</FormLabel>
                    <Input {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Facility Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                name="squareFootage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Square Footage</FormLabel>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="employees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Employees</FormLabel>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Cleaning Schedule */}
            <div className="space-y-4">
              <FormField
                name="cleaningFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cleaning Frequency</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        {['daily', 'weekly', 'bi-weekly', 'monthly', 'one-time'].map((freq) => (
                          <SelectItem key={freq} value={freq}>
                            {freq.replace('-', ' ').replace(/^./, (c) => c.toUpperCase())}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="preferredTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Cleaning Times</FormLabel>
                    <div className="grid grid-cols-2 gap-2">
                      {['Early morning', 'After hours', 'Evening', 'Weekends'].map((time) => (
                        <label key={time} htmlFor={`time-${time}`} className="flex items-center space-x-2">
                          <Checkbox
                            id={`time-${time}`} // Add unique ID
                            value={time}
                            checked={field.value?.includes(time)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...(field.value || []), time]
                                : field.value?.filter((v: string) => v !== time)
                              field.onChange(newValue)
                            }}
                          />
                          <span>{time}</span>
                        </label>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Additional Form Sections... */}

          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex flex-col space-y-4">
        <div className="text-sm text-gray-600">
          48-Hour Satisfaction Guarantee
        </div>
        <Button type="submit" className="w-full">
          Request Customized Quote
        </Button>
      </CardFooter>
    </Card>
  )
}