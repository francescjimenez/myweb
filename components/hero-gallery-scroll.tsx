'use client'

import Image from "next/image"
import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/hero-gallery-scroll-animation"
import AnimatedButton from "@/components/animated-button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { homeContent } from "@/content/home"

const IMAGES = homeContent.hero.imagePaths

export function HeroGalleryScroll() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell key={index} className="relative overflow-hidden rounded-lg shadow-xl">
            <Image
              fill
              src={imageUrl}
              alt=""
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center"
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center md:pt-32">
        <motion.h1
          className="max-w-xl text-5xl tracking-tighter text-primary text-backdrop-invert"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {homeContent.hero.title}
        </motion.h1>
        <motion.p
          className="my-6 max-w-xl text-primary "
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {homeContent.hero.subtitle}
        </motion.p>
        <div className="flex items-center flex-col md:flex-row justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <AnimatedButton href={homeContent.hero.primaryCta.href} variant="outline" icon={<ArrowRight size={16} />}>
              {homeContent.hero.primaryCta.label}
            </AnimatedButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <AnimatedButton href={homeContent.hero.secondaryCta.href} variant="outline" icon={<ArrowRight size={16} />}>
              {homeContent.hero.secondaryCta.label}
            </AnimatedButton>
          </motion.div>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}
