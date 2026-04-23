import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-secondary-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/house-cleaning-houston"
                  className="text-white hover:text-cyan-500"
                >
                  Residential cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial-cleaning-houston"
                  className="text-white hover:text-cyan-500"
                >
                  Commercial cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about-us"
                  className="text-white hover:text-cyan-500"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas"
                  className="text-white hover:text-cyan-500"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/request-quote"
                  className="text-white hover:text-cyan-500"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">
              Contact Us
            </h3>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full p-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-secondary-foreground"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <a
                    href="tel:+13464886044"
                    className="text-white hover:text-cyan-500"
                  >
                    (346) 488-6044
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full p-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-secondary-foreground"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <a
                    href="mailto:info@kathyclean.com"
                    className="text-white hover:text-cyan-500"
                  >
                    info@kathyclean.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address & Map Column */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">
              Our Location
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=9219+Katy+Fwy+%23136+Houston+TX+77024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-500 block"
              >
                9219 Katy Fwy #136,
                <br />
                Houston, TX 77024,
                <br />
                United States
              </a>
              <div className="mt-2 w-full h-48 rounded-lg overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=9219+Katy+Fwy+%23136,+Houston,+TX+77024&z=15&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kathy Clean Houston location — 9219 Katy Fwy #136, Houston TX 77024"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary">
          <p>&copy; 2026 Kathy Clean Houston. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-primary">
              Terms of Service
            </Link>
            <button type="button" className="text-primary">
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
