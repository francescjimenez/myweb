const collections = require('../app/api/stories/index.json')

export const getAllTags = (): string[] => Array.from(new Set(collections.flatMap((collection: { tags: any }) => collection.tags)))
