"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

const calculatorSchema = z.object({
  windowType: z.enum(["standard", "large"]),
  windowCount: z.number().min(1).max(100),
  windowSides: z.enum(["one-side", "both-sides"]),
  frequency: z.enum(["one-time", "recurring"]),
  screens: z.boolean().default(false),
  tracks: z.boolean().default(false),
})

export default function WindowsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [estimate, setEstimate] = useState<number | null>(null)
  const [basePrice, setBasePrice] = useState<number>(0)
  const [addonsPrice, setAddonsPrice] = useState<number>(0)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const calculatorForm = useForm<z.infer<typeof calculatorSchema>>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      windowType: "standard",
      windowCount: 10,
      windowSides: "both-sides",
      frequency: "one-time",
      screens: false,
      tracks: false,
    },
  })

  const windowType = calculatorForm.watch("windowType")
  const windowCount = calculatorForm.watch("windowCount")
  const windowSides = calculatorForm.watch("windowSides")
  const frequency = calculatorForm.watch("frequency")
  const screens = calculatorForm.watch("screens")
  const tracks = calculatorForm.watch("tracks")

  // Calculate the price whenever form values change
  useEffect(() => {
    calculateEstimate()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function calculateEstimate() {
    let base = 0
    let addons = 0
    
    // Base price per window
    const standardPrice = windowSides === "both-sides" ? 8 : 5
    const largePrice = windowSides === "both-sides" ? 12 : 7
    
    // Calculate base price
    if (windowType === "standard") {
      base = standardPrice * windowCount
    } else {
      base = largePrice * windowCount
    }
    
    // Apply frequency discount
    if (frequency === "recurring") {
      base = Math.round(base * 0.9) // 10% discount for recurring service
    }
    
    // Add screen cleaning
    if (screens) {
      addons += windowCount * 2 // $2 per screen
    }
    
    // Add track cleaning
    if (tracks) {
      addons += windowCount * 1.5 // $1.50 per track
    }
    
    setBasePrice(base)
    setAddonsPrice(addons)
    setEstimate(base + addons)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    toast.success("Your request has been sent! We'll contact you shortly.")
    form.reset()
    setIsSubmitting(false)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Window Washing</h1>
              <p className="text-lg text-gray-600 mb-6">
                You work hard, so let us handle the cleaning. Enjoy a spotless home and spend your time on what truly matters.
              </p>
            </div>
            <div>
              <Button size="lg" className="bg-blue-800 hover:bg-blue-900" asChild>
                <a href="#request-quote">REQUEST A SERVICE</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Window Cleaning Hero Image */}
      <section className="relative w-full overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full">
            <Image  
              src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomnSB6a6wNq3haW9IjyTl7dbP5tZX4mrvg1GQH"
              alt="Professional window cleaning service"
              fill
              priority
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
     


      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Request a Quote */}
            <div id="request-quote">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Request a Quote</h2>
              <p className="text-gray-600 mb-8">
                For more than a decade, we've been delivering spotless, streak-free windows to homes and businesses. Formerly known as C-Thru Cleaning Services, we now operate under Kathy Clean, continuing our commitment to excellence with the same trusted quality and expertise.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
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
                        <FormLabel>Email address</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" type="email" {...field} />
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
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your window cleaning needs" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Price Calculator */}
            <div>
              <Card className="border shadow-md">
                <CardHeader>
                  <CardTitle>Residential Cleaning Price Calculator</CardTitle>
                  <CardDescription>Calculate your estimated window cleaning cost</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...calculatorForm}>
                    <form className="space-y-6" onChange={calculateEstimate}>
                      <Tabs defaultValue="standard" onValueChange={(value) => {
                        calculatorForm.setValue("windowType", value as "standard" | "large")
                        calculateEstimate()
                      }}>
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="standard">Standard Windows</TabsTrigger>
                          <TabsTrigger value="large">Large Windows</TabsTrigger>
                        </TabsList>
                      </Tabs>
                      
                      <div className="space-y-4">
                        <FormField
                          control={calculatorForm.control}
                          name="windowCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Window Count: {field.value}</FormLabel>
                              <FormControl>
                                <Slider
                                  min={1}
                                  max={50}
                                  step={1}
                                  defaultValue={[field.value]}
                                  onValueChange={(value) => {
                                    field.onChange(value[0])
                                    calculateEstimate()
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={calculatorForm.control}
                          name="windowSides"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Window Sides</FormLabel>
                              <Select
                                defaultValue={field.value}
                                onValueChange={(value) => {
                                  field.onChange(value)
                                  calculateEstimate()
                                }}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select window sides" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="one-side">One Side</SelectItem>
                                  <SelectItem value="both-sides">Both Sides</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={calculatorForm.control}
                          name="frequency"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Frequency</FormLabel>
                              <Select
                                defaultValue={field.value}
                                onValueChange={(value) => {
                                  field.onChange(value)
                                  calculateEstimate()
                                }}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select frequency" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="one-time">One-time Service</SelectItem>
                                  <SelectItem value="recurring">Recurring Service</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                        
                        <div className="space-y-2">
                          <FormField
                            control={calculatorForm.control}
                            name="screens"
                            render={({ field }) => (
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={(checked) => {
                                      field.onChange(checked)
                                      calculateEstimate()
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">Screen Cleaning ($2 per window)</FormLabel>
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={calculatorForm.control}
                            name="tracks"
                            render={({ field }) => (
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={(checked) => {
                                      field.onChange(checked)
                                      calculateEstimate()
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">Track Cleaning ($1.50 per window)</FormLabel>
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Base Price:</span>
                          <span>${basePrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Add-ons:</span>
                          <span>${addonsPrice.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-bold">
                          <span>Estimated Total:</span>
                          <span>${estimate !== null ? estimate.toFixed(2) : "0.00"}</span>
                        </div>
                      </div>
                      
                      <Button type="button" className="w-full bg-blue-800 hover:bg-blue-900">
                        Request Quote
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  )
}
