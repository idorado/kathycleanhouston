"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ContactPage() {

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CONTACT</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please contact us by email or phone today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-full md:w-1/2">
                <Image 
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom8WFaPuKhMCiFKE7nTrZgcpJWtXBskwHlzmqf" 
                  alt="Kathy Clean Houston office" 
                  width={500} 
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Kathy Clean Houston</h2>
                <address className="not-italic text-gray-600 space-y-2">
                  <p>Houston, TX</p>
                </address>
                <div className="space-y-2">
                  <p className="font-medium">Email: <a href="mailto:info@kathyclean.com" className="text-blue-600 hover:underline">info@kathyclean.com</a></p>
                  <p className="font-medium">Phone: <a href="tel:+13464886044" className="text-blue-600 hover:underline">(346) 488-6044</a></p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
              <p className="text-gray-600 mb-2">
                Serving Houston and Harris County, including Houston, Spring Branch, Houston Heights, Upper Kirby, Memorial, Uptown, Bellaire, and the Medical Center Area.
              </p>
              <div className="mt-6 w-full rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomai17bhrN0W8yorQH6lnDudV4OjgIFLEC2YpM"
                  alt="Kathy Clean Houston Service Areas"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
