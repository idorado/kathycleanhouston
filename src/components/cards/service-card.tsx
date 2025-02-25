"use client"

import { motion } from "framer-motion"
import type { services } from "@/components/sections/services-section"

interface ServiceCardProps {
  service: (typeof services)[number]
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  )
}
