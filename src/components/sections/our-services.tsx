"use client";
import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, imageUrl, imageAlt, link }) => {
  return (
    <Link href={link} className="group block focus:outline-none" tabIndex={-1} style={{ textDecoration: 'none' }}>
      <div className="flex flex-col bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-[370px] mx-auto h-full min-h-[500px] cursor-pointer">
        <div className="relative w-full h-[220px] sm:h-[270px] md:h-[300px] flex-shrink-0">
          <Image 
            src={imageUrl} 
            alt={imageAlt} 
            fill
            sizes="370px"
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="p-4 sm:p-6 flex flex-col flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-navy-700 mb-2 sm:mb-3">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            {description}
          </p>
          <Button variant="default" className="self-start mt-auto">
            Learn More
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default function OurServices() {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Enjoy a spotless home with our trusted residential cleaning services in Denver and surrounding areas. We clean kitchens, bathrooms, bedrooms, and more using eco-friendly products and meticulous care. Ideal for recurring or one-time cleanings.", imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomAcT0ESUo3cFv8PBRDrpoYXiQwjhVE4KNzqTy",
      imageAlt: "Professional cleaner with cleaning supplies in a modern kitchen",
      link: "/house-cleaning-denver"
    },
    {
      title: "Commercial Cleaning",
      description: "Keep your workspace clean, healthy, and professional with our expert commercial cleaning services. We serve offices, clinics, retail stores, and more across Denver area. Trusted by brands like Whole Foods, Starbucks, IKEA, Rivian, and PetSmart.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom2kyI8hJ6JbmpXdcT7olMHiQWCShrEqx84YZV",
      imageAlt: "Professional cleaners working in an office space",
      link: "/commercial-cleaning-denver"
    },
    {
      title: "Window Cleaning",
      description: "Get crystal-clear windows that brighten your space and boost curb appeal. We provide streak-free window cleaning for homes and businesses, inside and out. Serving Denver, Parker, Castle Rock, and beyond with safe, professional care.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom0KAm82nznWpD8lt52ycuGbAavdFLke9Ugf7J",
      imageAlt: "Professional window cleaner washing windows",
      link: "/window-cleaning-denver"
    },
    {
      title: "Pressure Washing",
      description: "Restore the look of your exterior surfaces with our high-powered pressure washing services. We clean driveways, patios, siding, fences, and more, removing dirt, grime, and buildup. Ideal for homes and commercial properties across the Denver area.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomNysLnp8Qqho34HzWAgdjRlcDPJntsL1f2TIb",
      imageAlt: "Professional using a pressure washer on an exterior surface",
      link: "/pressure-washing-denver"
    },
    {
      title: "Gutter Cleaning",
      description: "Prevent clogs and water damage with our thorough gutter cleaning service. We remove debris and ensure smooth drainage for homes and buildings of all sizes. Reliable, mess-free service across Denver, Highlands Ranch, Lone Tree, and more.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomeqbllFgQpAgcBK3Nd2aXOnqjJo4Lvf0YytD6",
      imageAlt: "Technician cleaning residential gutters on a ladder",
      link: "/gutter-cleaning-denver"
    },
    {
      title: "Other Services",
      description: "Excellence is in the details. From emergency cleaning to move-in/move-out and post-construction cleaning, we follow rigorous checklists to ensure no spot is missed. Our team brings the same precision to every job—every time.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomAcyI8dPo3cFv8PBRDrpoYXiQwjhVE4KNzqTy",
      imageAlt: "Professional cleaner in protective gear providing sanitization services",
      link: "/other-services-denver"
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 max-w-7xl mx-auto" id="services">
      <div className="mb-8 md:mb-12">
  <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">
    Our Residential and Commercial<br />Services in Denver
  </h2>
  <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
    With over <strong>10 years of experience</strong>, Kathy Clean provides top-rated residential and commercial cleaning in Denver, Parker, Lone Tree, Highlands Ranch, Centennial, Central Park, Hilltop, Washington Park, Cherry Creek, University Park, Highland, and Castle Rock.
<br />
<br />
We also specialize in <strong>window cleaning</strong>, <strong>pressure washing</strong>, and <strong>gutter cleaning</strong>, all backed by our <strong>48-hour satisfaction guarantee</strong>.
  </p>
</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
        {services.map((service) => (
          <div 
            key={service.title} 
            className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <ServiceCard 
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              imageAlt={service.imageAlt}
              link={service.link}
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button
          variant="default"
          className="font-medium"
          asChild
        >
          <Link href="/request-quote">
            REQUEST A QUOTE
          </Link>
        </Button>
      </div>
    </section>  );
}
