import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ResidentialPriceCalculator } from "@/components/tools/residential-price-calculator"
import Image from "next/image"
import Link from "next/link"

const whyChooseUsReasons = [
  {
    icon: "✓",
    title: "Quality",
    description: "We don't cut corners. Our detailed cleaning process ensures your space is spotless every time."
  },
  {
    icon: "🔒",
    title: "Fully Insured & Bonded",
    description: "Rest easy knowing that our company is fully insured and bonded. Your property and belongings are protected while we clean."
  },
  {
    icon: "😊",
    title: "Happy Employees = Better Service",
    description: "Our team members are professionally trained, background-checked, and fairly compensated for their excellent work."
  },
  {
    icon: "✓",
    title: "Satisfaction Guaranteed",
    description: "Our service is 100% satisfaction guaranteed. If you are not completely satisfied, we'll re-clean the area at no additional cost."
  }
]

const testimonials = [
  {
    quote: "A worthwhile piece of peace",
    author: "Sarah",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male"
  },
  {
    quote: "A fantastic bit of freshness",
    author: "Michael",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male"
  },
  {
    quote: "A refreshing gleaming review",
    author: "Jessica",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
  }
]

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Clean Spaces, <span className="text-primary">Brighter Lives</span>
              </h1>
              <p className="text-lg text-gray-600">
                We transform spaces into welcoming, safe, and productive environments where people thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" asChild>
                  <Link href="/residential">RESIDENTIAL</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/commercial">COMMERCIAL</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl hidden md:block">
              <Image 
                src="/pro-cleaning.jpg" 
                alt="Professional cleaning service" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section id="calculator" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-primary">Calculate Your Cleaning Cost</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our interactive calculator to get an instant estimate for your residential cleaning needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image 
                src="/pro-cleaning.jpg" 
                alt="Professional cleaner with cleaning supplies" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ResidentialPriceCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image 
                    src="/residential-cleaning.png" 
                    alt="Residential Cleaning" 
                    width={300} 
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Residential Cleaning</h3>
                <p className="text-gray-600 mb-4">Keep your home spotless with our professional residential cleaning services.</p>
                <Button variant="link" className="text-blue-600" asChild>
                  <Link href="/residential">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image 
                    src="/commercial-cleaning.png" 
                    alt="Commercial Cleaning" 
                    width={300} 
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Commercial Cleaning</h3>
                <p className="text-gray-600 mb-4">Keep your business spotless with our professional commercial cleaning services.</p>
                <Button variant="link" className="text-blue-600" asChild>
                  <Link href="/commercial">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image 
                    src="/window-washing.png" 
                    alt="Window Washing" 
                    width={300} 
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Window Washing</h3>
                <p className="text-gray-600 mb-4">Make your windows gleam with our professional window cleaning services.</p>
                <Button variant="link" className="text-blue-600" asChild>
                  <Link href="/window-cleaning">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsReasons.map((reason) => (
              <Card key={reason.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl text-blue-600 mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Experiences */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Experiences</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        width={64} 
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-lg font-medium mb-2">"{testimonial.quote}"</p>
                  <p className="text-gray-600">{testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
