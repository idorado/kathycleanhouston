"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function PhoneButton() {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 font-medium text-black cursor-pointer"
      onClick={() => window.location.href = 'tel:+13036812559'}
    >
      <Phone className="h-5 w-5 text-black" />
      (303) 681-2559
    </Button>
  )
}
