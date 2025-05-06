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
    <div className="flex flex-col lg:flex-row gap-6 bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full lg:w-2/5 relative h-56 sm:h-64 md:h-72 lg:h-auto">
        <Image 
          src={imageUrl} 
          alt={imageAlt} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover" 
          priority
        />
      </div>
      <div className="w-full lg:w-3/5 p-4 sm:p-6 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-navy-700 mb-2 sm:mb-3">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4">
          {description}
        </p>
        <Button asChild variant="default" className="self-start mt-auto">
          <Link href={link} className="flex items-center gap-2 text-sm sm:text-base">
            ESTIMATE HERE
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default function OurServices() {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Enjoy a spotless home with our professional residential cleaning services in Denver and nearby areas. We handle kitchens, bathrooms, bedrooms, and more with eco-friendly products and attention to detail. Perfect for weekly, bi-weekly, or one-time deep cleans.", imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomWu0pGghvM9rmixlERctSJWydYD1B0G2wqHse",
      imageAlt: "Professional cleaner with cleaning supplies in a modern kitchen",
      link: "/services/residential"
    },
    {
      title: "Commercial Cleaning",
      description: "Keep your workspace clean, healthy, and welcoming with our expert commercial cleaning services. We serve offices, clinics, retail spaces, and more across Denver and surrounding cities. Some of our clients include Whole Foods, Starbucks, Ikea, Rivian and Petsmart.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom8nF7NwKhMCiFKE7nTrZgcpJWtXBskwHlzmqf",
      imageAlt: "Professional cleaners working in an office space",
      link: "/services/commercial"
    },
    {
      title: "Window Cleaning",
      description: "Get crystal-clear windows that brighten your space and boost curb appeal. We provide streak-free window cleaning for homes and businesses, inside and out. Serving Denver, Parker, Castle Rock, and beyond with safe, professional care.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomM7ix4wYzdDOT26oVhPrB8Uy5g9WlSQn1sNEG",
      imageAlt: "Professional window cleaner washing windows",
      link: "/services/windows"
    },
    {
      title: "Pressure Washing",
      description: "Restore the look of your exterior surfaces with our high-powered pressure washing services. We clean driveways, patios, siding, fences, and more, removing dirt, grime, and buildup. Ideal for homes and commercial properties across the Denver area.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUCbpszuxbLyY5TVln2vGePNI6BEHMuo4rXcz",
      imageAlt: "Professional using a pressure washer on an exterior surface",
      link: "/services/pressure-washing"
    },
    {
      title: "Gutter Cleaning",
      description: "Prevent clogs and water damage with our thorough gutter cleaning service. We remove debris and ensure smooth drainage for homes and buildings of all sizes. Reliable, mess-free service across Denver, Highlands Ranch, Lone Tree, and more.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUCbpszuxbLyY5TVln2vGePNI6BEHMuo4rXcz",
      imageAlt: "Technician cleaning residential gutters on a ladder",
      link: "/services/gutter-cleaning"
    },
    {
      title: "Other Services",
      description: "Excellence is in the details. We approach every job with the same rigor as pilots and surgeons, through checklists. Our process ensures nothing is missed, every time.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUCbpszuxbLyY5TVln2vGePNI6BEHMuo4rXcz",
      imageAlt: "Professional cleaner in protective gear providing sanitization services",
      link: "/services/other-services"
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 max-w-7xl mx-auto" id="services">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our services</h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          With over 10 years of experience, Kathy Clean provides top-rated residential and commercial cleaning across Denver and surrounding areas, including Parker, Lone Tree, Highlands Ranch, Centennial, Central Park, Hilltop, Washington Park, Cherry Creek, University Park, Highland, and Castle Rock. We also specialize in window cleaning, pressure washing, and gutter cleaning, all backed by our 48-hour satisfaction guarantee. Our expert team follows strict cleaning standards and offers eco-friendly options to give your home or business a spotless, healthy shine—every time.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 md:w-3/4 mx-auto">
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
    </section>  );
}
