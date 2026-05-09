"use client"

import Image from "next/image"
import { Mail } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import FeaturedCollections from "@/components/featured-collections"
import AnimatedButton from "@/components/animated-button"
import { ArrowRight } from "lucide-react"
import { contactContent } from "@/content/contact"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Spacer for header
      <div className="header-height"></div> */}

       {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src={contactContent.hero.image}
          alt={contactContent.hero.imageAlt}
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
          <h1 className="text-4xl md:text-5xl text-white mb-4">{contactContent.hero.title}</h1>
          <p className="text-white/90 text-lg max-w-2xl">{contactContent.hero.subtitle}</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 mt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6">{contactContent.intro.title}</h1>
            <p className="text-primary/60 mb-8 max-w-md">{contactContent.intro.description}</p>

            <motion.div
              className="space-y-6 mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {contactContent.intro.contactItems.map((item) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Mail className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-primary/60">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-primary dark:bg-primary-foreground p-8 rounded-2xl shadow-sm border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl mb-6">{contactContent.intro.formTitle}</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-w-[90%] justify-self-center mr-4 ml-4 py-20 my-20 px-4 md:px-8 rounded-3xl border-[1px] border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {contactContent.faq.title}
          </motion.h2>

          <div className="space-y-8">
            {contactContent.faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-medium text-xl mb-2">{item.question}</h3>
                <p className="text-primary/60">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Featured Collections */}
      <section className="mt-20 mb-20 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">{contactContent.featuredCollections.title}</h2>
            <p className="text-primary max-w-2xl mx-auto">{contactContent.featuredCollections.description}</p>
          </motion.div>
          <FeaturedCollections />
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedButton href={contactContent.featuredCollections.cta.href} variant="primary" icon={<ArrowRight size={18} />}>
              {contactContent.featuredCollections.cta.label}
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
