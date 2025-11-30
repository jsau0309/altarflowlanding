import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  // Use CDN for production, but disable for fresher content during development
  useCdn: process.env.NODE_ENV === "production",
})

// Helper function to build Sanity image URLs
export function urlForImage(image: SanityImage | undefined): string | null {
  if (!image?.asset?._ref) return null

  // Parse the asset reference to build the URL
  // Format: image-{id}-{dimensions}-{format}
  const ref = image.asset._ref
  const [, id, dimensions, format] = ref.split("-")

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`
}

// Types
export interface SanityImage {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  alt?: string
}

export interface Author {
  _id: string
  name: string
  image?: SanityImage
  bio?: string
}

export interface Category {
  _id: string
  title: string
  slug: { current: string }
}

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  author: Author
  featuredImage?: SanityImage
  excerpt: string
  content?: unknown[] // Portable Text blocks
  publishedAt: string
  categories?: Category[]
  tags?: string[]
  metaDescription?: string
  metaKeywords?: string[]
}

// Queries
export async function getLatestBlogPosts(limit = 3): Promise<BlogPost[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc)[0...${limit}] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featuredImage {
      ...,
      alt
    },
    author-> {
      _id,
      name,
      image
    },
    categories[]-> {
      _id,
      title,
      slug
    },
    tags
  }`

  return client.fetch(query, {}, { next: { revalidate: 60 } })
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featuredImage {
      ...,
      alt
    },
    author-> {
      _id,
      name,
      image
    },
    categories[]-> {
      _id,
      title,
      slug
    },
    tags
  }`

  return client.fetch(query, {}, { next: { revalidate: 60 } })
}

export async function getAllCategories(): Promise<Category[]> {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug
  }`

  return client.fetch(query, {}, { next: { revalidate: 60 } })
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    featuredImage {
      ...,
      alt
    },
    author-> {
      _id,
      name,
      image,
      bio
    },
    categories[]-> {
      _id,
      title,
      slug
    },
    tags,
    metaDescription,
    metaKeywords
  }`

  return client.fetch(query, { slug }, { next: { revalidate: 60 } })
}
