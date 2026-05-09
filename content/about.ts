export const aboutContent = {
  hero: {
    image: "/Iceland/iceland-7.jpg",
    title: "About Me",
    subtitle: "The story behind the lens",
  },
  bio: {
    image: "/Iceland/iceland-12.jpg",
    imageAlt: "Photographer portrait",
    title: "The Journey",
    paragraphs: [
      "For more than a decade, I've worked in technology as a software engineer, but every journey I’ve taken has always included a camera by my side. From the skyscrapers of New York to remote trails in Peru, from diving into Indonesia’s oceans to meeting tribes and wildlife in Africa, my camera has been my way of experiencing the world.",
      "What truly captivates me is the landscape and the art of composition. I’m drawn to slow, intentional photography: waiting for the sun to rise at the exact spot I planned, capturing the Milky Way as night falls, or shaping light with a flash to reveal hidden details.",
      "Today, by sharing my portfolio, I want to go further, to connect with people, cultures, and emotions. Each image is more than a photograph; it is a story, an invitation to see the world through my lens.",
    ],
    facts: [
      { icon: "camera", label: "Sony α7 IV" },
      { icon: "globe", label: "30+ Countries" },
      { icon: "award", label: "Award-winning" },
      { icon: "users", label: "Workshops & Mentoring" },
    ],
  },
  philosophy: {
    title: "My Philosophy",
    items: [
      {
        title: "Patience",
        description:
          "Great photography is never rushed. I embrace the wait for the perfect light, the stillness before the stars appear, and the silence that reveals the essence of a place.",
      },
      {
        title: "Connection",
        description:
          "Photography is more than landscapes; it's about people, cultures, and emotions. Each frame is a bridge that connects us to one another and to the world around us.",
      },
      {
        title: "Wonder",
        description:
          "I approach landscapes and cultures with a sense of awe and curiosity. Each frame is a celebration of the extraordinary beauty that surrounds us and a reminder to look closer.",
      },
    ],
  },
  collaborate: {
    title: "Collaborate?",
    description:
      "Whether you're looking for prints, licensing, or a custom photography project, feel free to get in touch.",
    cta: { label: "Get in Touch", href: "/contact" },
  },
} as const
