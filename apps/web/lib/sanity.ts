import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export interface BlogPost {
  _id: string
  _createdAt: string
  title: string
  slug: {
    current: string
  }
  author: {
    name: string
    image?: any
    bio?: any[]
  }
  featuredImage: any
  excerpt: string
  content: any[]
  categories?: Array<{
    title: string
    slug: {
      current: string
    }
  }>
  tags?: string[]
  publishedAt: string
  metaDescription?: string
  metaKeywords?: string[]
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    "author": author->{name, image, bio},
    featuredImage,
    excerpt,
    content,
    "categories": categories[]->{ title, slug },
    tags,
    publishedAt,
    metaDescription,
    metaKeywords
  }`

  return client.fetch(query)
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    "author": author->{name, image, bio},
    featuredImage,
    excerpt,
    content,
    "categories": categories[]->{ title, slug },
    tags,
    publishedAt,
    metaDescription,
    metaKeywords
  }`

  return client.fetch(query, { slug })
}

export async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  const query = `*[_type == "blog" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    "author": author->{name, image, bio},
    featuredImage,
    excerpt,
    content,
    "categories": categories[]->{ title, slug },
    tags,
    publishedAt,
    metaDescription,
    metaKeywords
  }`

  return client.fetch(query, { categorySlug })
}
