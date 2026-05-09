export const homeContent = {
  hero: {
    title: "Francesc Jimenez",
    subtitle: "Welcome to my vision of the world, a journey through light, landscapes, and fleeting moments.",
    imagePaths: [
      "/Morocco/cover.webp",
      "/new zealand/cover.jpg",
      "/Tokyo/cover.jpg",
      "/Bali/cover.jpeg",
      "/Iceland/cover.jpg",
    ],
    primaryCta: { label: "Showcase", href: "/showcase" },
    secondaryCta: { label: "About", href: "/about" },
  },
  introduction: {
    title: "The Art of Seeing the World",
    paragraphs: [
      "Each photograph is more than an image, it's a story, an emotion, a moment held still in time. My work seeks beauty in sweeping landscapes and in the smallest, most fleeting details.",
      "Travel through my collections from across the globe, where every frame offers a unique perspective and an invitation to wonder.",
    ],
    cta: { label: "Learn More About Me", href: "/about" },
    image: {
      src: "/Morocco/morocco-9.webp",
      alt: "Photographer at work",
    },
  },
  featuredGrid: [
    {
      id: 1,
      title: "Tokyo Nights",
      description: "Exploring the vibrant nightlife and neon-lit streets of Tokyo's urban landscape.",
      thumbnail: "/Tokyo/tokyo-22.webp",
      className: "md:col-span-2",
    },
    {
      id: 2,
      title: "Urban Portraits",
      description: "Capturing the essence of city life through intimate street photography and urban portraiture.",
      thumbnail: "/Urban Portraits/urban-portraits-1.jpg",
      className: "col-span-1",
    },
    {
      id: 3,
      title: "New Zealand",
      description: "Documenting the raw beauty and untamed wilderness of New Zealand's landscapes.",
      thumbnail: "/new zealand/new-zealand-18.jpg",
      className: "col-span-1",
    },
    {
      id: 4,
      title: "Iceland",
      description: "Capturing the ethereal beauty of Iceland's dramatic landscapes and natural wonders.",
      thumbnail: "/Iceland/iceland-1.jpg",
      className: "md:col-span-2",
    },
  ],
  collaborate: {
    title: "Collaborate?",
    description:
      "Whether you're looking for prints, licensing, or a custom photography project, feel free to get in touch.",
    cta: { label: "Get in Touch", href: "/contact" },
  },
  featuredCollections: {
    title: "Featured Collections",
    description: "Explore some of my most popular photography collections from around the world",
    cta: { label: "View All Collections", href: "/showcase" },
  },
} as const
