"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { client } from "@/lib/client";

const roomTypes = [
  "Kitchen",
  "Bathrooms",
  "Conference Room",
  "Lobby",
  "Offices",
  "Retail Showroom",
];

const frequencies = ["Daily", "Weekly", "Bi-Weekly", "Monthly", "Other"];

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().optional(),
  address: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City, State and Zip Code is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  propertyType: z.enum(["Office", "Retail"], { required_error: "Type of property is required" }),
  rooms: z.array(z.enum(roomTypes as [string, ...string[]]), { required_error: "Select at least one room type" }).min(1, "Select at least one room type"),
  frequency: z.array(z.enum(frequencies as [string, ...string[]]), { required_error: "Select at least one frequency" }).min(1, "Select at least one frequency"),
  people: z.string().optional(),
  sqft: z.string().min(1, "Square footage is required"),
  bathrooms: z.string().min(1, "Number of bathrooms is required"),
  referral: z.string().optional(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function BusinessCleaningEstimateForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      address: "",
      city: "",
      phone: "",
      email: "",
      propertyType: "Office",
      rooms: [],
      frequency: [],
      people: "",
      sqft: "",
      bathrooms: "",
      referral: "",
      notes: "",
    },
  });

  async function onSubmit(data: FormData) {
    // TODO: handle submission (API/email/etc)
    // For now, just log
    console.log(data);
    const res = await client.request.create.$post(data);
    console.log(res);
    alert("Form submitted! Check console for data.");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto bg-card text-card-foreground rounded-xl border border-border shadow-lg p-8 md:p-10 mt-8 mb-16"
      >
        <h2 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">Business Cleaning Estimate</h2>
        <p className="font-semibold text-lg mb-2 text-primary-foreground">Request a Business Cleaning Estimate Today</p>
        <p className=" mb-8">
          Request a business cleaning estimate so you and your staff can be focused on taking care of your clients. Let us take care of the cleaning so you can take care of what your business specializes in.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">First Name *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="First" className="bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition" />
                </FormControl>
                <FormMessage className="text-destructive text-xs mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="md:pt-6">
                <FormLabel className="sr-only">Last Name *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Last" className="bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition" />
                </FormControl>
                <FormMessage className="text-destructive text-xs mt-1" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-base">Company (If Applicable)</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Company" className="bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition" />
              </FormControl>
              <FormMessage className="text-destructive text-xs mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-base font-semibold">Street Address *</FormLabel>
              <FormControl>
                <Input {...field} className="bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition" />
              </FormControl>
              <FormMessage className="text-destructive text-xs mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-base font-semibold">City, State and Zip Code *</FormLabel>
              <FormControl>
                <Input {...field} className="bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition" />
              </FormControl>
              <FormMessage className="text-destructive text-xs mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-base font-semibold">Contact Phone Number *</FormLabel>
              <FormControl>
                <Input {...field} type="tel" className="bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition" />
              </FormControl>
              <FormMessage className="text-destructive text-xs mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-base">Email Address</FormLabel>
              <FormControl>
                <Input {...field} type="email" className="bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition" />
              </FormControl>
              <FormMessage className="text-destructive text-xs mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="propertyType"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-base font-semibold">Type of Property *</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-8 mt-2"
                >
                  <FormItem className="flex items-center space-x-2">
                    <RadioGroupItem value="Office" id="office" className="accent-primary" />
                    <FormLabel htmlFor="office" className="font-medium">Office</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2">
                    <RadioGroupItem value="Retail" id="retail" className="accent-primary" />
                    <FormLabel htmlFor="retail" className="font-medium">Retail</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage className="text-destructive text-xs mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rooms"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-base font-semibold">Types of Rooms (Mark All that Apply) *</FormLabel>
              <FormControl>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                  {roomTypes.map((room) => (
                    <FormItem key={room} className="flex items-center gap-2">
                      <Checkbox
                        id={room}
                        checked={field.value?.includes(room)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...(field.value || []), room]);
                          } else {
                            field.onChange((field.value || []).filter((v: string) => v !== room));
                          }
                        }}
                        className="accent-primary"
                      />
                      <FormLabel htmlFor={room} className="font-medium">{room}</FormLabel>
                    </FormItem>
                  ))}
                </div>
              </FormControl>
              <FormMessage className="text-destructive text-xs mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="frequency"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-base font-semibold">How Often Would You Like the Property Cleaned? *</FormLabel>
              <FormControl>
                <div className="flex flex-wrap gap-4 mt-2">
                  {frequencies.map((freq) => (
                    <FormItem key={freq} className="flex items-center gap-2">
                      <Checkbox
                        id={freq}
                        checked={field.value?.includes(freq)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...(field.value || []), freq]);
                          } else {
                            field.onChange((field.value || []).filter((v: string) => v !== freq));
                          }
                        }}
                        className="accent-primary"
                      />
                      <FormLabel htmlFor={freq} className="font-medium">{freq}</FormLabel>
                    </FormItem>
                  ))}
                </div>
              </FormControl>
              <FormMessage className="text-destructive text-xs mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="people"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-base">How Many People Work on the Property?</FormLabel>
              <FormControl>
                <Input {...field} type="number" min="0" className="bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition" />
              </FormControl>
              <FormMessage className="text-destructive text-xs mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sqft"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-base font-semibold">What is the Approximate Square Footage of the Property? *</FormLabel>
              <FormControl>
                <Input {...field} type="number" min="0" className="bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition" />
              </FormControl>
              <FormMessage className="text-destructive text-xs mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bathrooms"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-base font-semibold">How Many Bathrooms are on the Property? *</FormLabel>
              <FormControl>
                <Input {...field} type="number" min="0" className="bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition" />
              </FormControl>
              <FormMessage className="text-destructive text-xs mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="referral"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-base">If You Were Referred by Someone, Please Tell Us Who</FormLabel>
              <FormControl>
                <Input {...field} className="bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition" />
              </FormControl>
              <FormMessage className="text-destructive text-xs mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-base">Other Notes or Comments</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} className="bg-background border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition" />
              </FormControl>
              <FormMessage className="text-destructive text-xs mt-1" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition">Submit</Button>
      </form>
    </Form>
  );
}
