type CollectionSeed = {
  id: string
  slug: string
  folderName: string
  format: string
  imageCount: number
  title: string
  description: string
  fullDescription: string
  tags: string[]
  featured: boolean
}

export const collectionSeeds: CollectionSeed[] = [
  {
    id: "1",
    slug: "new-zealand",
    folderName: "new zealand",
    format: "jpg",
    imageCount: 18,
    title: "New Zealand Landscapes",
    description: "Breathtaking landscapes from across New Zealand",
    fullDescription:
      "New Zealand offers some of the most diverse and dramatic landscapes in the world. From the snow-capped Southern Alps to the pristine beaches of the Coromandel Peninsula, this collection captures the raw beauty and majesty of Aotearoa.",
    tags: ["Nature", "Landscape", "Mountains"],
    featured: true,
  },
  {
    id: "2",
    slug: "tokyo",
    folderName: "Tokyo",
    format: "jpg",
    imageCount: 20,
    title: "Japan: Urban & Traditional",
    description: "The contrast between modern and traditional Japan",
    fullDescription:
      "Japan presents a fascinating juxtaposition of ultramodern urban environments and serene traditional settings. This collection explores the visual dialogue between Tokyo's neon-lit streets and the tranquil temples of Kyoto, capturing Japan's unique cultural identity.",
    tags: ["Urban", "Culture", "Architecture"],
    featured: true,
  },
  {
    id: "3",
    slug: "bali",
    folderName: "Bali",
    format: "jpeg",
    imageCount: 16,
    title: "Bali: Island of the Gods",
    description: "Tropical paradise and cultural heritage of Bali",
    fullDescription:
      "Known as the Island of the Gods, Bali captivates with its dramatic landscapes, vibrant cultural heritage, and spiritual atmosphere. This collection documents the island's terraced rice fields, ancient temples, pristine beaches, and the warmth of Balinese people.",
    tags: ["Tropical", "Culture", "Nature"],
    featured: true,
  },
  {
    id: "4",
    slug: "iceland",
    folderName: "Iceland",
    format: "jpg",
    imageCount: 14,
    title: "Iceland: Land of Fire and Ice",
    description: "Dramatic landscapes of Iceland",
    fullDescription:
      "Iceland's otherworldly landscapes showcase nature's raw power and beauty. This collection captures the country's dramatic contrasts: steaming geothermal areas alongside massive glaciers, thundering waterfalls cutting through black lava fields, and the ethereal Northern Lights dancing above it all.",
    tags: ["Nature", "Landscape", "Winter"],
    featured: false,
  },
  {
    id: "5",
    slug: "morocco",
    folderName: "Morocco",
    format: "webp",
    imageCount: 21,
    title: "Colors of Morocco",
    description: "Vibrant markets, architecture, and desert landscapes",
    fullDescription:
      "Morocco is a feast for the senses, with its vibrant colors, intricate patterns, and diverse landscapes. This collection explores the bustling medinas, ancient kasbahs, vast Sahara dunes, and the rich cultural tapestry that makes Morocco so visually captivating.",
    tags: ["Culture", "Desert", "Architecture"],
    featured: false,
  },
  {
    id: "6",
    slug: "urban-portraits",
    folderName: "Urban Portraits",
    format: "jpg",
    imageCount: 16,
    title: "Urban Portraits",
    description: "Street photography and urban life around the world",
    fullDescription:
      "This collection focuses on the human element within urban environments. Through candid street photography and environmental portraits, it captures the diversity, energy, and stories of city dwellers across different cultures and metropolises around the world.",
    tags: ["Urban", "People", "Street"],
    featured: false,
  },
]
