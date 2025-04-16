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
    <div className="flex flex-col md:flex-row gap-4 bg-slate-50 rounded-lg overflow-hidden h-80">
      <div className="md:w-3/5 relative h-80 w-full md:h-auto">
        <Image 
          src={imageUrl} 
          alt={imageAlt} 
          fill 
          className="object-cover" 
        />
      </div>
      <div className="md:w-3/5 p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-navy-700 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <Button asChild variant="default" className="self-start ">
          <Link href={link} className="flex items-center gap-2">
            ESTIMATE HERE
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default function OurServices() {
  const services = [
    {
      title: "Residential cleaning",
      description: "Excellence is in the details. We approach every job with the same rigor as pilots and surgeons, through checklists. Our process ensures nothing is missed, every time.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomWu0pGghvM9rmixlERctSJWydYD1B0G2wqHse",
      imageAlt: "Professional cleaner with cleaning supplies in a modern kitchen",
      link: "/services/residential"
    },
    {
      title: "Commercial cleaning",
      description: "Excellence is in the details. We approach every job with the same rigor as pilots and surgeons, through checklists. Our process ensures nothing is missed, every time.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom8nF7NwKhMCiFKE7nTrZgcpJWtXBskwHlzmqf",
      imageAlt: "Professional cleaners working in an office space",
      link: "/services/commercial"
    },
    {
      title: "Window washing",
      description: "Excellence is in the details. We approach every job with the same rigor as pilots and surgeons, through checklists. Our process ensures nothing is missed, every time.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomM7ix4wYzdDOT26oVhPrB8Uy5g9WlSQn1sNEG",
      imageAlt: "Professional window cleaner washing windows",
      link: "/services/windows"
    },
    {
      title: "Other services",
      description: "Excellence is in the details. We approach every job with the same rigor as pilots and surgeons, through checklists. Our process ensures nothing is missed, every time.",
      imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUCbpszuxbLyY5TVln2vGePNI6BEHMuo4rXcz",
      imageAlt: "Professional cleaner in protective gear providing sanitization services",
      link: "/services/other-services"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="services">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our services</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          With over <span className="font-semibold">10 years of experience</span>, we deliver top-quality cleaning services backed by our <span className="font-semibold">48-hour satisfaction guarantee</span>.
          Our rigorous cleaning standards and eco-friendly options ensure a healthy, sparkling clean environment.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {services.map((service) => (
          <ServiceCard 
            key={service.title}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            imageAlt={service.imageAlt}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
}
