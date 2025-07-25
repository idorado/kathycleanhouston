import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/CtaButton";
import PhoneButton from "@/components/PhoneButton";
import FeatureBar from "@/components/ui/FeatureBar";
import WhyTrustUsSection from "@/components/sections/why-trust-us";
import LifeInLocationSection from "@/components/sections/LifeInLocationSection";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import { lifeInLocationContent } from "@/components/sections/lifeInLocationContent";
import { cleaningServices } from "@/config/json-ld";
import JsonLd from "@/components/json-ld";

interface CleaningServicesComponentProps {
  location?: string;
  heroImageUrl?: string;
  whyChooseUsDescription?: string;
}

// Types for location content
type LocationName = 'Denver' | 'Castle Rock' | 'Centennial' | 'Lone Tree' | 'Englewood' | 'Parker' | 'Littleton' | 'Greenwood Village' | 'Highlands Ranch';

interface LocationContent {
  images: Record<LocationName, string>;
  descriptions: Record<LocationName, string>;
}

// Default content for each location
const locationContent: LocationContent = {
  images: {
    'Denver': 'https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomn8OQ9kVwNq3haW9IjyTl7dbP5tZX4mrvg1GQ',
    'Castle Rock': 'https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomnGZMN8wNq3haW9IjyTl7dbP5tZX4mrvg1GQH',
    'Centennial': 'https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomH3P3mxDgqPBhUKN3FksyTY8bIpuvZ9xz7RM0',
    'Lone Tree': 'https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomK2XHOMUMQcNihESfqK8VPHRBylA7XtzCI2bd',
    'Englewood': 'https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomQ5jJramz8aAfRP5i946jBEorHLxSGqWcp3Ok',
    'Parker': 'https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomNmcwo28Qqho34HzWAgdjRlcDPJntsL1f2TIb',
    'Littleton': 'https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomkaNFadBMKEtR4Y9c3GgQrxuo7N6XZ2LnleTp',
    'Greenwood Village': 'https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomSYmHZnHfStHrxLGmPWpE9eUN53FzskB4Kfnw',
    'Highlands Ranch': 'https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomwKUgQQINQAijzTI0JpfGRs6WMerYKm743Voa'
  },
  descriptions: {
    'Denver': `Denver is a dynamic city filled with character-rich neighborhoods—from historic Capitol Hill to trendy RiNo and family-friendly Park Hill. At Kathy Clean, we proudly serve homes and small businesses across Denver with personalized and reliable cleaning services.

Whether you live in a modern condo downtown or a century-old bungalow in Washington Park, our team adapts to your space and needs. We use non-toxic products and a meticulous approach to ensure your Denver home shines, no matter the style or size.

We understand the fast-paced lifestyle of Denver professionals, families, and creatives. That’s why we offer flexible scheduling, recurring services, deep cleans, and move-out cleaning that fits your urban rhythm.

Kathy Clean is your trusted cleaning partner in the Mile High City.`,
    'Castle Rock': `At Kathy Clean, we specialize in providing professional house cleaning services in Castle Rock, Colorado, tailored to the needs of busy families, professionals, and retirees. Castle Rock is known for its beautiful homes, strong sense of community, and outdoor lifestyle—qualities we respect and serve with pride.

Whether you live in a multi-story home in The Meadows, a cozy townhome in Castle Oaks, or a custom home in Bell Mountain Ranch, Kathy Clean delivers the trusted, eco-friendly Castle Rock maid service you deserve.

We proudly clean both residential and commercial properties in Castle Rock. Need an office cleaned near Plum Creek Parkway? Or a move-out clean in Crystal Valley? Our flexible scheduling and custom cleaning plans ensure your space stays spotless—no matter the size or setting.`,
    'Centennial': `Centennial, Colorado is a vibrant and family-oriented suburb with excellent schools, spacious homes, and beautiful neighborhoods like Willow Creek and Foxridge. At Kathy Clean, we provide professional cleaning services tailored to Centennial’s active residents who value a clean, welcoming home after a busy day.

Our cleaners are experienced, background-checked, and equipped with eco-friendly products that are safe for children and pets. Whether you’re a parent juggling school schedules or a remote worker needing a tidy space, we help keep your home spotless and stress-free.

From Piney Creek to Southglenn and Copperleaf, we offer recurring cleans, deep cleans, and move-out/move-in services designed to meet the high standards of Centennial families.

With Kathy Clean, Centennial homeowners can trust that their space is treated with care, precision, and professionalism every time.`,
    'Lone Tree': `Lone Tree is a vibrant, high-income suburb known for its luxury homes, master-planned communities, and proximity to Park Meadows Mall and the Denver Tech Center. With residents who lead full, fast-paced lives, Lone Tree demands a cleaning service that’s professional, flexible, and consistently top-tier.

At Kathy Clean, we provide meticulous home and office cleaning tailored to Lone Tree’s elevated standards. Whether you live in RidgeGate, Bluffs Regional Park, or near the Sky Ridge Medical Campus, our trained team is ready to deliver five-star cleaning that matches your lifestyle.

We offer recurring service, one-time deep cleans, and move-out cleanings, always using green, non-toxic cleaning products. Our clients love the peace of mind that comes with working with insured, background-checked cleaners who take care of their homes like their own.

Kathy Clean brings the same professionalism to residential and commercial properties, ensuring Lone Tree’s homes and businesses stay sparkling clean.`,
    'Englewood': `Englewood is a diverse and energetic city that blends historic neighborhoods, artsy vibes, and urban accessibility. From cozy homes near Harvard Gulch to growing apartment communities and family residences around South Broadway Heights, it offers something for everyone—and Kathy Clean is here to keep those homes spotless.

We understand that many Englewood residents lead active lives, commuting to downtown Denver or working in nearby hospitals, schools, and startups. That’s why we offer flexible scheduling, eco-friendly products, and detailed cleanings that fit your pace.

Whether you're in a single-family home, condo, or rental unit, our team provides recurring house cleaning, deep cleans, and reliable move-out services with a personalized touch. Each cleaning is delivered by a trained, background-checked professional who understands the specific needs of Englewood homes.

We also serve commercial clients—from local shops to office suites—ensuring every space reflects the charm and creativity of the Englewood community.`,
    'Parker': `Parker offers a rare blend of small-town charm and modern convenience. With its growing neighborhoods, family-friendly atmosphere, and easy access to Denver, it’s no surprise so many people are proud to call Parker home.

At Kathy Clean, we’re proud to support that pride with trusted, flexible, and locally focused cleaning services. Whether you live in Stonegate, The Pinery, or Stroh Ranch, our team understands the daily demands of Parker families and professionals—and we’re here to help lighten the load.

We specialize in recurring cleanings, deep cleans, and move-out/move-in services, using eco-conscious products and detailed methods to ensure a consistent, high-quality result.

Kathy Clean is a reliable partner for busy Parker households looking for more time, more clarity, and more calm in their day-to-day lives.`,
    'Littleton': `Littleton combines historic charm with the comforts of modern suburban living. Whether you're enjoying the walkable streets of Downtown Littleton, settling into a home in Southmoor Park, or raising a family near Fieldstone, the community values both tradition and convenience—and Kathy Clean is proud to support that lifestyle.

Our professional cleaning team brings reliability, consistency, and a personal touch to every service. From deep cleanings before a holiday gathering to routine weekly cleanings for busy families, we help Littleton residents maintain homes that are fresh, organized, and stress-free.

We use eco-friendly products that are safe for kids and pets, and we offer custom cleaning plans to suit your home’s layout and your family’s routine. Whether you're in a historic bungalow or a newer build near Aspen Grove, you can count on Kathy Clean to deliver spotless results—every time.`,
    'Greenwood Village': `Greenwood Village is known for its upscale homes, tree-lined neighborhoods, and status as a major hub for business professionals in the Denver Tech Center (DTC). Residents here value discretion, efficiency, and high-quality service—and Kathy Clean delivers just that.

Whether you live in The Preserve, Cherry Creek Village, or near the DTC, our team of carefully vetted cleaners provides customized residential cleaning that matches the elegance and expectations of Greenwood Village households.

We specialize in maintaining luxury properties, ensuring every corner of your home—large windows, hardwood floors, marble countertops—is cleaned to perfection using non-toxic, premium products.

For busy professionals, we also offer office cleaning in home offices or commercial spaces within the DTC area. Kathy Clean is trusted by Greenwood Village residents for reliable, discreet, and high-standard cleaning service every time.`,
    'Highlands Ranch': `Highlands Ranch is one of Colorado’s most popular master-planned communities, known for its top-rated schools, family-friendly neighborhoods, and beautiful homes. With over 100,000 residents, it’s a vibrant suburb where life moves fast—and staying on top of housework can be tough.

At Kathy Clean, we provide flexible and thorough cleaning services that support the Highlands Ranch lifestyle. Whether you live in Southridge, Westridge, or Backcountry, our team delivers spotless results using green, pet-safe products.

We understand the needs of busy families, dual-income households, and remote workers. That’s why we offer recurring cleanings, deep cleans, and move-in/move-out cleanings, all backed by our 100% satisfaction guarantee.

Kathy Clean is more than a service—we’re a partner helping you keep your home clean, calm, and ready for whatever comes next.`,
  }
};

