"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { motion } from "framer-motion"
import Logo from "./logo"
import useDisableRightClick from './useDisableRightClick'; // Adjust the import path as necessary
import Image from 'next/image'
import { siteContent } from "@/content/site"

export default function Footer() {
  useDisableRightClick(); // Apply the hook to disable right-click on images

  return (
    <motion.footer
      className="bg-background border-t border-border py-12 px-4 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Link href="/" className="font-old-london text-2xl font-bold inline-block text-foreground">
              <Logo size={32}/>
            </Link>
          </div>
          <p className="text-muted-foreground max-w-md mb-6 max-w-xs">
            {siteContent.footer.description}
          </p>
          <div className="flex flex-wrap gap-3 items-center text-sm text-muted-foreground">
            {siteContent.footer.socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.label}
              </motion.a>
            ))}
            <ThemeToggle />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="section-title text-2xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {siteContent.footer.quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="section-title text-2xl mb-4">Contact</h3>
          <ul className="space-y-2 text-muted-foreground">
            <h4 className="text-primary">Email</h4>
            <a href={`mailto:${siteContent.footer.email}`}><li>{siteContent.footer.email}</li></a>
            <h4 className="text-primary">Location</h4>
            <li>
              {siteContent.footer.locationPrefix}
              <Image src="/assets/heart.png" alt="❤️" width={22} height={22} className="inline" />
              {siteContent.footer.locationSuffix}
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border">
        <motion.p
          className="text-center text-muted-foreground text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}
