"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const calculatorSchema = z.object({
  windowType: z.enum(["standard", "large"]),
  windowCount: z.number().min(1).max(100),
  windowSides: z.enum(["one-side", "both-sides"]),
  frequency: z.enum(["one-time", "recurring"]),
  screens: z.boolean().default(false),
  tracks: z.boolean().default(false),
})

const WindowPriceCalculator = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [estimate, setEstimate] = useState<number | null>(null)
  const [basePrice, setBasePrice] = useState<number>(0)
  const [addonsPrice, setAddonsPrice] = useState<number>(0)

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
    
    // Add rail cleaning
    if (tracks) {
      addons += windowCount * 1.5 // $1.50 per window rail
    }
    
    setBasePrice(base)
    setAddonsPrice(addons)
    setEstimate(base + addons)
  }

  async function onSubmit(values: z.infer<typeof calculatorSchema>) {
    setIsSubmitting(true)
    console.log(values) 
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    toast.success("Your request has been sent! We'll contact you shortly.")
    setIsSubmitting(false)
  }
  return (
    <Card className="border shadow-md">
      <CardHeader>
        <CardTitle>Residential Cleaning Price Calculator</CardTitle>
        <CardDescription>Calculate your estimated window cleaning cost</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...calculatorForm}>
          <form className="space-y-6" onChange={calculateEstimate} onSubmit={calculatorForm.handleSubmit(onSubmit)}>
            <Tabs
              defaultValue="standard"
              onValueChange={(value) => {
                calculatorForm.setValue("windowType", value as "standard" | "large");
                calculateEstimate();
              }}
            >
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
                          field.onChange(value[0]);
                          calculateEstimate();
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
                        field.onChange(value);
                        calculateEstimate();
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
                        field.onChange(value);
                        calculateEstimate();
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
                            field.onChange(checked);
                            calculateEstimate();
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        Screen Cleaning ($2 per window)
                      </FormLabel>
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
                            field.onChange(checked);
                            calculateEstimate();
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        Rail Cleaning ($1.50 per window)
                      </FormLabel>
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

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Request Quote
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default WindowPriceCalculator;
