"use server";
import HeroSection from "@/components/HeroSection";
import WindowPriceCalculator from "@/components/WindowPriceCalculator";

interface WindowsServiceComponentProps {
  location: string;
}

const WindowsServiceComponent: React.FC<WindowsServiceComponentProps> = async ({ location }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection
        category="SERVICES"
        title={`Window Cleaning ${location ? `in ${location}` : ""}`}
        description="You work hard, so let us handle the cleaning. Enjoy a spotless home and spend your time on what truly matters."
        linkUrl="https://clienthub.getjobber.com/client_hubs/40b56a75-dbed-4f70-b807-d9a216f025a3/public/work_request/new?source=new_webpage"
        linkText="REQUEST A SERVICE"
        imgUrl="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomM7ix4wYzdDOT26oVhPrB8Uy5g9WlSQn1sNEG"
        imgAlt="Professional window cleaning service"
        imgWidth={400}
        imgHeight={400}
        imgPriority
      />

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Request a Quote */}
            <div id="request-quote">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Request a Quote</h2>
              <p className="text-gray-600 mb-8">
                For more than a decade, we've been delivering spotless, streak-free windows to homes and businesses. Formerly known as C-Thru Cleaning Services, we now operate under Kathy Clean, continuing our commitment to excellence with the same trusted quality and expertise.
              </p>
            </div>

            {/* Price Calculator */}
            <div>
                <WindowPriceCalculator />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WindowsServiceComponent;
