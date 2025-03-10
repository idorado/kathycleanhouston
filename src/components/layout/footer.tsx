import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>7500 East Arapahoe Road</p>
            <p>Centennial, CO 80112</p>
            <p className="mt-2">(303) 681-2559</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <Link href="#residential">Residential Cleaning</Link>
              <Link href="#commercial">Commercial Cleaning</Link>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <p>Our cleaning services are available throughout Colorado, Houston, and Atlanta.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
