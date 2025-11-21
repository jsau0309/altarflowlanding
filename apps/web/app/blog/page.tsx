import { getAllBlogPosts, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Insights, updates, and resources for church management
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group block"
              >
                <article className="overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg">
                  {post.featuredImage && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={urlFor(post.featuredImage).width(800).height(450).url()}
                        alt={post.featuredImage.alt || post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.categories && post.categories.length > 0 && (
                      <div className="mb-2 flex flex-wrap gap-2">
                        {post.categories.map((category) => (
                          <span
                            key={category.slug.current}
                            className="text-xs font-medium text-primary"
                          >
                            {category.title}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{post.author.name}</span>
                      <span>•</span>
                      <time dateTime={post.publishedAt}>
                        {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                      </time>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
