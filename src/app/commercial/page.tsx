"use server"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default async function CommercialPage() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative mb-12 py-32 rounded-xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/commercial-services.png" 
            alt="Professional commercial cleaning service" 
            fill
            className="object-cover"
          />
          {/* the backdrop black */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Commercial Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Professional cleaning solutions for businesses of all sizes
          </p>
          <div className="mt-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#request-quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-primary">Our Commercial Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-primary">Office Cleaning</h3>
            <p className="text-gray-600">
              Comprehensive cleaning services for offices of all sizes, ensuring a clean, healthy, and productive work environment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-primary">Medical Facility Cleaning</h3>
            <p className="text-gray-600">
              Specialized cleaning for healthcare facilities following strict protocols to maintain a sterile and safe environment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-primary">Retail Space Cleaning</h3>
            <p className="text-gray-600">
              Professional cleaning services for retail stores and shopping centers that enhance the shopping experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-primary">Industrial Cleaning</h3>
            <p className="text-gray-600">
              Heavy-duty cleaning solutions for warehouses, factories, and industrial facilities with unique challenges.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-primary">Educational Facilities</h3>
            <p className="text-gray-600">
              Thorough cleaning services for schools, colleges, and universities focused on health and safety.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-primary">Hospitality Cleaning</h3>
            <p className="text-gray-600">
              Detailed cleaning services for hotels, restaurants, and event venues that maintain high standards.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-16 bg-gray-50 p-10 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">Why Choose Our Commercial Cleaning Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-labelledby="experiencedStaffIcon">
                <title id="experiencedStaffIcon">Experienced Staff Icon</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Experienced Staff</h3>
            <p className="text-gray-600">Our team consists of trained professionals with years of experience in commercial cleaning.</p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-labelledby="flexibleSchedulingIcon">
                <title id="flexibleSchedulingIcon">Flexible Scheduling Icon</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
            <p className="text-gray-600">We work around your business hours to minimize disruption to your operations.</p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-labelledby="ecoFriendlyIcon">
                <title id="ecoFriendlyIcon">Eco-Friendly Products Icon</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Eco-Friendly Products</h3>
            <p className="text-gray-600">We use environmentally responsible cleaning products that are effective yet safe.</p>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-primary">Industries We Serve</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Industry 1 - Corporate Offices */}
          <div className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="relative h-40 w-full overflow-hidden">
              <Image 
                src="/corporate-office.jpg" 
                alt="Corporate Office Cleaning" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-4 text-center relative -mt-16 bg-white/90 backdrop-blur-sm mx-3 rounded-lg">
              <h3 className="text-lg font-semibold mb-1 text-primary">Corporate Offices</h3>
              <p className="text-gray-600 text-sm">From small startups to large corporations</p>
            </div>
          </div>
          
          {/* Industry 2 - Healthcare */}
          <div className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="relative h-40 w-full overflow-hidden">
              <Image 
                src="/healthcare.jpg" 
                alt="Healthcare Facility Cleaning" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-4 text-center relative -mt-16 bg-white/90 backdrop-blur-sm mx-3 rounded-lg">
              <h3 className="text-lg font-semibold mb-1 text-primary">Healthcare</h3>
              <p className="text-gray-600 text-sm">Clinics, hospitals, and medical practices</p>
            </div>
          </div>
          
          {/* Industry 3 - Retail */}
          <div className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="relative h-40 w-full overflow-hidden">
              <Image 
                src="/retail.jpg" 
                alt="Retail Space Cleaning" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-4 text-center relative -mt-16 bg-white/90 backdrop-blur-sm mx-3 rounded-lg">
              <h3 className="text-lg font-semibold mb-1 text-primary">Retail</h3>
              <p className="text-gray-600 text-sm">Stores, malls, and shopping centers</p>
            </div>
          </div>
          
          {/* Industry 4 - Education */}
          <div className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="relative h-40 w-full overflow-hidden">
              <Image 
                src="/education.jpg" 
                alt="Educational Facility Cleaning" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-4 text-center relative -mt-16 bg-white/90 backdrop-blur-sm mx-3 rounded-lg">
              <h3 className="text-lg font-semibold mb-1 text-primary">Education</h3>
              <p className="text-gray-600 text-sm">Schools, colleges, and universities</p>
            </div>
          </div>
          
          {/* Industry 5 - Hospitality */}
          <div className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="relative h-40 w-full overflow-hidden">
              <Image 
                src="/hospitality.jpg" 
                alt="Hospitality Cleaning" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-4 text-center relative -mt-16 bg-white/90 backdrop-blur-sm mx-3 rounded-lg">
              <h3 className="text-lg font-semibold mb-1 text-primary">Hospitality</h3>
              <p className="text-gray-600 text-sm">Hotels, restaurants, and event venues</p>
            </div>
          </div>
          
          {/* Industry 6 - Industrial */}
          <div className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="relative h-40 w-full overflow-hidden">
              <Image 
                src="/industrial.jpg" 
                alt="Industrial Facility Cleaning" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-4 text-center relative -mt-16 bg-white/90 backdrop-blur-sm mx-3 rounded-lg">
              <h3 className="text-lg font-semibold mb-1 text-primary">Industrial</h3>
              <p className="text-gray-600 text-sm">Warehouses, factories, and manufacturing</p>
            </div>
          </div>
          
          {/* Industry 7 - Government */}
          <div className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="relative h-40 w-full overflow-hidden">
              <Image 
                src="/government.jpg" 
                alt="Government Facility Cleaning" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-4 text-center relative -mt-16 bg-white/90 backdrop-blur-sm mx-3 rounded-lg">
              <h3 className="text-lg font-semibold mb-1 text-primary">Government</h3>
              <p className="text-gray-600 text-sm">Municipal buildings and public facilities</p>
            </div>
          </div>
          
          {/* Industry 8 - Religious */}
          <div className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="relative h-40 w-full overflow-hidden">
              <Image 
                src="/religious.jpg" 
                alt="Religious Facility Cleaning" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-4 text-center relative -mt-16 bg-white/90 backdrop-blur-sm mx-3 rounded-lg">
              <h3 className="text-lg font-semibold mb-1 text-primary">Religious</h3>
              <p className="text-gray-600 text-sm">Churches, temples, and worship centers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16 bg-primary text-white p-10 rounded-2xl shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business Space?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Contact us today for a customized commercial cleaning plan that meets your specific needs and budget.
        </p>
        <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
          <Link href="#request-quote">Get a Free Quote</Link>
        </Button>
      </div>
    </div>
  );
}
