export const siteContent = {
  metadata: {
    title: "Francesc Jimenez | Landscape and travel Photographer",
    description: "Francesc Jimenez portfolio, professional photographer, to showcase powerful visual stories.",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Showcase", href: "/showcase" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  footer: {
    description:
      "Capturing moments and telling stories through the lens. Professional photography services for all your needs.",
    socialLinks: [
      { label: "Instagram", href: "https://instagram.com/desendoll" },
      { label: "Twitter", href: "https://twitter.com/francescjimenez" },
      { label: "YouTube", href: "https://youtube.com/desendoll" },
      { label: "LinkedIn", href: "https://linkedin.com/in/francescjimenez" },
    ],
    quickLinks: [
      { label: "Showcase", href: "/showcase" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    email: "contactar@francescjimenez.com",
    locationPrefix: "Build with ",
    locationSuffix: " from Barcelona",
  },
} as const
