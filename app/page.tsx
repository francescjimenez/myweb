"use client"

import { ArrowRight } from "lucide-react"
import FeaturedCollections from "@/components/featured-collections"
import AnimatedButton from "@/components/animated-button"
import { motion } from "framer-motion"
import Image from "next/image"
import { HeroGalleryScroll } from "@/components/hero-gallery-scroll"
import { LayoutGridDemo } from "@/components/layout-image-grid"
import { homeContent } from "@/content/home"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Spacer for header */}
      <div className="header-height"></div>

      {/* Hero Section with Slider */}
      <HeroGalleryScroll />

      {/* Hero Section with Slider 
      <HeroSlider />*/}

      {/* Introduction */}
      <section id="introduction" className="mt-32 mb-20 sm:py-0 py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">{homeContent.introduction.title}</h2>
            <p className="text-primary-secondary mb-6">{homeContent.introduction.paragraphs[0]}</p>
            <p className="text-primary-secondary mb-8">{homeContent.introduction.paragraphs[1]}</p>
            <AnimatedButton href={homeContent.introduction.cta.href} variant="outline" icon={<ArrowRight size={16} />}>
              {homeContent.introduction.cta.label}
            </AnimatedButton>
          </motion.div>
          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={homeContent.introduction.image.src}
              alt={homeContent.introduction.image.alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Dynamic Frame Section 
      <DynamicFrame />*/}

      {/* Layout Grid Section */}
      <LayoutGridDemo />

       {/* Call to Action */}
      <section className="z-10 min-w-[90%] justify-self-center mr-4 ml-4 py-20 lg:my-20 sm:mt-0 sm:mb-20 px-4 md:px-8 px-2 rounded-3xl border-[1px] border-border">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-3xl md:text-4xl mb-6">{homeContent.collaborate.title}</h2>
          <p className="text-primary max-w-2xl mx-auto mb-8">{homeContent.collaborate.description}</p>
          <AnimatedButton href={homeContent.collaborate.cta.href} variant="primary" icon={<ArrowRight size={18} />}>
            {homeContent.collaborate.cta.label}
          </AnimatedButton>
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="lg:mt-32 mb-32 px-4 md:px-8 z-10 mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-3xl md:text-4xl mb-4">{homeContent.featuredCollections.title}</h2>
            <p className="text-primary max-w-2xl mx-auto">{homeContent.featuredCollections.description}</p>
          </motion.div>
          <FeaturedCollections />
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedButton href={homeContent.featuredCollections.cta.href} variant="primary" icon={<ArrowRight size={18} />}>
              {homeContent.featuredCollections.cta.label}
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
