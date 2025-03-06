"use client";
import { useState } from 'react'
import { RequestHouseCleaningJobForm } from '@/components/forms/request-house-cleaning-job'
import { RequestBusinessCleaningJobForm } from '@/components/forms/request-business-cleaning-job'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function ServiceSelector() {
  const [selectedService, setSelectedService] = useState<'house' | 'business' | null>(null)

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Select Service Type</CardTitle>
      </CardHeader>
      <CardContent>
        {!selectedService ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
              size="lg"
              variant={selectedService === 'house' ? 'default' : 'outline'}
              className="w-full h-32 flex flex-col items-center justify-center gap-2 text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedService('house')}
            >
              🏠 House Cleaning
              <span className="text-sm font-normal">Residential Services</span>
            </Button>
            <Button
              size="lg"
              variant={selectedService === 'business' ? 'default' : 'outline'}
              className="w-full h-32 flex flex-col items-center justify-center gap-2 text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedService('business')}
            >
              🏢 Business Cleaning
              <span className="text-sm font-normal">Commercial Services</span>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Button
              variant="ghost"
              className="mb-4 w-full sm:w-auto"
              onClick={() => setSelectedService(null)}
            >
              ← Back
            </Button>
            
            {selectedService === 'house' && <RequestHouseCleaningJobForm />}
            {selectedService === 'business' && <RequestBusinessCleaningJobForm />}
          </div>
        )}
      </CardContent>
    </Card>
  )
}