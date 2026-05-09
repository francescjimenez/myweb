"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useShutterSound } from "./sound-effects"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { playShutterSound } = useShutterSound()

  const updateSafariThemeColor = (isDark: boolean) => {
    if (typeof window === 'undefined') return

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (!isMobile) return

    let metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta')
      metaThemeColor.setAttribute('name', 'theme-color')
      document.head.appendChild(metaThemeColor)
    }

    metaThemeColor.setAttribute('content', isDark ? '#000000' : '#ffffff')
  }

  const toggleTheme = () => {
    playShutterSound()
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark"
    updateSafariThemeColor(nextTheme === "dark")
    setTheme(nextTheme)
  }

  if (!resolvedTheme) {
    return <div className="w-10 h-10" aria-hidden="true" />
  }

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
      aria-label={resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: resolvedTheme === "dark" ? 0 : 180,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        {resolvedTheme === "dark" ? (
          <Sun size={20} className="text-primary" />
        ) : (
          <Moon size={20} className="text-primary" />
        )}
      </motion.div>
    </motion.button>
  )
}
