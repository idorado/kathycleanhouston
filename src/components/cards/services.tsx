"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

// Shadcn UI components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

type ServiceType = {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
};

const cleaningServices: ServiceType[] = [
  {
    id: "recurring",
    name: "Recurring Cleaning",
    description: "Our most popular option, trusted by homeowners who value consistency and convenience.",
    features: [
      "Customers love our flexibility, allowing them to schedule cleanings that fit their lifestyle.",
      "They also appreciate our trained and dedicated cleaners, who provide reliable, high-quality service every time.",
      "Many of our clients build strong relationships with their preferred cleaners, enjoying the comfort of seeing familiar faces who understand their home and preferences."
    ],
    image: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOlEz0gLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu"
  },
  {
    id: "move-in-out",
    name: "Move-In/Move-Out Cleaning",
    description: "Comprehensive cleaning services for those transitioning to a new home or apartment.",
    features: [
      "We ensure every corner of your new or previous home is spotless and ready for the next chapter.",
      "Our detailed cleaning checklist covers areas that are often overlooked during regular cleanings.",
      "Property managers and landlords trust us to prepare their properties for new tenants."
    ],
    image: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomndt4D5wNq3haW9IjyTl7dbP5tZX4mrvg1GQH"
  },
  {
    id: "post-construction",
    name: "Post-Construction Cleaning",
    description: "Specialized cleaning after renovation or construction projects to remove dust and debris.",
    features: [
      "We remove construction dust, debris, and residues from all surfaces and hard-to-reach areas.",
      "Our team is equipped with professional tools to handle post-construction challenges.",
      "We coordinate with contractors to ensure timely cleaning after project completion."
    ],
    image: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlombX3i6ckGctfxEFSjXR7am2eDqMn9h1wrd0OP"
  },
  {
    id: "pressure-washing",
    name: "Pressure Washing",
    description: "Restore the exterior surfaces of your property with our professional pressure washing services.",
    features: [
      "Effectively removes dirt, grime, mold, and mildew from driveways, decks, and siding.",
      "Our equipment is calibrated to clean thoroughly without damaging delicate surfaces.",
      "Dramatically improves curb appeal and extends the life of your exterior surfaces."
    ],
    image: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomNysLnp8Qqho34HzWAgdjRlcDPJntsL1f2TIb"
  },
  {
    id: "window-cleaning",
    name: "Window Cleaning",
    description: "Crystal clear windows that let natural light shine through and improve your view.",
    features: [
      "Professional-grade tools and solutions for streak-free, spotless windows.",
      "We clean both interior and exterior windows, including screens and tracks.",
      "Trained technicians can safely reach windows on upper floors."
    ],
    image: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomuTf8JIORAPXijlg8vVLbWSoDk4xMqEyCKh2B"
  }
];

const FeatureStar = () => (
  <div className="mt-1 text-primary">
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      aria-hidden="true"
    >
      <title>Feature star icon</title>
      <path 
        d="M8 0L9.72973 5.27027L15 7L9.72973 8.72973L8 14L6.27027 8.72973L1 7L6.27027 5.27027L8 0Z" 
        fill="currentColor" 
      />
    </svg>
  </div>
);

const windowServices: ServiceType[] = [
  {
    id: "residential-windows",
    name: "Residential Windows",
    description: "Professional window cleaning for homes of all sizes, ensuring streak-free, crystal-clear windows.",
    features: [
      "Interior and exterior window cleaning",
      "Screen and track cleaning available",
      "Eco-friendly cleaning solutions"
    ],
    image: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomM7ix4wYzdDOT26oVhPrB8Uy5g9WlSQn1sNEG"
  },
  {
    id: "commercial-windows",
    name: "Commercial Windows",
    description: "Professional window cleaning services for businesses, offices, and commercial properties.",
    features: [
      "Regular maintenance programs available",
      "Minimal disruption to your business",
      "Fully insured and licensed professionals"
    ],
    image: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomM7ix4wYzdDOT26oVhPrB8Uy5g9WlSQn1sNEG"
  },
  {
    id: "window-tracks-screens",
    name: "Window Tracks & Screens",
    description: "Deep cleaning of window tracks and screens to remove built-up dirt and grime.",
    features: [
      "Removal of dust and debris from tracks",
      "Cleaning of window screens",
      "Improves window functionality and appearance"
    ],
    image: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomM7ix4wYzdDOT26oVhPrB8Uy5g9WlSQn1sNEG"
  }
];

interface ServiceCardsProps {
  serviceType?: string;
}

export function ServiceCards({ serviceType }: ServiceCardsProps) {
  const services = serviceType === 'window-cleaning' ? windowServices : cleaningServices;
  const defaultTab = serviceType === 'window-cleaning' ? 'residential-windows' : 'recurring';
  
  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-8">
      <Tabs defaultValue={defaultTab} className="w-full">
        {/* Custom TabsList for horizontal scrolling */}
        <div className="overflow-x-auto pb-4 mb-8 no-scrollbar w-full flex justify-center">
          <TabsList className="h-auto p-1 bg-transparent gap-2 mx-auto">
            {services.map((service) => (
              <TabsTrigger 
                key={service.id} 
                value={service.id}
                className={cn(
                  "px-4 py-3 rounded-full whitespace-nowrap text-sm font-medium data-[state=active]:bg-secondary-foreground data-[state=active]:text-white",
                  "data-[state=inactive]:bg-white data-[state=inactive]:text-foreground data-[state=inactive]:border data-[state=inactive]:border-gray-200"
                )}
              >
                {service.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Tab Content */}
        {services.map((service) => (
          <TabsContent key={service.id} value={service.id} className="mt-0">
            <div className="flex flex-col md:flex-row justify-center">
              <div className="w-full md:w-1/4 flex justify-center">
                <Image 
                  src={service.image} 
                  alt={service.name}
                  width={400}
                  height={400}
                  className="object-cover shadow-md rounded-l-2xl"
                />
              </div>
              
              <Card className="border-0 shadow-none rounded-r-2xl rounded-l-none px-4 md:px-6 py-6 w-full md:w-1/2">
                <CardContent className="p-0 space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {service.name}
                  </h2>
                  <p className="text-lg text-foreground">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    {service.features.map((feature, index) => (
                      <div key={`${service.id}-feature-${index}`} className="flex gap-3 items-start">
                        <FeatureStar />
                        <p className="text-gray-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

