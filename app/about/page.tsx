"use client"

import Image from "next/image"
import { ArrowRight, Camera, Globe, Award, Users } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedButton from "@/components/animated-button"
import { aboutContent } from "@/content/about"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src={aboutContent.hero.image}
          alt={aboutContent.hero.title}
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
          <h1 className="text-4xl md:text-5xl text-white mb-4">{aboutContent.hero.title}</h1>
          <p className="text-white/90 text-lg max-w-2xl">{aboutContent.hero.subtitle}</p>
        </motion.div>
      </section>
      <div className="header-height"></div>

      {/* Bio Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[600px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={aboutContent.bio.image}
              alt={aboutContent.bio.imageAlt}
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">{aboutContent.bio.title}</h2>
            <p className="text-primary mb-4">{aboutContent.bio.paragraphs[0]}</p>
            <p className="text-primary mb-4">{aboutContent.bio.paragraphs[1]}</p>
            <p className="text-primary mb-8">{aboutContent.bio.paragraphs[2]}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Camera size={20} className="text-primary" />
                <span className="text-primary">{aboutContent.bio.facts[0].label}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={20} className="text-primary" />
                <span className="text-primary">{aboutContent.bio.facts[1].label}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-primary" />
                <span className="text-primary">{aboutContent.bio.facts[2].label}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-primary" />
                <span className="text-primary">{aboutContent.bio.facts[3].label}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {aboutContent.philosophy.title}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutContent.philosophy.items.map((item, index) => (
              <motion.div
                key={item.title}
                className="text-primary dark:text-primary-secondary bg-primary-secondary dark:bg-primary p-8 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-primary-secondary dark:text-primary-foreground text-xl mb-4">{item.title}</h3>
                <p className="text-primary-secondary dark:text-primary-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>
        <div className="space-y-12">
          {[
            {
              year: "2013",
              title: "First Exhibition",
              description:
                "Hosted my first photography exhibition in New York, featuring landscapes from across North America.",
            },
            {
              year: "2015",
              title: "National Geographic Feature",
              description:
                "My series on indigenous communities was featured in National Geographic, marking a significant milestone in my career.",
            },
            {
              year: "2018",
              title: "Photography Book",
              description:
                'Published my first photography book, "Perspectives," showcasing a decade of travel photography.',
            },
            {
              year: "2020",
              title: "Photography Workshops",
              description:
                "Began offering photography workshops and mentoring programs to share knowledge and techniques with aspiring photographers.",
            },
            {
              year: "Present",
              title: "Ongoing Projects",
              description:
                "Currently working on long-term documentary projects focused on environmental conservation and cultural preservation.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.year}
              className="flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/4">
                <h3 className="text-xl">{item.year}</h3>
              </div>
              <div className="md:w-3/4">
                <h4 className="font-medium text-2xl mb-2">{item.title}</h4>
                <p className="text-primary">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      */}
      {/* Call to Action */}
      <section className="min-w-[90%] justify-self-center mr-4 ml-4 py-20 my-20 px-4 md:px-8 rounded-3xl border-[1px] border-border">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-3xl md:text-4xl mb-6">{aboutContent.collaborate.title}</h2>
          <p className="text-primary max-w-2xl mx-auto mb-8">{aboutContent.collaborate.description}</p>
          <AnimatedButton href={aboutContent.collaborate.cta.href} variant="primary" icon={<ArrowRight size={18} />}>
            {aboutContent.collaborate.cta.label}
          </AnimatedButton>
        </motion.div>
      </section>
    </div>
  )
}
