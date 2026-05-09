# Architecture review

## Current state

The site is now on a healthier base for maintenance:
- Next.js 16 App Router
- Tailwind 3.4.x restored for visual compatibility
- working production build
- working local dev via `next dev --webpack`
- content extraction started without changing the rendered site

The visual output, text, and images stay the same.
The main improvement already applied is structural: **content is being separated from page/component code**.

## What was wrong before

### 1. Content was hardcoded across pages and UI components
Examples:
- `app/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/showcase/page.tsx`
- `components/hero-gallery-scroll.tsx`
- `components/layout-image-grid.tsx`
- `lib/collections.ts`

Impact:
- updating copy meant editing multiple components
- images and copy were mixed with animation and layout logic
- replacing placeholder content later would be slow and error-prone

### 2. Collection data and media generation were mixed together
`lib/collections.ts` was doing both:
- defining collection content
- generating gallery photos and metadata

That made the domain harder to evolve.

### 3. Shared site data had no canonical source
Navigation, footer links, metadata, and repeated CTA copy were scattered.

### 4. Some Next 16 cleanup was still pending
- metadata `themeColor` needed to move to `viewport`
- lint debt still exists
- some template/demo components are still present in the repo

## Changes applied now

### Content layer introduced
New centralized content modules:

```txt
content/
  about.ts
  collections.ts
  contact.ts
  home.ts
  showcase.ts
  site.ts
```

These modules now hold the visible copy and image references used by the current site.

### Pages now read from content modules
Applied without changing visible output:
- `app/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/showcase/page.tsx`

### Shared components now read from content modules
Applied without changing visible output:
- `components/hero-gallery-scroll.tsx`
- `components/layout-image-grid.tsx`
- `components/footer.tsx`
- `lib/navigation.ts`

### Collection domain split into content + transformation
- `content/collections.ts` now owns collection definitions
- `lib/collections.ts` now focuses on transforming those definitions into the runtime `Collection` model and generated photo entries

This is a better separation:
- content stays editable
- collection runtime logic stays isolated

### Next 16 metadata cleanup applied
- `themeColor` moved from `metadata` to `viewport` in `app/layout.tsx`

That removes the warning path and aligns with current Next conventions.

## Resulting architecture

```txt
app/
  about/page.tsx
  contact/page.tsx
  showcase/page.tsx
  collections/[slug]/page.tsx
  page.tsx

components/
  hero-gallery-scroll.tsx
  layout-image-grid.tsx
  featured-collections.tsx
  collection-grid.tsx
  footer.tsx
  ...

content/
  site.ts
  home.ts
  about.ts
  contact.ts
  showcase.ts
  collections.ts

lib/
  collections.ts
  navigation.ts
  types.ts
```

## Why this is better

### Scalability
Adding or replacing content no longer requires hunting through animated components and pages.

### Maintainability
Copy, images, navigation, and collection definitions now have clearer ownership.

### Safer future edits
When the final real copy arrives, it can be replaced in content files without risking layout regressions.

### Better path to future CMS or MD/content migration
If later you want Sanity, Contentlayer, markdown, YAML, or a headless CMS, the site now has a content boundary already in place.

## What still remains worth doing

### 1. Reduce unnecessary client boundaries
Several top-level pages still use `"use client"` because motion logic is embedded directly in them.

Best next step:
- keep pages as server components where possible
- move animation-only pieces into smaller client subcomponents

That would reduce browser JS and make the App Router setup cleaner.

### 2. Split reusable sections into marketing primitives
Likely useful next:
- `components/sections/page-hero.tsx`
- `components/sections/cta-banner.tsx`
- `components/sections/section-heading.tsx`

That would remove repeated hero and CTA markup while preserving the exact same UI.

### 3. Clean remaining template/demo residue
There are still some demo-style components and patterns in the repo. They are not blocking, but they should either:
- become real product components
- move to an explicit experimental area
- or be removed later

### 4. Finish lint cleanup
Build is the hard requirement and it works.
Lint cleanup is still a follow-up item, not a blocker.

## Recommendation

The right move for now was exactly this one:
- keep the site looking identical
- keep the same text and images
- move content into a centralized structure
- separate content from runtime/domain logic

That gives you a much better base without forcing copy or design decisions too early.
