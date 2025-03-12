"use server";

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Link from 'next/link';

export async function ServiceSelector() {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-primary">Choose Your Cleaning Service</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Button
                variant="outline"
                size="lg"
                className="w-full h-40 flex flex-col items-center justify-center gap-3 text-xl group hover:bg-primary/10 border-2 border-gray-200 hover:border-primary rounded-xl"
                asChild
              >
                <Link href="/residential" className="p-4">
                  <span className="text-3xl mb-2">🏠</span>
                  <span className="font-semibold group-hover:text-primary transition-colors">House Cleaning</span>
                  <span className="text-sm text-gray-500 group-hover:text-primary/80 transition-colors">Residential Services</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full h-40 flex flex-col items-center justify-center gap-3 text-xl group hover:bg-primary/10 border-2 border-gray-200 hover:border-primary rounded-xl"
                asChild
              >
                <Link href="/commercial" className="p-4">
                  <span className="text-3xl mb-2">🏢</span>
                  <span className="font-semibold group-hover:text-primary transition-colors">Business Cleaning</span>
                  <span className="text-sm text-gray-500 group-hover:text-primary/80 transition-colors">Commercial Services</span>
                </Link>
              </Button>
          </div>
      </CardContent>
    </Card>
  )
}