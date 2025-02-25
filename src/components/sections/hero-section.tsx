"use client"

import { Button } from "@/components/ui/button"
import { motion, useMotionValue, useTransform } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

interface Position {
  left: number;
  top: number;
}

export function HeroSection() {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    setPositions(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
    );
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl p-10 gap-8"
          >
            <h1 className="text-5xl md:text-7xl uppercase font-bold leading-tight mb-6 overflow-hidden ">
              <motion.span
                className="relative inline-block text-primary px-2 py-1 mb-1 mt-1 rounded"
                initial={{ opacity: 0.8, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                  backgroundColor: ["rgba(59, 130, 246, 0.1)", "rgba(59, 130, 246, 0.2)", "rgba(59, 130, 246, 0.1)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              >
                Shine
              </motion.span>
              {" "}
              and{" "}
              <span className="relative inline-block text-primary">
                Brighten
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
                >
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full shadow-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 0.05,
                        delay: i * 0.05,
                      }}
                      style={{
                        left: `${positions[i]?.left || 0}%`,
                        top: `${positions[i]?.top || 0}%`,
                      }}
                    />
                  ))}
                </motion.div>
              </span>
              <br />
              Your Space
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional cleaning services that offer quick estimates & transparent pricing
            </p>
            <Button size="lg" className="text-lg px-8 transition-transform transform hover:scale-105">
              Free Estimate
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px] hidden lg:block drop-shadow-lg"
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-20 rounded-2xl"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
            />
            <Image
              src="/pro-cleaning.jpg"
              alt="Professional Cleaner"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
      <BackgroundGrid />
    </section>
  )
}

function BackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f8f9fa_1px,transparent_1px),linear-gradient(to_bottom,#f8f9fa_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-fadeIn" />
  )
}
