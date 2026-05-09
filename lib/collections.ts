import { collectionSeeds } from "@/content/collections"
import type { Collection, Photo } from "./types"

const defaultMetadata = {
  camera: "Sony Alpha A7 IV",
  lens: "24-70mm f/2.8",
  aperture: "f/8.0",
  shutterSpeed: "1/250",
  iso: "100",
  focalLength: "35mm",
  takenAt: new Date().toISOString().split("T")[0],
} as const

const aspectRatios = [
  { width: 1800, height: 1200 },
  { width: 1800, height: 1350 },
  { width: 1800, height: 1080 },
  { width: 1200, height: 1800 },
] as const

function getImageFormat(slug: string, index: number, fallbackFormat: string): string {
  if (slug === "bali" && index >= 10 && index <= 15) return "jpg"
  return fallbackFormat
}

function getCoverImagePath(folderName: string, format: string): string {
  return `/${folderName}/cover.${format}`
}

function getCollectionImages(seed: (typeof collectionSeeds)[number]): Photo[] {
  return Array.from({ length: seed.imageCount }, (_, i) => {
    const index = i + 1
    const format = getImageFormat(seed.slug, index, seed.format)
    const dimensions = aspectRatios[index % aspectRatios.length]

    return {
      id: `${seed.slug}-${index}`,
      src: `/${seed.folderName}/${seed.slug}-${index}.${format}`,
      width: dimensions.width,
      height: dimensions.height,
      alt: `${seed.slug} image ${index}`,
      metadata: defaultMetadata,
    }
  })
}

const collections: Collection[] = collectionSeeds.map((seed) => ({
  id: seed.id,
  slug: seed.slug,
  title: seed.title,
  description: seed.description,
  fullDescription: seed.fullDescription,
  coverImage: getCoverImagePath(seed.folderName, seed.format),
  tags: seed.tags,
  featured: seed.featured,
  photos: getCollectionImages(seed),
}))

export const getAllCollections = (): Collection[] => collections
export const getFeaturedCollections = (): Collection[] => collections.filter((collection) => collection.featured)
export const getCollection = (slug: string): Collection | undefined => collections.find((collection) => collection.slug === slug)
export const getAllTags = (): string[] => Array.from(new Set(collections.flatMap((collection) => collection.tags)))