export default async function CleaningServicesComponent({ 
  location = 'Denver',
  heroImageUrl,
  whyChooseUsDescription 
}: CleaningServicesComponentProps) {
  // Use the provided content or fall back to the defaults for the location
  const safeLocation = (Object.keys(locationContent.images) as LocationName[]).includes(location as LocationName) 
    ? location as LocationName 
    : 'Denver';
    
  const imageUrl = heroImageUrl || locationContent.images[safeLocation];
  const description = whyChooseUsDescription || locationContent.descriptions[safeLocation];

  const neighborhoods: { [key: string]: string[] } = {
  'Castle Rock': [
    'Bell Mountain Ranch',
    'Castle Highlands',
    'Castle Pines Village',
    'Castlewood Ranch',
    'Cobblestone Ranch',
    'Craig-Gould (Downtown)',
    'Crystal Valley Ranch',
    'Diamond Ridge',
    'Founders Village',
    'Happy Canyon',
    'Metzler Ranch',
    'Plum Creek',
    'Red Hawk Ridge',
    'Sapphire Pointe',
    'South Town',
    'Terrain',
    'The Meadows',
    'The Woodlands'
  ],
  'Centennial': [
    'Antelope-Chapparal',
    'Cherry Knolls',
    'Copperleaf',
    'Fox Hill',
    'Foxridge',
    'Heritage Greens',
    'Heritage Village',
    'Homestead in the Willows',
    'Orchard',
    'Piney Creek',
    'Smoky Hill',
    'Southglenn',
    'Springs Ranch',
    'The Farm-Arapahoe',
    'The Knolls',
    'Tuscany',
    'Willow Creek'
  ],
  'Denver': [
    'Baker',
    'Capitol Hill',
    'Cheesman Park',
    'Cherry Creek',
    'City Park',
    'Congress Park',
    'Cory-Merrill',
    'Five Points',
    'Highlands (LoHi)',
    'Hilltop',
    'LoDo',
    'Park Hill',
    'RiNo',
    'Sloan’s Lake',
    'Stapleton/Central Park',
    'Uptown',
    'University Park',
    'Washington Park'
  ],
  'Englewood': [
    'Arapahoe Acres',
    'Belleview Park',
    'Harvard Gulch',
    'Mansfield Heights',
    'Orchard Gate',
    'South Broadway Heights'
  ],
  'Greenwood Village': [
    'Belleview Village',
    'Cherry Creek Village',
    'Dayton Triangle (bordering)',
    'Greenwood Hills',
    'Huntington Acres',
    'Sundance Hills',
    'The Preserve'
  ],
  'Highlands Ranch': [
    'Backcountry (gated communities)',
    'Central Highlands Ranch',
    'Greenwood Village adjacency',
    'Hiram’s Landing',
    'Northridge',
    'Parkside',
    'Southridge',
    'The Retreat',
    'Westridge'
  ],
  'Littleton': [
    'Aspen Grove area (south Littleton)',
    'Centennial Park',
    'Fieldstone/Heritage Hills',
    'Highlands',
    'Historic Downtown Littleton',
    'Plum Creek',
    'Riverview',
    'Southmoor Park'
  ],
  'Lone Tree': [
    'Blossoms at Lone Tree',
    'Bluffs Nature Preserve',
    'City Center',
    'Lincoln Station Corridor',
    'Park Meadows',
    'Prairie Sky',
    'RidgeGate',
    'Sky Ridge',
    'Sky Ridge Medical Campus'
  ],
  'Parker': [
    'Challenger Park Estates',
    'Cottonwood',
    'Idyllwilde',
    'Meridian Village',
    'Old Town (Downtown Parker & O’Brien Park)',
    'Stroh Ranch',
    'Stonegate',
    'The Pinery',
    'Villages of Parker'
  ]
};

  const locationNeighborhoods = location ? neighborhoods[location] : [];

  return (
    <main className="flex flex-col min-h-screen">
      <JsonLd data={cleaningServices(location)} />
      <HeroSection>
        <div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Professional Cleaning Services in <span style={{ color: '#02FDF1' }}>{location}</span>
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Kathy Clean offers top-rated, affordable, and reliable cleaning services in {location}.<br /> From homes to offices, we deliver a spotless clean every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              variant="default"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full sm:w-auto min-w-[180px]"
              asChild
            >
              <CtaButton href="/request-quote" className="w-full">
                REQUEST A QUOTE
              </CtaButton>
            </Button>
            <div className="w-full sm:w-auto min-w-[180px] h-10">
              <PhoneButton />
            </div>
          </div>
          <FeatureBar />
        </div>
        <div className="relative hidden md:flex w-full justify-center items-center">
          <img
            src={imageUrl}
            alt={`Professional cleaning services in ${location}`}
            width={480}
            height={480}
            className="object-cover rounded-lg shadow-md"
            style={{ color: 'transparent', maxWidth: 480, maxHeight: 480 }}
          />
        </div>
      </HeroSection>

      <WhyTrustUsSection 
        location={location} 
        serviceType="House Cleaning"
        locationContent={
          (safeLocation && locationContent.descriptions[safeLocation]) ? {
            title: `${safeLocation}'s Trusted House Cleaning Service`,
            description: locationContent.descriptions[safeLocation]
          } : undefined
        }
      />

      {/* Nueva sección personalizada debajo del bloque de confianza */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary-foreground">
            Our Cleaning Services in {location}
          </h2>
          <p className="text-lg text-center text-gray-700 mb-6">
            Whether you need regular house cleaning, commercial maintenance, or specialized services, we've got {location} covered with professional, reliable cleaning solutions.
          </p>

          {/* Grid de 6 tarjetas de servicios tipo ServiceCard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* House Cleaning */}
            <div className="flex flex-col bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-[720px] mx-auto h-full min-h-[500px]">
              <div className="relative w-full h-[220px] sm:h-[270px] md:h-[300px] flex-shrink-0">
                <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomAcT0ESUo3cFv8PBRDrpoYXiQwjhVE4KNzqTy" alt="House cleaning living room" className="object-cover w-full h-full" />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-navy-700 mb-2 sm:mb-3">House Cleaning</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">Enjoy a spotless home with our trusted house cleaning services in {location} and surrounding areas. We clean kitchens, bathrooms, bedrooms, and more using eco-friendly products and meticulous care. Ideal for recurring or one-time cleanings.</p>
                <a href={`/house-cleaning-${location.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center px-4 py-2 rounded font-medium shadow transition-colors mt-auto" style={{background:'#02FDF1', color:'#002B45'}}>Learn More <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></a>
              </div>
            </div>
            {/* Commercial Cleaning */}
            <div className="flex flex-col bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-[720px] mx-auto h-full min-h-[500px]">
              <div className="relative w-full h-[220px] sm:h-[270px] md:h-[300px] flex-shrink-0">
                <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom2kyI8hJ6JbmpXdcT7olMHiQWCShrEqx84YZV" alt="Commercial cleaning supermarket" className="object-cover w-full h-full" />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-navy-700 mb-2 sm:mb-3">Commercial Cleaning</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">Keep your workspace clean, healthy, and professional with our expert janitorial services. We serve offices, clinics, retail stores, and more across {location}. Trusted by brands like Whole Foods, Starbucks, IKEA, Rivian, and PetSmart.</p>
                <a href={`/commercial-cleaning-${location.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center px-4 py-2 rounded font-medium shadow transition-colors mt-auto" style={{background:'#02FDF1', color:'#002B45'}}>Learn More <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></a>
              </div>
            </div>
            {/* Window Cleaning */}
            <div className="flex flex-col bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-[720px] mx-auto h-full min-h-[500px]">
              <div className="relative w-full h-[220px] sm:h-[270px] md:h-[300px] flex-shrink-0">
                <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom0KAm82nznWpD8lt52ycuGbAavdFLke9Ugf7J" alt="Window cleaning" className="object-cover w-full h-full" />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-navy-700 mb-2 sm:mb-3">Window Cleaning</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">Get crystal-clear windows that brighten your space. We offer streak-free window cleaning for homes, offices, storefronts, and more. We use professional tools and eco-friendly products for a flawless finish every time.</p>
                <a href={`/window-cleaning-${location.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center px-4 py-2 rounded font-medium shadow transition-colors mt-auto" style={{background:'#02FDF1', color:'#002B45'}}>Learn More <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></a>
              </div>
            </div>
            {/* Pressure Washing */}
            <div className="flex flex-col bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-[720px] mx-auto h-full min-h-[500px]">
              <div className="relative w-full h-[220px] sm:h-[270px] md:h-[300px] flex-shrink-0">
                <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomp9p0B7mIQG02vMEqiTUtkudb5jB1eo97yKV8" alt="Pressure washing" className="object-cover w-full h-full" />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-navy-700 mb-2 sm:mb-3">Pressure Washing</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">Power washing services to restore {location} properties. Perfect for removing road salt residue, winter grime, and intense UV damage from Colorado's 300+ days of sunshine.</p>
                
              </div>
            </div>
            {/* Move-in/Move-out Cleaning */}
            <div className="flex flex-col bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-[720px] mx-auto h-full min-h-[500px]">
              <div className="relative w-full h-[220px] sm:h-[270px] md:h-[300px] flex-shrink-0">
                <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomsfefZuv4Gml7jzqpuCQV5ZONW3Kk98Uwa0PA" alt="Move-in/Move-out cleaning" className="object-cover w-full h-full" />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-navy-700 mb-2 sm:mb-3">Move-in/Move-out Cleaning</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">Comprehensive cleaning for {location} relocations. Perfect for getting your security deposit back, or preparing your new home for move-in.</p>
                
              </div>
            </div>
            {/* Post Construction Cleaning */}
            <div className="flex flex-col bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-[720px] mx-auto h-full min-h-[500px]">
              <div className="relative w-full h-[220px] sm:h-[270px] md:h-[300px] flex-shrink-0">
                <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomH7tq3hDgqPBhUKN3FksyTY8bIpuvZ9xz7RM0" alt="Post construction cleaning" className="object-cover w-full h-full" />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-navy-700 mb-2 sm:mb-3">Post Construction Cleaning</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">Specialized cleanup after construction or renovation projects in {location}. Removing construction dust, debris, and preparing your space for occupancy.</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {locationNeighborhoods && locationNeighborhoods.length > 0 && (
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-foreground">Neighborhoods We Serve in {location}</h2>
            <p className="text-lg text-center text-gray-700 mb-8">Kathy Clean provides cleaning services across the most vibrant and established communities in {location}. Our cleaning crews are already active in these neighborhoods, ensuring fast response times and local knowledge.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {locationNeighborhoods.map(hood => <div key={hood} className="bg-white p-4 rounded-lg shadow-sm text-center">{hood}</div>)}
            </div>
          </div>
        </section>
      )}

      <LifeInLocationSection
        location={location}
        title={lifeInLocationContent[location]?.title || `Life in ${location}`}
        paragraph={lifeInLocationContent[location]?.paragraph || ''}
        mapEmbedUrl={lifeInLocationContent[location]?.mapEmbedUrl || ''}
      />

      <section className="py-12 md:py-24 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get Your Free Cleaning Quote in {location} Today</h2>
          <p className="text-lg mb-8 text-gray-800">We make it easy to get started. Simply fill out our quote form or give us a call, and we'll provide a transparent estimate with no pressure and no surprises.</p>
          <p className="text-2xl mb-4 text-gray-800">🧽 Ready to enjoy a cleaner home in {location}?</p>
          <RequestQuoteButton />
        </div>
      </section>

    </main>
  );
}
