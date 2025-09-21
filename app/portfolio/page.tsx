"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="min-h-screen">

      <section className="relative h-[50vh] w-full">
        <Image
          src="/new zealand/new-zealand-17.jpg?height=800&width=1920"
          alt="Contact Francesc Jimenez"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl text-white mb-4">Portfolio</h1>
          <p className="text-white/90 text-lg max-w-2xl">Part of your vision</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 mt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          WIP
        </div>
      </section>
      
    </div>
  )
}
